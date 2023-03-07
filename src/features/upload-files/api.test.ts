import { BinaryParser } from "./api";
import {
  ARCHIVE_WITH_1_FILE,
  ARCHIVE_WITH_3_FILES,
  RIFF_BYTES,
  TEST_BINARY_3_MIDI_FILES,
  TEST_BINARY_MIDI_FILE,
} from "./config";

describe("upload-files/api", () => {
  let binaryParser = new BinaryParser();

  it("unpacks single file from binary file", async () => {
    const expected = 1;

    const files = await binaryParser.parseBinary(TEST_BINARY_MIDI_FILE);

    expect(files.length).toBe(expected);
  });

  it("unpacks 3 midi files from binary file", async () => {
    const expected = 3;

    const files = await binaryParser.parseBinary(TEST_BINARY_3_MIDI_FILES);

    expect(files.length).toBe(expected);
  });

  it("unpacks single file from binary file if outer file is zip file", async () => {
    const expected = 1;

    const files = await binaryParser.parseBinary(ARCHIVE_WITH_1_FILE);

    expect(files.length).toBe(expected);
  });

  it("unpacks 3 midi files from binary file if outer file is zip file", async () => {
    const expected = 3;

    const files = await binaryParser.parseBinary(ARCHIVE_WITH_3_FILES);

    expect(files.length).toBe(expected);
  });

  it("unpacks two archives and one midi file when each archive has 3 files", async () => {
    const binary = [
      0x00,
      0xaa,
      0xbb,
      ...ARCHIVE_WITH_3_FILES,
      0x00,
      0x00,
      0xcc,
      ...ARCHIVE_WITH_3_FILES,
      0x00,
      0x00,
      ...TEST_BINARY_MIDI_FILE,
      0xcc,
      0xbb,
    ];
    const expected = 3 + 3 + 1;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });

  it("unpacks two archives and one midi file when each archive has 1 file", async () => {
    const binary = [
      0x00,
      0xaa,
      0xbb,
      ...ARCHIVE_WITH_1_FILE,
      0x00,
      0x00,
      0xcc,
      ...ARCHIVE_WITH_1_FILE,
      0x00,
      0x00,
      ...TEST_BINARY_MIDI_FILE,
      0xcc,
      0xbb,
    ];
    const expected = 1 * 3;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });

  it("unpacks two archives when each archive has 3 files", async () => {
    const binary = [
      ...ARCHIVE_WITH_3_FILES,
      0x00,
      0x00,
      0xcc,
      0x00,
      0x00,
      ...ARCHIVE_WITH_3_FILES,
      0xcc,
      0xbb,
    ];
    const expected = 3 * 2;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });

  it("skips zip file when it is malformed", async () => {
    const binary = [
      0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x00, 0xcc, 0x00, 0x00, 0xcc, 0xbb,
    ];
    const expected = 0;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });

  it("can read 2 wav files when riff bytes are presented", async () => {
    const binary = [...RIFF_BYTES, ...RIFF_BYTES];
    const expected = 2;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });

  it("can read 3 files when types are mixed", async () => {
    const binary = [...RIFF_BYTES, ...TEST_BINARY_MIDI_FILE, ...RIFF_BYTES];
    const expected = 3;

    const files = await binaryParser.parseBinary(binary);

    expect(files.length).toBe(expected);
  });
});

export {};
