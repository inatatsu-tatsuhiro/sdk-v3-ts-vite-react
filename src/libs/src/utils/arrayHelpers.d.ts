export function deepCompare(lhs: object, rhs: object): number;
export function alignUp(size: number, alignment: number): number;
export function size(elements: array<any>, alignment?: number, skipLastElementPadding?: boolean): number;
export function readArray(bufferInput: Uint8Array, FactoryClass: type, accessor?: Function): array<any>;
export function readArrayCount(bufferInput: Uint8Array, FactoryClass: type, count: number, accessor?: Function): array<any>;
export function readVariableSizeElements(bufferInput: Uint8Array, FactoryClass: type, alignment: number, skipLastElementPadding?: boolean): array<any>;
export function writeArray(output: Writer, elements: array<any>, accessor?: Function): void;
export function writeArrayCount(output: any, elements: any, count: any, accessor?: any): void;
export function writeVariableSizeElements(output: Writer, elements: array<any>, alignment: number, skipLastElementPadding?: boolean): void;
