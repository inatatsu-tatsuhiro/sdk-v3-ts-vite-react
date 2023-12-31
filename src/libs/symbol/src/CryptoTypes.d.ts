/**
 *  Represents a 256-bit hash.
 */
export class Hash256 extends ByteArray {
    static SIZE: number;
    /**
     * Creates a zeroed hash.
     * @returns {Hash256} Zeroed hash.
     */
    static zero(): Hash256;
    /**
     * Creates a hash from bytes or a hex string.
     * @param {Uint8Array|string} hash256 Input string or byte array.
     */
    constructor(hash256: Uint8Array | string);
}
/**
 *  Represents a private key.
 */
export class PrivateKey extends ByteArray {
    static SIZE: number;
    /**
     * Creates a random private key.
     * @returns {PrivateKey} Random private key.
     */
    static random(): PrivateKey;
    /**
     * Creates a private key from bytes or a hex string.
     * @param {Uint8Array|string} privateKey Input string or byte array.
     */
    constructor(privateKey: Uint8Array | string);
}
/**
 *  Represents a public key.
 */
export class PublicKey extends ByteArray {
    static SIZE: number;
    /**
     * Creates a public key from bytes or a hex string.
     * @param {Uint8Array|string} publicKey Input string, byte array or public key.
     */
    constructor(publicKey: Uint8Array | string);
}
/**
 *  Represents a 256-bit symmetric encryption key.
 */
export class SharedKey256 extends ByteArray {
    static SIZE: number;
    /**
     * Creates a key from bytes or a hex string.
     * @param {Uint8Array|string} sharedKey Input string or byte array.
     */
    constructor(sharedKey: Uint8Array | string);
}
/**
 *  Represents a signature.
 */
export class Signature extends ByteArray {
    static SIZE: number;
    /**
     * Creates a zeroed signature.
     * @returns {Signature} Zeroed signature.
     */
    static zero(): Signature;
    /**
     * Creates a signature from bytes or a hex string.
     * @param {Uint8Array|string} signature Input string or byte array.
     */
    constructor(signature: Uint8Array | string);
}
import ByteArray from './ByteArray.js';
