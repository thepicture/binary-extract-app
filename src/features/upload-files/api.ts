import { unzipRaw } from "unzipit";

import { BINARY_PARSERS } from "./config";

const ZIP_MAGIC = [0x50, 0x4b];

export const areMagicBytesSame = (array1: number[], array2: number[]) => {
  return array1.every((value, index) => array2[index] === value);
};

export const parseContent = async (array: number[], parsedFiles: File[]) => {
  for (let i = 0; i < array.length; i++) {
    const parseKey = array
      .slice(i, i + 4)
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("");
    const parse = BINARY_PARSERS[parseKey];

    if (!parse) {
      continue;
    }

    const { name, type, chunkLength } = parse(array.slice(i));
    parsedFiles.push(
      new File([new Uint8Array(array.slice(i, i + chunkLength))], name, {
        type,
      })
    );

    i += chunkLength - 1;
  }
};

export const parseBinary = async (array: number[], parsedFiles: File[]) => {
  if (await isArchive(array)) {
    const zip = await unzipRaw(new Uint8Array(array));
    const entries = zip.entries;
    for (const entry of entries) {
      await parseBinary(
        Array.from(new Uint8Array(await entry.arrayBuffer())),
        parsedFiles
      );
    }
  } else {
    await parseContent(array, parsedFiles);
  }
};

export const isArchive = async (array: number[]) => {
  return areMagicBytesSame(Array.from(array.slice(0, 2)), ZIP_MAGIC);
};
