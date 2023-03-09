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
  const chunkLength =
    4 +
    parseInt(
      array
        .slice(4, 4 + 4)
        .reverse()
        .map((value) => value.toString(16).padStart(2, "0"))
        .join(""),
      16
    );

  return {
    chunkLength: chunkLength,
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

export const JPEG_PARSE = (array: number[]) => {
  return {
    chunkLength:
      array.findIndex(
        (_, index, array) => array[index] === 0xff && array[index + 1] === 0xd9
      ) + 1,
    name: `${`${Date.now().toString()}_${Math.random()
      .toString()
      .slice(2)}`}.jpg`,
    type: "image/jpeg",
  };
};

export const PNG_PARSE = (array: number[]) => {
  return {
    chunkLength:
      array.findIndex((_, index, array) =>
        [0xae, 0x42, 0x60, 0x82].every(
          (magicValue, magicValueIndex) =>
            array[index + magicValueIndex] === magicValue
        )
      ) + 1,
    name: `${`${Date.now().toString()}_${Math.random()
      .toString()
      .slice(2)}`}.jpg`,
    type: "image/jpeg",
  };
};

class Endianess {
  static AS_LITTLE_ENDIAN = true;
  static AS_BIG_ENDIAN = false;
}

const TIFF_MAGIC_BYTE = 0x49;
const INITIAL_TIFF_OFFSET = 4;

const STRIP_OFFSETS_TAG = 0x0111;
const TILE_OFFSETS_TAG = 0x0144;

export const TIFF_PARSE = (array: number[]) => {
  const isLittleByteOrder = array[0] === TIFF_MAGIC_BYTE;

  const view = new DataView(new Uint8Array(array).buffer);

  const headerOffset = INITIAL_TIFF_OFFSET;

  const entriesCount = isLittleByteOrder
    ? view.getUint32(headerOffset, Endianess.AS_LITTLE_ENDIAN)
    : view.getUint32(headerOffset, Endianess.AS_BIG_ENDIAN);

  let imageDataOffset = 0;
  let imageDataLength = 0;

  for (let i = 0; i < entriesCount; i++) {
    const entryOffset = headerOffset + i * 12;
    const tag = isLittleByteOrder
      ? view.getUint16(entryOffset, Endianess.AS_LITTLE_ENDIAN)
      : view.getUint16(entryOffset, Endianess.AS_BIG_ENDIAN);

    if (tag === STRIP_OFFSETS_TAG || tag === TILE_OFFSETS_TAG) {
      imageDataOffset = isLittleByteOrder
        ? view.getUint32(entryOffset + 8, Endianess.AS_LITTLE_ENDIAN)
        : view.getUint32(entryOffset + 8, Endianess.AS_BIG_ENDIAN);

      break;
    }
  }

  if (imageDataOffset === 0) {
    console.error("Could not find image data offset in TIFF header");
  }

  // Find the offset of the next TIFF magic value
  const nextMagicOffset = array.indexOf(TIFF_MAGIC_BYTE, 1);
  const chunkEndOffset =
    nextMagicOffset !== -1 ? nextMagicOffset : array.length;

  // Calculate the length of the image data for the current chunk
  imageDataLength = chunkEndOffset - imageDataOffset;

  return {
    chunkLength: imageDataLength,
    name: `${`${Date.now().toString()}_${Math.random()
      .toString()
      .slice(2)}`}.tif`,
    type: "image/tiff",
  };
};
