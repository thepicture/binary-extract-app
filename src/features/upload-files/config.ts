import {
  BinaryParsers,
  JPEG_PARSE,
  MIDI_PARSE,
  PNG_PARSE,
  RIFF_PARSE,
  TIFF_PARSE,
} from "./utils";

export const FIRST_4_BYTES = [0, 4];
export const FIRST_7_BYTES = [0, 7];

export const SOURCE_CODE_LINK =
  "https://github.com/thepicture/binary-extract-app";

export const INITIAL_ZIP_LENGTH = 4;

export const ZIP_MAGIC = [0x50, 0x4b, 0x03, 0x04];
export const ZIP_MAGIC_END = [0x50, 0x4b, 0x05, 0x06];

export const BINARY_PARSERS: BinaryParsers = {
  "4d5d6864": MIDI_PARSE,
  "4d546864": MIDI_PARSE,
  "52494646": RIFF_PARSE,
  ffd8ffdb: JPEG_PARSE,
  ffd8ffe0: JPEG_PARSE,
  ffd8ffee: JPEG_PARSE,
  ffd8ffe1: JPEG_PARSE,
  ae426082: PNG_PARSE,
  "49492a00": TIFF_PARSE,
  "4d4d002a": TIFF_PARSE,
};

export const TEST_BINARY_3_MIDI_FILES = [
  0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x01, 0x00, 0x02, 0x01,
  0x80, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x13, 0x00, 0xff, 0x58, 0x04,
  0x01, 0x02, 0x18, 0x08, 0x00, 0xff, 0x51, 0x03, 0x08, 0x52, 0xae, 0x00, 0xff,
  0x2f, 0x00, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x21, 0x00, 0xff, 0x03,
  0x0e, 0x45, 0x6c, 0x65, 0x63, 0x74, 0x72, 0x69, 0x63, 0x20, 0x50, 0x69, 0x61,
  0x6e, 0x6f, 0x00, 0xc0, 0x00, 0x00, 0x90, 0x30, 0x32, 0x60, 0x80, 0x30, 0x00,
  0x00, 0xff, 0x2f, 0x00, 0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00,
  0x01, 0x00, 0x02, 0x01, 0x80, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x13,
  0x00, 0xff, 0x58, 0x04, 0x01, 0x02, 0x18, 0x08, 0x00, 0xff, 0x51, 0x03, 0x08,
  0x52, 0xae, 0x00, 0xff, 0x2f, 0x00, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00,
  0x21, 0x00, 0xff, 0x03, 0x0e, 0x45, 0x6c, 0x65, 0x63, 0x74, 0x72, 0x69, 0x63,
  0x20, 0x50, 0x69, 0x61, 0x6e, 0x6f, 0x00, 0xc0, 0x00, 0x00, 0x90, 0x30, 0x32,
  0x60, 0x80, 0x30, 0x00, 0x00, 0xff, 0x2f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x01,
  0x00, 0x02, 0x01, 0x80, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x13, 0x00,
  0xff, 0x58, 0x04, 0x01, 0x02, 0x18, 0x08, 0x00, 0xff, 0x51, 0x03, 0x08, 0x52,
  0xae, 0x00, 0xff, 0x2f, 0x00, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x21,
  0x00, 0xff, 0x03, 0x0e, 0x45, 0x6c, 0x65, 0x63, 0x74, 0x72, 0x69, 0x63, 0x20,
  0x50, 0x69, 0x61, 0x6e, 0x6f, 0x00, 0xc0, 0x00, 0x00, 0x90, 0x30, 0x32, 0x60,
  0x80, 0x30, 0x00, 0x00, 0xff, 0x2f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00,
];

export const TEST_BINARY_MIDI_FILE = [
  0x99, 0x98, 0x97, 0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x01,
  0x00, 0x02, 0x01, 0x80, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x13, 0x00,
  0xff, 0x58, 0x04, 0x01, 0x02, 0x18, 0x08, 0x00, 0xff, 0x51, 0x03, 0x08, 0x52,
  0xae, 0x00, 0xff, 0x2f, 0x00, 0x4d, 0x54, 0x72, 0x6b, 0x00, 0x00, 0x00, 0x21,
  0x00, 0xff, 0x03, 0x0e, 0x45, 0x6c, 0x65, 0x63, 0x74, 0x72, 0x69, 0x63, 0x20,
  0x50, 0x69, 0x61, 0x6e, 0x6f, 0x00, 0xc0, 0x00, 0x00, 0x90, 0x30, 0x32, 0x60,
  0x80, 0x30, 0x00, 0x00, 0xff, 0x2f, 0x00, 0x4d, 0x54, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00,
];

