import { unzipRaw } from "unzipit";

import { BINARY_PARSERS, FIRST_4_BYTES, FIRST_7_BYTES } from "./config";

const ZIP_MAGIC = [0x50, 0x4b];

export const areMagicBytesSame = (array1: number[], array2: number[]) => {
  return array1.every((value, index) => array2[index] === value);
};

export const parseContent = async (blob: Blob, parsedFiles: File[]) => {
  const buffer = Array.from(new Uint8Array(await blob.arrayBuffer()));

  for (let i = 0; i < buffer.length; i++) {
    const parse =
      BINARY_PARSERS[
        buffer
          .slice(...FIRST_4_BYTES)
          .map((value) => value.toString(16).padStart(2, "0"))
          .join("")
      ];

    if (!parse) {
      continue;
    }

    const { name, type, chunkLength } = parse(buffer);
    parsedFiles.push(
      new File([new Uint8Array(buffer.slice(i, i + chunkLength))], name, {
        type,
      })
    );

    i += chunkLength;
  }
};

export const parseBinary = async (blob: Blob, parsedFiles: File[]) => {
  if (await isArchive(blob)) {
    await unzipRaw(blob)
      .then((zip) => zip.entries)
      .then((entries) =>
        entries.forEach(async (entry) =>
          parseBinary(await entry.blob(), parsedFiles)
        )
      );
  } else {
    await parseContent(blob, parsedFiles);
  }
};

export const isArchive = async (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const magicBytes = new Uint8Array(reader.result as ArrayBuffer).slice(
        ...FIRST_4_BYTES
      );

      resolve(areMagicBytesSame(Array.from(magicBytes), ZIP_MAGIC));
    };

    reader.onerror = (error) => {
      console.error(error);
      reject(error);
    };

    reader.readAsArrayBuffer(blob.slice(...FIRST_7_BYTES));
  });
};
