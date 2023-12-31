/**
 * Position tracking writer.
 */
export default class Writer {
    /**
     * Creates a writer with specified size.
     * @param {number} size Allocated buffer size.
     */
    constructor(size: number);
    storage: Uint8Array;
    offset: number;
    /**
     * Writes array into buffer.
     * @param {array<byte>} buffer Data to write.
     */
    write(buffer: array<byte>): void;
}