export const ARCHIVE_WITH_1_FILE = [
  0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x08, 0x00, 0x08, 0x00, 0x2e, 0xac, 0x64,
  0x56, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x52, 0x00, 0x00, 0x00,
  0x05, 0x00, 0x20, 0x00, 0x31, 0x2e, 0x6d, 0x69, 0x64, 0x55, 0x54, 0x0d, 0x00,
  0x07, 0x78, 0xff, 0x03, 0x64, 0x5c, 0x01, 0x04, 0x64, 0xb0, 0xff, 0x03, 0x64,
  0x75, 0x78, 0x0b, 0x00, 0x01, 0x04, 0xe8, 0x03, 0x00, 0x00, 0x04, 0xe8, 0x03,
  0x00, 0x00, 0xf3, 0x0d, 0xc9, 0x48, 0x61, 0x60, 0x60, 0x60, 0x63, 0x60, 0x64,
  0x60, 0x62, 0x6c, 0xf0, 0x0d, 0x29, 0xca, 0x06, 0xf2, 0x84, 0x19, 0xfe, 0x47,
  0xb0, 0x30, 0x32, 0x49, 0x70, 0x30, 0xfc, 0x0f, 0x64, 0xe6, 0x08, 0x5a, 0xc7,
  0xf0, 0x5f, 0x9f, 0x01, 0x2a, 0xa5, 0xc8, 0xf0, 0x9f, 0x99, 0xcf, 0x35, 0x27,
  0x35, 0xb9, 0xa4, 0x28, 0x33, 0x59, 0x21, 0x20, 0x33, 0x31, 0x2f, 0x9f, 0xe1,
  0x00, 0x03, 0xc3, 0x04, 0x03, 0xa3, 0x84, 0x06, 0x03, 0x06, 0x90, 0x42, 0x00,
  0x50, 0x4b, 0x07, 0x08, 0x3f, 0x47, 0x86, 0xfd, 0x4c, 0x00, 0x00, 0x00, 0x52,
  0x00, 0x00, 0x00, 0x50, 0x4b, 0x01, 0x02, 0x14, 0x03, 0x14, 0x00, 0x08, 0x00,
  0x08, 0x00, 0x2e, 0xac, 0x64, 0x56, 0x3f, 0x47, 0x86, 0xfd, 0x4c, 0x00, 0x00,
  0x00, 0x52, 0x00, 0x00, 0x00, 0x05, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0xb4, 0x81, 0x00, 0x00, 0x00, 0x00, 0x31, 0x2e, 0x6d,
  0x69, 0x64, 0x55, 0x54, 0x0d, 0x00, 0x07, 0x78, 0xff, 0x03, 0x64, 0x5c, 0x01,
  0x04, 0x64, 0xb0, 0xff, 0x03, 0x64, 0x75, 0x78, 0x0b, 0x00, 0x01, 0x04, 0xe8,
  0x03, 0x00, 0x00, 0x04, 0xe8, 0x03, 0x00, 0x00, 0x50, 0x4b, 0x05, 0x06, 0x00,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x53, 0x00, 0x00, 0x00, 0x9f, 0x00,
  0x00, 0x00, 0x00, 0x00,
];

