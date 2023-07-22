/**
 * Factory for creating NEM transactions.
 */
export default class TransactionFactory {
    /**
     * Converts a transaction to a non-verifiable transaction.
     * @param {object} transaction Transaction object.
     * @returns {object} Non-verifiable transaction object.
     */
    static toNonVerifiableTransaction(transaction: object): object;
    /**
     * Attaches a signature to a transaction.
     * @param {object} transaction Transaction object.
     * @param {Signature} signature Signature to attach.
     * @returns {string} JSON transaction payload.
     */
    static attachSignature(transaction: object, signature: Signature): string;
    static _nemTypeConverter(value: any): nc.Address;
    static buildRules(typeRuleOverrides: any): RuleBasedTransactionFactory;
    /**
     * Creates a factory for the specified network.
     * @param {Network} network NEM network.
     * @param {Map} typeRuleOverrides Type rule overrides.
     */
    constructor(network: Network, typeRuleOverrides: Map);
    factory: RuleBasedTransactionFactory;
    network: Network;
    /**
     * Creates a transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @returns {object} Newly created transaction.
     */
    create(transactionDescriptor: object, autosort?: boolean): object;
}
import RuleBasedTransactionFactory from '../RuleBasedTransactionFactory.js';
import * as nc from './models.js';
