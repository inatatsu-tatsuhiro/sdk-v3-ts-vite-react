/**
 * Processes and looks up transaction descriptor properties.
 */
export default class TransactionDescriptorProcessor {
    /**
     * Creates a transaction descriptor processor.
     * @param {object} transactionDescriptor Transaction descriptor.
     * @param {Map} typeParsingRules Type-dependent parsing rules.
     * @param {function} typeConverter Converts a generated type to an sdk type (optional).
     */
    constructor(transactionDescriptor: object, typeParsingRules: Map, typeConverter?: Function);
    transactionDescriptor: any;
    typeParsingRules: Map;
    typeConverter: Function;
    typeHints: {};
    _lookupValueAndApplyTypeHints(key: any): any;
    /**
     * Looks up the value for key.
     * @param {string} key Key for which to retrieve value.
     * @returns {object} Value corresponding to key.
     */
    lookupValue(key: string): object;
    /**
     * Copies all descriptor information to a transaction.
     * @param {object} transaction Transaction to which to copy keys.
     * @param {array<string>} ignoreKeys Keys of descriptor values not to copy (optional).
     */
    copyTo(transaction: object, ignoreKeys?: array<string>): void;
    /**
     * Sets type hints.
     * @param {object} typeHints New type hints.
     */
    setTypeHints(typeHints: object): void;
}
