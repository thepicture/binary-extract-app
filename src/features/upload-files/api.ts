import { unzipRaw } from "unzipit";

import { BINARY_PARSERS, ZIP_MAGIC } from "./config";

export const parseContent = async (array: number[], parsedFiles: File[]) => {
  for (let i = 0; i < array.length; i++) {
    if (await isArchive(array.slice(i, i + 4))) {
      try {
        const zip = await unzipRaw(new Uint8Array(array.slice(i)));
        const entries = zip.entries;

        for (const entry of entries) {
          await parseContent(
            Array.from(new Uint8Array(await entry.arrayBuffer())),
            parsedFiles
          );
        }

        break;
      } catch (error) {
        console.log(`malformed zip at offset ${i}`);
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
  return areMagicBytesSame(Array.from(array), ZIP_MAGIC);
};

export const areMagicBytesSame = (array1: number[], array2: number[]) => {
  return array1.every((value, index) => array2[index] === value);
};
