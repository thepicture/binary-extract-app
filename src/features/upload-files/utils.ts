import { ZIP_MAGIC } from "./config";

export const bytesToDecimal = (bytes: number[]) =>
  (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3];

export type BinaryDescriptor = {
  chunkLength: number;
  name: string;
  type: string;
};

export type BinaryParsers = {
  [key: string]: (array: number[]) => BinaryDescriptor;
};

export const MIDI_PARSE = (array: number[]) => {
  let chunkLength = 0;

  let didReadTrackChunk = false;

  for (let i = 0; ; i++) {
    const hasFurtherMTrk =
      array.slice(i, i + 4).join("") === [0x4d, 0x54, 0x72, 0x6b].join("");

    if (didReadTrackChunk && !hasFurtherMTrk) {
      break;
    }

    chunkLength++;

    if (hasFurtherMTrk) {
      const trackLength = 4 + bytesToDecimal(array.slice(i + 4, i + 4 + 4)) + 3;

      didReadTrackChunk = true;
      // read the MTrk
      chunkLength += trackLength;

      // offset current chunk
      i += trackLength;
    }
  }

  return {
    chunkLength,
    name: `${`${Date.now().toString()}_${Math.random()
      .toString()
      .slice(2)}`}.mid`,
    type: "audio/midi",
  };
};

export const RIFF_PARSE = (array: number[]) => {
  return {
    chunkLength:
      4 +
      parseInt(
        array
          .slice(4, 4 + 4)
          .reverse()
          .map((value) => value.toString(16))
          .join(""),
        16
      ),
    name: `${`${Date.now().toString()}_${Math.random()
      .toString()
      .slice(2)}`}.wav`,
    type: "audio/wav",
  };
};

export const isArchive = async (array: number[]) => {
  return areMagicBytesSame(Array.from(array), ZIP_MAGIC);
};

export const areMagicBytesSame = (array1: number[], array2: number[]) => {
  return array1.every((value, index) => array2[index] === value);
};
