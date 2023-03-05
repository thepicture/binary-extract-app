import { parseBinary } from "./api";
import {
  ARCHIVE_WITH_1_FILE,
  ARCHIVE_WITH_3_FILES,
  TEST_BINARY_3_MIDI_FILES,
  TEST_BINARY_MIDI_FILE,
} from "./config";

describe("upload-files/api", () => {
  it("unpacks single file from binary file", async () => {
    const expected = 1;
    const files: File[] = [];

    await parseBinary(TEST_BINARY_MIDI_FILE, files);

    expect(files.length).toBe(expected);
  });

  it("unpacks 3 midi files from binary file", async () => {
    const expected = 3;
    const files: File[] = [];

    await parseBinary(TEST_BINARY_3_MIDI_FILES, files);

    expect(files.length).toBe(expected);
  });

  it("unpacks single file from binary file if outer file is zip file", async () => {
    const expected = 1;
    const files: File[] = [];

    await parseBinary(ARCHIVE_WITH_1_FILE, files);

    expect(files.length).toBe(expected);
  });

  it("unpacks 3 midi files from binary file if outer file is zip file", async () => {
    const expected = 3;
    const files: File[] = [];

    await parseBinary(ARCHIVE_WITH_3_FILES, files);

    expect(files.length).toBe(expected);
  });
});

export {};
