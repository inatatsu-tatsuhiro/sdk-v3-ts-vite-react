export function concatArrays(...arrays: any[]): Uint8Array;
export function decodeAesGcm(deriveSharedKey: any, keyPair: any, recipientPublicKey: any, encodedMessage: any): Uint8Array;
export function decodeAesCbc(deriveSharedKey: any, keyPair: any, recipientPublicKey: any, encodedMessage: any): Uint8Array;
export function encodeAesGcm(deriveSharedKey: any, keyPair: any, recipientPublicKey: any, message: any): {
    tag: Uint8Array;
    initializationVector: Uint8Array;
    cipherText: Uint8Array;
};
export function encodeAesCbc(deriveSharedKey: any, keyPair: any, recipientPublicKey: any, message: any): {
    salt: Uint8Array;
    initializationVector: Uint8Array;
    cipherText: Uint8Array;
};
