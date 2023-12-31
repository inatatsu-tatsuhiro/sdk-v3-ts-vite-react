/**
 * Facade used to interact with NEM blockchain.
 */
export default class NemFacade {
    static BIP32_CURVE_NAME: string;
    static Address: typeof Address;
    static KeyPair: typeof KeyPair;
    static Verifier: typeof Verifier;
    static deriveSharedKey: (keyPair: KeyPair, otherPublicKey: PublicKey) => import("../CryptoTypes.js").SharedKey256;
    /**
     * Derives a NEM KeyPair from a BIP32 node.
     * @param {Bip32Node} bip32Node BIP32 node.
     * @returns {KeyPair} Derived key pair.
     */
    static bip32NodeToKeyPair(bip32Node: Bip32Node): KeyPair;
    /**
     * Creates a NEM facade.
     * @param {string|Network} network NEM network or network name.
     */
    constructor(network: string | Network);
    network: import("../Network.js").Network;
    transactionFactory: TransactionFactory;
    /**
     * Hashes a NEM transaction.
     * @param {object} transaction Transaction object.
     * @returns {Hash256} Transaction hash.
     */
    hashTransaction(transaction: object): Hash256;
    /**
     * Signs a NEM transaction.
     * @param {KeyPair} keyPair Key pair.
     * @param {object} transaction Transaction object.
     * @returns {Signature} Transaction signature.
     */
    signTransaction(keyPair: KeyPair, transaction: object): Signature;
    /**
     * Verifies a NEM transaction.
     * @param {object} transaction Transaction object.
     * @param {Signature} signature Signature to verify.
     * @returns {boolean} true if transaction signature is verified.
     */
    verifyTransaction(transaction: object, signature: Signature): boolean;
    /**
     * Creates a network compatible BIP32 path for the specified account.
     *
     * @param {int} accountId Id of the account for which to generate a BIP32 path.
     * @returns {array<int>} BIP32 path for the specified account.
     */
    bip32Path(accountId: int): array<int>;
}
import TransactionFactory from '../nem/TransactionFactory.js';
import { Hash256 } from '../CryptoTypes.js';
import { KeyPair } from '../nem/KeyPair.js';
import { Address } from '../nem/Network.js';
import { Verifier } from '../nem/KeyPair.js';
import { Network as Network_1 } from '../nem/Network.js';