export const ARCHIVE_WITH_3_FILES = [
  0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x08, 0x00, 0x08, 0x00, 0x89, 0xb9, 0x64,
  0x56, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x03, 0x00, 0x00,
  0x0a, 0x00, 0x20, 0x00, 0x33, 0x6d, 0x69, 0x64, 0x69, 0x66, 0x69, 0x6c, 0x65,
  0x73, 0x55, 0x54, 0x0d, 0x00, 0x07, 0xa2, 0x16, 0x04, 0x64, 0xa3, 0x16, 0x04,
  0x64, 0xa2, 0x16, 0x04, 0x64, 0x75, 0x78, 0x0b, 0x00, 0x01, 0x04, 0xe8, 0x03,
  0x00, 0x00, 0x04, 0xe8, 0x03, 0x00, 0x00, 0xf3, 0x0d, 0xc9, 0x48, 0x61, 0x60,
  0x60, 0x60, 0x63, 0x60, 0x64, 0x60, 0x62, 0x6c, 0xf0, 0x0d, 0x29, 0xca, 0x06,
  0xf2, 0x84, 0x19, 0xfe, 0x47, 0xb0, 0x30, 0x32, 0x49, 0x70, 0x30, 0xfc, 0x0f,
  0x64, 0xe6, 0x08, 0x5a, 0xc7, 0xf0, 0x5f, 0x9f, 0x01, 0x2a, 0xa5, 0xc8, 0xf0,
  0x9f, 0x99, 0xcf, 0x35, 0x27, 0x35, 0xb9, 0xa4, 0x28, 0x33, 0x59, 0x21, 0x20,
  0x33, 0x31, 0x2f, 0x9f, 0xe1, 0x00, 0x03, 0xc3, 0x04, 0x03, 0xa3, 0x84, 0x06,
  0x03, 0x06, 0x88, 0x42, 0x6a, 0x9b, 0x38, 0xa0, 0x60, 0x98, 0x79, 0x67, 0x14,
  0xe0, 0x03, 0x00, 0x50, 0x4b, 0x07, 0x08, 0x8e, 0xca, 0xd3, 0x2b, 0x57, 0x00,
  0x00, 0x00, 0x0e, 0x03, 0x00, 0x00, 0x50, 0x4b, 0x01, 0x02, 0x14, 0x03, 0x14,
  0x00, 0x08, 0x00, 0x08, 0x00, 0x89, 0xb9, 0x64, 0x56, 0x8e, 0xca, 0xd3, 0x2b,
  0x57, 0x00, 0x00, 0x00, 0x0e, 0x03, 0x00, 0x00, 0x0a, 0x00, 0x20, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xb4, 0x81, 0x00, 0x00, 0x00, 0x00,
  0x33, 0x6d, 0x69, 0x64, 0x69, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x55, 0x54, 0x0d,
  0x00, 0x07, 0xa2, 0x16, 0x04, 0x64, 0xa3, 0x16, 0x04, 0x64, 0xa2, 0x16, 0x04,
  0x64, 0x75, 0x78, 0x0b, 0x00, 0x01, 0x04, 0xe8, 0x03, 0x00, 0x00, 0x04, 0xe8,
  0x03, 0x00, 0x00, 0x50, 0x4b, 0x05, 0x06, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x01, 0x00, 0x58, 0x00, 0x00, 0x00, 0xaf, 0x00, 0x00, 0x00, 0x00, 0x00,
];

// prettier-ignore
export const RIFF_BYTES = [
  // RIFF header
  0x52, 0x49, 0x46, 0x46,  // "RIFF"
  0x24, 0x00, 0x00, 0x00,  // Chunk size (36 bytes total)
  0x57, 0x41, 0x56, 0x45,  // "WAVE"

  // Format subchunk
  0x66, 0x6d, 0x74, 0x20,  // "fmt "
  0x10, 0x00, 0x00, 0x00,  // Subchunk1 size (16 bytes)
  0x01, 0x00,              // Audio format (PCM)
  0x01, 0x00,              // Number of channels (1)
  0x80, 0x3e, 0x00, 0x00,  // Sample rate (16kHz)
  0x00, 0x7d, 0x00, 0x00,  // Byte rate (32000)
  0x02, 0x00,              // Block align (2 bytes/sample)
  0x10, 0x00,              // Bits per sample (16 bits)

  // Data subchunk (16 bytes)
  0x64, 0x61, 0x74, 0x61,  
  0x10, 0x08, 0x00, 0x00,  
  0x00, 0x00,              
  0x00, 0x00,              
  0xff, 0x7f,              
  0xff, 0xff               
];

export const JPEG_BYTES = [
  0xff, 0xd8, 0xff, 0xee, 0xaa, 0xbb, 0xcc, 0xaa, 0xbb, 0xcc, 0xff, 0xd9,
];

