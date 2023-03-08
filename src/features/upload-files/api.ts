import { unzipRaw } from "unzipit";

import { BINARY_PARSERS, ZIP_MAGIC_END } from "./config";
import { areMagicBytesSame, isArchive } from "./utils";

export class BinaryParser extends EventTarget {
  files: File[] = [];

  async parseBinary(array: number[]): Promise<File[]> {
    this.resetFiles();

    await this.parseContent(array);

    return this.files;
  }

  private async parseContent(array: number[]): Promise<void> {
    for (let i = 0; i < array.length; i++) {
      if (await isArchive(array.slice(i, i + 4))) {
        for (let j = 0; ; j++) {
          if (j > array.length) {
            break;
          }

          try {
            const chunkLength = getZipChunkLength(/* Start index */ i, array);

            const zip = await unzipRaw(
              new Uint8Array(array.slice(i, i + chunkLength + j))
            );

            const { entries } = zip;

            for (const entry of entries) {
              await this.parseContent(
                Array.from(new Uint8Array(await entry.arrayBuffer()))
              );
            }

            break;
          } catch (error) {
            continue;
          }
        }
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

      this.files.push(
        new File([new Uint8Array(array.slice(i, i + chunkLength))], name, {
          type,
        })
      );

      i += chunkLength - 1;
      this.dispatchEvent(
        new CustomEvent("progress", { detail: (i / array.length) * 100 })
      );
    }
  }

  private resetFiles() {
    this.files = [];
  }
}

const getZipChunkLength = (startIndex: number, array: number[]) => {
  let zipChunkLength = 3;

  for (let i = startIndex; ; i++) {
    zipChunkLength++;

    if (areMagicBytesSame(array.slice(i, i + 4), ZIP_MAGIC_END)) {
      break;
    } else if (i > array.length) {
      throw new RangeError("malformed zip file");
    }
  }

  return zipChunkLength;
};
