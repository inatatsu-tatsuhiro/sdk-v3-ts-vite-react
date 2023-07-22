/**
 * Facade used to interact with Symbol blockchain.
 */
export default class SymbolFacade {
    static BIP32_CURVE_NAME: string;
    static Address: typeof Address;
    static KeyPair: typeof KeyPair;
    static Verifier: typeof Verifier;
    static deriveSharedKey: (keyPair: KeyPair, otherPublicKey: PublicKey) => SharedKey256;
    /**
     * Hashes embedded transactions of an aggregate."""
     * @param {array<object>} embeddedTransactions Embedded transactions to hash.
     * @returns {Hash256} Aggregate transactions hash.
     */
    static hashEmbeddedTransactions(embeddedTransactions: array<any>): Hash256;
    /**
     * Derives a Symbol KeyPair from a BIP32 node.
     * @param {Bip32Node} bip32Node BIP32 node.
     * @returns {KeyPair} Derived key pair.
     */
    static bip32NodeToKeyPair(bip32Node: Bip32Node): KeyPair;
    /**
     * Creates a Symbol facade.
     * @param {string|Network} network Symbol network or network name.
     */
    constructor(network: string | Network);
    network: import("../Network.js").Network;
    transactionFactory: TransactionFactory;
    /**
     * Hashes a Symbol transaction.
     * @param {object} transaction Transaction object.
     * @returns {Hash256} Transaction hash.
     */
    hashTransaction(transaction: object): Hash256;
    /**
     * Signs a Symbol transaction.
     * @param {KeyPair} keyPair Key pair.
     * @param {object} transaction Transaction object.
     * @returns {Signature} Transaction signature.
     */
    signTransaction(keyPair: KeyPair, transaction: object): Signature;
    /**
     * Verifies a Symbol transaction.
     * @param {object} transaction Transaction object.
     * @param {Signature} signature Signature to verify.
     * @returns {boolean} true if transaction signature is verified.
     */
    verifyTransaction(transaction: object, signature: Signature): boolean;
    /**
     * Cosigns a Symbol transaction.
     * @param {KeyPair} keyPair Key pair of the cosignatory.
     * @param {object} transaction Transaction object.
     * @param {boolean} detached \c true if resulting cosignature is appropriate for network propagation.
     *                           \c false if resulting cosignature is appropriate for attaching to an aggregate.
     * @returns {Cosignature|DetachedCosignature} Signed cosignature.
     */
    cosignTransaction(keyPair: KeyPair, transaction: object, detached?: boolean): Cosignature | DetachedCosignature;
    /**
     * Creates a network compatible BIP32 path for the specified account.
     *
     * @param {int} accountId Id of the account for which to generate a BIP32 path.
     * @returns {array<int>} BIP32 path for the specified account.
     */
    bip32Path(accountId: int): array<int>;
}
import TransactionFactory from '../symbol/TransactionFactory.js';
import { Hash256 } from '../CryptoTypes.js';
import { KeyPair } from '../symbol/KeyPair.js';
import { Signature } from '../CryptoTypes.js';
import { Address } from '../symbol/Network.js';
import { Verifier } from '../symbol/KeyPair.js';
import { Network as Network_1 } from '../symbol/Network.js';
