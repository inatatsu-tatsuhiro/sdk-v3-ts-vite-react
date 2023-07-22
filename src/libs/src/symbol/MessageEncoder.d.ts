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
     * @param {PublicKey} recipientPublicKey Recipient's public key.
     * @param {Uint8Array} encodedMessage Encoded message
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
     * Encodes persistent harvesting delegation to node.
     * @param {PublicKey} nodePublicKey Node public key.
     * @param {KeyPair} remoteKeyPair Remote key pair.
     * @param {KeyPair} vrfKeyPair Vrf key pair.
     * @returns {Uint8Array} Encrypted and encoded harvesting delegation request.
     */
    encodePersistentHarvestingDelegation(nodePublicKey: PublicKey, remoteKeyPair: KeyPair, vrfKeyPair: KeyPair): Uint8Array;
    /**
     * Tries to decode encoded wallet message, returns tuple:
     *  * true, message - if message has been decoded and decrypted
     *  * false, encodedMessage - otherwise
     * @deprecated This function is only provided for compatability with the original Symbol wallets.
     *             Please use `tryDecode` in any new code.
     * @param {PublicKey} recipientPublicKey Recipient's public key.
     * @param {Uint8Array} encodedMessage Encoded message
     * @returns {array} Tuple containing decoded status and message.
     */
    tryDecodeDeprecated(recipientPublicKey: PublicKey, encodedMessage: Uint8Array): any[];
    /**
     * Encodes message to recipient using (deprecated) wallet format.
     * @deprecated This function is only provided for compatability with the original Symbol wallets.
     *             Please use `encode` in any new code.
     * @param {PublicKey} recipientPublicKey Recipient public key.
     * @param {Uint8Array} message Message to encode.
     * @returns {Uint8Array} Encrypted and encoded message.
     */
    encodeDeprecated(recipientPublicKey: PublicKey, message: Uint8Array): Uint8Array;
}
import { KeyPair } from './KeyPair.js';
import { PublicKey } from '../CryptoTypes.js';
