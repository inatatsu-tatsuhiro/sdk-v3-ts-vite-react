/**
 * Encrypts and encodes messages between two parties.
 */
export default class MessageEncoder {
    /**
     * Creates message encoder around key pair.
     * @param {KeyPair} keyPair Key pair.
     */
    constructor(keyPair: KeyPair);
    keyPair: KeyPair;
    /**
     * Tries to decode encoded message, returns tuple:
     *  * true, message - if message has been decoded and decrypted
     *  * false, encodedMessage - otherwise
     * @param {PublicKey} recipientPublicKey Recipient public key.
     * @param {Uint8Array} encodedMessage Encoded message.
     * @returns {array} Tuple containing decoded status and message.
     */
    tryDecode(recipientPublicKey: PublicKey, encodedMessage: Uint8Array): any[];
    /**
     * Encodes message to recipient using recommended format.
     * @param {PublicKey} recipientPublicKey Recipient public key.
     * @param {Uint8Array} message Message to encode.
     * @returns {Uint8Array} Encrypted and encoded message.
     */
    encode(recipientPublicKey: PublicKey, message: Uint8Array): Uint8Array;
    /**
     * Encodes message to recipient using recommended format.
     * @deprecated This function is only provided for compatability with older NEM messages.
     *             Please use `encode` in any new code.
     * @param {PublicKey} recipientPublicKey Recipient public key.
     * @param {Uint8Array} message Message to encode.
     * @returns {Uint8Array} Encrypted and encoded message.
     */
    encodeDeprecated(recipientPublicKey: PublicKey, message: Uint8Array): Uint8Array;
}
