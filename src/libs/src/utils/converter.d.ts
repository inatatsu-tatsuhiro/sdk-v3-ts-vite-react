export function toByte(char1: string, char2: string): numeric;
export function isHexString(input: string): boolean;
export function hexToUint8(input: string): Uint8Array;
export function uint8ToHex(input: Uint8Array): string;
export function tryParseUint(str: string): numeric;
export function bytesToInt(input: Uint8Array, size: numeric, isSigned?: boolean): numeric | BigInt;
export function bytesToIntUnaligned(input: Uint8Array, size: numeric, isSigned?: boolean): numeric | BigInt;
export function intToBytes(value: numeric, byteSize: numeric, isSigned?: numeric): Uint8Array;
