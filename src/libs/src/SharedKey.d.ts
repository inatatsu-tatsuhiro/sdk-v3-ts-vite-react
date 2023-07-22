export function deriveSharedSecretFactory(cryptoHash: any): (privateKeyBytes: any, otherPublicKey: any) => Uint8Array;
export function deriveSharedKeyFactory(info: any, cryptoHash: any): (privateKeyBytes: any, otherPublicKey: any) => SharedKey256;
import { SharedKey256 } from './CryptoTypes.js';
