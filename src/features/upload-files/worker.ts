/* eslint-disable no-restricted-globals */
import { BinaryParser } from "./api";

self.onmessage = async ({
  data: { array },
}: MessageEvent<{ array: number[]; parsedFiles: File[] }>) => {
  const binaryParser = new BinaryParser();
  binaryParser.addEventListener("progress", (event: Event) => {
    self.postMessage({
      type: "progress",
      message: (event as unknown as CustomEvent).detail,
    });
  });
  const files = await binaryParser.parseBinary(array);

  self.postMessage({ type: "done", message: files });
};

export {};
