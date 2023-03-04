import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import JSZip from "jszip";

import { parseBinary } from "./api";

export const UploadFiles = () => {
  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "done") {
      const files = info.fileList as RcFile[];

      const parsedFiles: File[] = [];

      files.forEach((file) => parseBinary(file, parsedFiles));

      const zip = new JSZip();
      parsedFiles.forEach(async (file) =>
        zip.file(file.name, await file.arrayBuffer())
      );
      zip.generateAsync({ type: "blob" }).then((content) => {
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
      multiple
      onChange={handleChange}
    >
      <Button icon={<UploadOutlined />}>Upload Files</Button>
    </Upload>
  );
};
