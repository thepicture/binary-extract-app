import { bytesToDecimal } from "./utils";

export const FIRST_4_BYTES = [0, 4];
export const FIRST_7_BYTES = [0, 7];

export const SOURCE_CODE_LINK =
  "https://github.com/thepicture/binary-extract-app";

export type BinaryDescriptor = {
  chunkLength: number;
  name: string;
  type: string;
};

export type BinaryParsers = {
  [key: string]: (array: number[]) => BinaryDescriptor;
};

export const BINARY_PARSERS: BinaryParsers = {
  "4d5d6864": (array) => {
    return {
      chunkLength: bytesToDecimal(array.slice(18, 22)),
      name: `${Date.now().toString()}.mid`,
      type: "audio/midi",
    };
  },
};
