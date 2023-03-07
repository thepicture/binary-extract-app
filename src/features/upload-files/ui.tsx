import { UploadOutlined } from "@ant-design/icons";
import { Alert, Button, Progress, Upload } from "antd";
import { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import JSZip from "jszip";
import { useState } from "react";

import { BinaryParser } from "./api";

export const UploadFiles = () => {
  const [parsed, setParsed] = useState(false);
  const [filesCount, setFilesCount] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "done") {
      const files = info.fileList as UploadFile[];

      const array = Array.from(
        new Uint8Array(
          await files[files.length - 1].originFileObj!.arrayBuffer()
        )
      );

      let parsedFiles: File[];

      if ("Worker" in window) {
        parsedFiles = await new Promise((resolve) => {
          const worker = new Worker(new URL("./worker.ts", import.meta.url));

          worker.postMessage({ array });

          worker.onmessage = ({
            data: { type, message },
          }: MessageEvent<{ type: string; message: number | File[] }>) => {
            if (type === "done") {
              worker.terminate();

              resolve(message as File[]);
            } else if (type === "progress") {
              setPercent(message as number);
            }
          };
        });
      } else {
        parsedFiles = await new BinaryParser().parseBinary(array);
      }

      const zip = new JSZip();

      if (parsedFiles.length === 0) {
        setParsed(true);
        setFilesCount(0);

        return;
      } else {
        setParsed(true);
        setFilesCount(parsedFiles.length);
      }

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

      setPercent(0);
    }
  };

  return (
    <>
      <Upload
        customRequest={({ onSuccess }) => onSuccess!("")}
        onChange={handleChange}
        multiple={false}
        maxCount={1}
      >
        <Button icon={<UploadOutlined />}>Upload Files</Button>
        {percent ? (
          <Progress percent={Number(percent.toFixed(2))} status="active" />
        ) : null}
      </Upload>
      {parsed &&
        (filesCount === 0 ? (
          <Alert message="No any files found in the binary" type="warning" />
        ) : (
          <Alert
            message={`Conversion successful, found ${filesCount} file${
              filesCount === 1 ? "" : "s"
            }`}
            type="success"
          />
        ))}
    </>
  );
};
