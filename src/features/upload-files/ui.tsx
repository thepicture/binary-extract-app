import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import JSZip from "jszip";

import { parseBinary } from "./api";

export const UploadFiles = () => {
  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "done") {
      const files = info.fileList as UploadFile[];

      const parsedFiles: File[] = [];

      await parseBinary(
        Array.from(
          new Uint8Array(
            await files[files.length - 1].originFileObj!.arrayBuffer()
          )
        ),
        parsedFiles
      );

      const zip = new JSZip();

      for (const file of parsedFiles) {
        zip.file(file.name, await file.arrayBuffer());
      }

      await zip.generateAsync({ type: "blob" }).then((content) => {
        const url = URL.createObjectURL(content);
        const anchor = document.createElement("a");
        anchor.style.display = "none";
        anchor.href = url;
        anchor.download = "output.zip";
        document.body.appendChild(anchor);

        anchor.click();

        window.URL.revokeObjectURL(url);
        anchor.remove();
      });
    }
  };

  return (
    <Upload
      customRequest={({ onSuccess }) => onSuccess!("")}
      onChange={handleChange}
      multiple={false}
    >
      <Button icon={<UploadOutlined />}>Upload Files</Button>
    </Upload>
  );
};