export const PNG_BYTES = [
  137, 80, 78, 71, 13, 10, 26, 10, 111, 222, 333, 0xae, 0x42, 0x60, 0x82,
];

export const TIFF_BYTES_LITTLE_ENDIAN = [
  0x49, 0x49, 0x2a, 0x00, 0x0e, 0x00, 0x00, 0x00, 0x80, 0x3f, 0xdf, 0xf0, 0x10,
  0x00, 0x15, 0x00, 0x00, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x00, 0x00, 0x01, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
  0x00, 0x02, 0x01, 0x03, 0x00, 0x02, 0x00, 0x00, 0x00, 0x08, 0x00, 0x08, 0x00,
  0x03, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x06,
  0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0a, 0x01,
  0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x11, 0x01, 0x04,
  0x00, 0x01, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x12, 0x01, 0x03, 0x00,
  0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x15, 0x01, 0x03, 0x00, 0x01,
  0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x16, 0x01, 0x03, 0x00, 0x01, 0x00,
  0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x17, 0x01, 0x04, 0x00, 0x01, 0x00, 0x00,
  0x00, 0x05, 0x00, 0x00, 0x00, 0x1a, 0x01, 0x05, 0x00, 0x01, 0x00, 0x00, 0x00,
  0x10, 0x01, 0x00, 0x00, 0x1b, 0x01, 0x05, 0x00, 0x01, 0x00, 0x00, 0x00, 0x18,
  0x01, 0x00, 0x00, 0x1c, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x00, 0x00, 0x28, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
  0x00, 0x29, 0x01, 0x03, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x3d, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x3e,
  0x01, 0x05, 0x00, 0x02, 0x00, 0x00, 0x00, 0x50, 0x01, 0x00, 0x00, 0x3f, 0x01,
  0x05, 0x00, 0x06, 0x00, 0x00, 0x00, 0x20, 0x01, 0x00, 0x00, 0x52, 0x01, 0x03,
  0x00, 0x01, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x73, 0x87, 0x07, 0x00,
  0xc8, 0x01, 0x00, 0x00, 0x60, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x00, 0x00, 0x85, 0xeb, 0x51, 0x00, 0x00, 0x00, 0x80, 0x00, 0xc3, 0xf5, 0xa8,
  0x00, 0x00, 0x00, 0x00, 0x02, 0xcd, 0xcc, 0x4c, 0x00, 0x00, 0x00, 0x00, 0x01,
  0xcd, 0xcc, 0x4c, 0x00, 0x00, 0x00, 0x80, 0x00, 0xcd, 0xcc, 0x4c, 0x00, 0x00,
  0x00, 0x00, 0x02, 0x8f, 0xc2, 0xf5, 0x00, 0x00, 0x00, 0x00, 0x10, 0x37, 0x1a,
  0xa0, 0x00, 0x00, 0x00, 0x00, 0x02, 0x2b, 0x87, 0x0a, 0x00, 0x00, 0x00, 0x20,
  0x00, 0x00, 0x00, 0x01, 0xc8, 0x00, 0x00, 0x00, 0x00, 0x04, 0x30, 0x00, 0x00,
  0x6d, 0x6e, 0x74, 0x72, 0x52, 0x47, 0x42, 0x20, 0x58, 0x59, 0x5a, 0x20, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x63,
  0x73, 0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0xf6, 0xd6, 0x00, 0x01, 0x00, 0x00, 0x00,
  0x00, 0xd3, 0x2d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x09, 0x64, 0x65, 0x73, 0x63, 0x00, 0x00, 0x00, 0xf0, 0x00, 0x00,
  0x00, 0x24, 0x72, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x01, 0x14, 0x00, 0x00, 0x00,
  0x14, 0x67, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x01, 0x28, 0x00, 0x00, 0x00, 0x14,
  0x62, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x01, 0x3c, 0x00, 0x00, 0x00, 0x14, 0x77,
  0x74, 0x70, 0x74, 0x00, 0x00, 0x01, 0x50, 0x00, 0x00, 0x00, 0x14, 0x72, 0x54,
  0x52, 0x43, 0x00, 0x00, 0x01, 0x64, 0x00, 0x00, 0x00, 0x28, 0x67, 0x54, 0x52,
  0x43, 0x00, 0x00, 0x01, 0x64, 0x00, 0x00, 0x00, 0x28, 0x62, 0x54, 0x52, 0x43,
  0x00, 0x00, 0x01, 0x64, 0x00, 0x00, 0x00, 0x28, 0x63, 0x70, 0x72, 0x74, 0x00,
  0x00, 0x01, 0x8c, 0x00, 0x00, 0x00, 0x3c, 0x6d, 0x6c, 0x75, 0x63, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0c, 0x65, 0x6e, 0x55,
  0x53, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x73, 0x00, 0x52,
  0x00, 0x47, 0x00, 0x42, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x6f, 0xa2, 0x00, 0x00, 0x38, 0xf5, 0x00, 0x00, 0x03, 0x90, 0x58, 0x59,
  0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x62, 0x99, 0x00, 0x00, 0xb7,
  0x85, 0x00, 0x00, 0x18, 0xda, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x24, 0xa0, 0x00, 0x00, 0x0f, 0x84, 0x00, 0x00, 0xb6, 0xcf, 0x58,
  0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf6, 0xd6, 0x00, 0x01,
  0x00, 0x00, 0x00, 0x00, 0xd3, 0x2d, 0x70, 0x61, 0x72, 0x61, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x02, 0x66, 0x66, 0x00, 0x00, 0xf2, 0xa7,
  0x00, 0x00, 0x0d, 0x59, 0x00, 0x00, 0x13, 0xd0, 0x00, 0x00, 0x0a, 0x5b, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6d, 0x6c, 0x75, 0x63, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0c, 0x65, 0x6e, 0x55,
  0x53, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x47, 0x00, 0x6f,
  0x00, 0x6f, 0x00, 0x67, 0x00, 0x6c, 0x00, 0x65, 0x00, 0x20, 0x00, 0x49, 0x00,
  0x6e, 0x00, 0x63, 0x00, 0x2e, 0x00, 0x20, 0x00, 0x32, 0x00, 0x30, 0x00, 0x31,
  0x00, 0x36,
];

