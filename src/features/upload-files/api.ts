import { unzipRaw } from "unzipit";

import { BINARY_PARSERS } from "./config";

const ZIP_MAGIC = [0x50, 0x4b, 0x03, 0x04];

export const areMagicBytesSame = (array1: number[], array2: number[]) => {
  return array1.every((value, index) => array2[index] === value);
};

export const parseContent = async (array: number[], parsedFiles: File[]) => {
  for (let i = 0; i < array.length; i++) {
    if (await isArchive(array.slice(i))) {
      let length = 4;
      while (true) {
        try {
          const zip = await unzipRaw(
            new Uint8Array(array.slice(i, i + length))
          );
          const entries = zip.entries;

          for (const entry of entries) {
            await parseContent(
              Array.from(new Uint8Array(await entry.arrayBuffer())),
              parsedFiles
            );
          }
          break;
        } catch (error) {
          length++;
        }
      }
      continue;
    }

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
  await parseContent(array, parsedFiles);
};

export const isArchive = async (array: number[]) => {
  return areMagicBytesSame(Array.from(array.slice(0, 4)), ZIP_MAGIC);
};
