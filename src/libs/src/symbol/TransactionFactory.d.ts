/**
 * Factory for creating Symbol transactions.
 */
export default class TransactionFactory {
    /**
     * Attaches a signature to a transaction.
     * @param {object} transaction Transaction object.
     * @param {Signature} signature Signature to attach.
     * @returns {string} JSON transaction payload.
     */
    static attachSignature(transaction: object, signature: Signature): string;
    static _symbolTypeConverter(value: any): sc.UnresolvedAddress;
    static buildRules(typeRuleOverrides: any): RuleBasedTransactionFactory;
    /**
     * Creates a factory for the specified network.
     * @param {Network} network Symbol network.
     * @param {Map} typeRuleOverrides Type rule overrides.
     */
    constructor(network: Network, typeRuleOverrides: Map);
    factory: RuleBasedTransactionFactory;
    network: Network;
    _createAndExtend(transactionDescriptor: any, autosort: any, FactoryClass: any): any;
    /**
     * Creates a transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @returns {object} Newly created transaction.
     */
    create(transactionDescriptor: object, autosort?: boolean): object;
    /**
     * Creates an embedded transaction from a transaction descriptor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {boolean} autosort When set (default), descriptor arrays requiring ordering will be automatically sorted.
     *                           When unset, descriptor arrays will be presumed to be already sorted.
     * @returns {object} Newly created transaction.
     */
    createEmbedded(transactionDescriptor: object, autosort?: boolean): object;
}
import RuleBasedTransactionFactory from '../RuleBasedTransactionFactory.js';
import * as sc from './models.js';
