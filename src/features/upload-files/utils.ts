export const bytesToDecimal = (bytes: number[]) =>
  (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3];
