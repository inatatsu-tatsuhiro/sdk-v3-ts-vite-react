/**
 * Factory of BIP32 root nodes.
 */
export default class Bip32 {
    /**
     * Creates a BIP32 root node factory.
     * @param {string} curveName Elliptic curve to use.
     * @param {string} mnemonicLanguage Language of constructed mnemonics.
     */
    constructor(curveName?: string, mnemonicLanguage?: string);
    rootHmacKey: any;
    mnemonicLanguage: string;
    /**
     * Creates a BIP32 root node from a seed.
     * @param {Uint8Array} seed BIP32 seed.
     * @returns {Bip32Node} BIP32 root node.
     */
    fromSeed(seed: Uint8Array): Bip32Node;
    /**
     * Creates a BIP32 root node from a BIP39 mnemonic and password.
     * @param {string} mnemonic BIP32 mnemonic.
     * @param {string} password BIP32 mnemonic password.
     * @returns {Bip32Node} BIP32 root node.
     */
    fromMnemonic(mnemonic: string, password: string): Bip32Node;
    /**
     * Creates a random BIP32 mnemonic.
     * @param {number} seedLength Length of random seed to use when generating mnemonic.
     * @returns {string} Random mnemonic created with the specified entropy.
     */
    random(seedLength?: number): string;
}
/**
 * Representation of a BIP32 node.
 */
declare class Bip32Node {
    /**
     * Creates a BIP32 node around a key and data.
     * @param {string} hmacKey BIP32 HMAC key.
     * @param {Uint8Array} data BIP32 seed.
     */
    constructor(hmacKey: string, data: Uint8Array);
    privateKey: PrivateKey;
    chainCode: any;
    /**
     * Derives a direct child node with specified identifier.
     * @param {number} identifier Child identifier.
     * @returns {Bip32Node} BIP32 child node.
     */
    deriveOne(identifier: number): Bip32Node;
    /**
     * Derives a descendent node with specified path.
     * @param {array<number>} path BIP32 path.
     * @returns {Bip32Node} BIP32 node at the end of the path.
     */
    derivePath(path: array<number>): Bip32Node;
}
import { PrivateKey } from './CryptoTypes.js';
export {};