export const TIFF_BYTES_BIG_ENDIAN = [
  0x4d, 0x4d, 0x00, 0x2a, 0x00, 0x00, 0x00, 0x0a, 0xff, 0xff, 0x00, 0x14, 0x01,
  0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x01,
  0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x02, 0x00,
  0x03, 0x00, 0x00, 0x00, 0x02, 0x00, 0x08, 0x00, 0x08, 0x01, 0x03, 0x00, 0x03,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x06, 0x00, 0x03, 0x00,
  0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x0a, 0x00, 0x03, 0x00, 0x00,
  0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x11, 0x00, 0x04, 0x00, 0x00, 0x00,
  0x01, 0x00, 0x00, 0x00, 0x08, 0x01, 0x12, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01,
  0x00, 0x01, 0x00, 0x00, 0x01, 0x15, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x02, 0x00, 0x00, 0x01, 0x16, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01,
  0x00, 0x00, 0x01, 0x17, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
  0x02, 0x01, 0x1a, 0x00, 0x05, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00,
  0x01, 0x1b, 0x00, 0x05, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x08, 0x01,
  0x1c, 0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x28,
  0x00, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x01, 0x29, 0x00,
  0x03, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x01, 0x01, 0x3e, 0x00, 0x05,
  0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x01, 0x40, 0x01, 0x3f, 0x00, 0x05, 0x00,
  0x00, 0x00, 0x06, 0x00, 0x00, 0x01, 0x10, 0x01, 0x52, 0x00, 0x03, 0x00, 0x00,
  0x00, 0x01, 0x00, 0x02, 0x00, 0x00, 0x87, 0x73, 0x00, 0x07, 0x00, 0x00, 0x01,
  0xc8, 0x00, 0x00, 0x01, 0x50, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0xa3,
  0xd7, 0x09, 0xff, 0xff, 0xff, 0xff, 0xff, 0x54, 0x7a, 0xe1, 0x7f, 0xff, 0xff,
  0xff, 0xff, 0x4c, 0xcc, 0xcc, 0xff, 0xff, 0xff, 0xff, 0xff, 0x99, 0x99, 0x99,
  0xff, 0xff, 0xff, 0xff, 0xff, 0x26, 0x66, 0x66, 0x7f, 0xff, 0xff, 0xff, 0xff,
  0x0f, 0x5c, 0x28, 0xef, 0xff, 0xff, 0xff, 0xff, 0x50, 0x0d, 0x1b, 0x7f, 0xff,
  0xff, 0xff, 0xff, 0x54, 0x39, 0x57, 0xff, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00,
  0x01, 0xc8, 0x00, 0x00, 0x00, 0x00, 0x04, 0x30, 0x00, 0x00, 0x6d, 0x6e, 0x74,
  0x72, 0x52, 0x47, 0x42, 0x20, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x63, 0x73, 0x70, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x01, 0x00, 0x00, 0xf6, 0xd6, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0xd3, 0x2d,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x09,
  0x64, 0x65, 0x73, 0x63, 0x00, 0x00, 0x00, 0xf0, 0x00, 0x00, 0x00, 0x24, 0x72,
  0x58, 0x59, 0x5a, 0x00, 0x00, 0x01, 0x14, 0x00, 0x00, 0x00, 0x14, 0x67, 0x58,
  0x59, 0x5a, 0x00, 0x00, 0x01, 0x28, 0x00, 0x00, 0x00, 0x14, 0x62, 0x58, 0x59,
  0x5a, 0x00, 0x00, 0x01, 0x3c, 0x00, 0x00, 0x00, 0x14, 0x77, 0x74, 0x70, 0x74,
  0x00, 0x00, 0x01, 0x50, 0x00, 0x00, 0x00, 0x14, 0x72, 0x54, 0x52, 0x43, 0x00,
  0x00, 0x01, 0x64, 0x00, 0x00, 0x00, 0x28, 0x67, 0x54, 0x52, 0x43, 0x00, 0x00,
  0x01, 0x64, 0x00, 0x00, 0x00, 0x28, 0x62, 0x54, 0x52, 0x43, 0x00, 0x00, 0x01,
  0x64, 0x00, 0x00, 0x00, 0x28, 0x63, 0x70, 0x72, 0x74, 0x00, 0x00, 0x01, 0x8c,
  0x00, 0x00, 0x00, 0x3c, 0x6d, 0x6c, 0x75, 0x63, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0c, 0x65, 0x6e, 0x55, 0x53, 0x00, 0x00,
  0x00, 0x08, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x73, 0x00, 0x52, 0x00, 0x47, 0x00,
  0x42, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6f, 0xa2,
  0x00, 0x00, 0x38, 0xf5, 0x00, 0x00, 0x03, 0x90, 0x58, 0x59, 0x5a, 0x20, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x62, 0x99, 0x00, 0x00, 0xb7, 0x85, 0x00, 0x00,
  0x18, 0xda, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x24,
  0xa0, 0x00, 0x00, 0x0f, 0x84, 0x00, 0x00, 0xb6, 0xcf, 0x58, 0x59, 0x5a, 0x20,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf6, 0xd6, 0x00, 0x01, 0x00, 0x00, 0x00,
  0x00, 0xd3, 0x2d, 0x70, 0x61, 0x72, 0x61, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04,
  0x00, 0x00, 0x00, 0x02, 0x66, 0x66, 0x00, 0x00, 0xf2, 0xa7, 0x00, 0x00, 0x0d,
  0x59, 0x00, 0x00, 0x13, 0xd0, 0x00, 0x00, 0x0a, 0x5b, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x6d, 0x6c, 0x75, 0x63, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0c, 0x65, 0x6e, 0x55, 0x53, 0x00, 0x00,
  0x00, 0x20, 0x00, 0x00, 0x00, 0x1c, 0x00, 0x47, 0x00, 0x6f, 0x00, 0x6f, 0x00,
  0x67, 0x00, 0x6c, 0x00, 0x65, 0x00, 0x20, 0x00, 0x49, 0x00, 0x6e, 0x00, 0x63,
  0x00, 0x2e, 0x00, 0x20, 0x00, 0x32, 0x00, 0x30, 0x00, 0x31, 0x00, 0x36,
];
