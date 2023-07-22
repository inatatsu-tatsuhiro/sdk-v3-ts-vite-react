export function deriveSharedKey(keyPair: KeyPair, otherPublicKey: PublicKey): SharedKey256;
export function deriveSharedKeyDeprecated(keyPair: KeyPair, otherPublicKey: PublicKey, salt: Uint8Array): SharedKey256;
import { SharedKey256 } from '../CryptoTypes.js';
