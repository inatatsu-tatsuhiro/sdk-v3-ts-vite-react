export default base32;
declare namespace base32 {
    function encode(data: Uint8Array): string;
    function decode(encoded: string): Uint8Array;
}
