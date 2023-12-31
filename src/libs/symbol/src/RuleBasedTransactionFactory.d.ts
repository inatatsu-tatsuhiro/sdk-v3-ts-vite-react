/**
 * Rule based transaction factory.
 */
export default class RuleBasedTransactionFactory {
    /**
     * Creates a rule based transaction factory for use with catbuffer generated code.
     * @param {object} module Catbuffer generated module.
     * @param {function} typeConverter Type converter.
     * @param {Map} typeRuleOverrides Type rule overrides.
     */
    constructor(module: object, typeConverter?: Function, typeRuleOverrides?: Map);
    module: any;
    typeConverter: (value: any) => any;
    typeRuleOverrides: any;
    rules: any;
    _getModuleClass(name: any): any;
    /**
     * Creates wrapper for SDK POD types.
     * @param {string} name Class name.
     * @param {type} PodClass Class type.
     */
    addPodParser(name: string, PodClass: type): void;
    /**
     * Creates flag type parser.
     * @param {string} name Class name.
     */
    addFlagsParser(name: string): void;
    /**
     * Creates enum type parser.
     * @param {string} name Class name.
     */
    addEnumParser(name: string): void;
    /**
     * Creates struct parser (to allow nested parsing).
     * @param {string} name Class name.
     */
    addStructParser(name: string): void;
    /**
     * Creates array type parser, based on some existing element type parser.
     * @param {string} name Class name.
     */
    addArrayParser(name: string): void;
    /**
     * Autodetects rules using reflection.
     */
    autodetect(): void;
    /**
     * Creates an entity from a descriptor using a factory.
     * @param {function} factory Factory function.
     * @param {object} descriptor Entity descriptor.
     * @returns {object} Newly created entity.
     */
    createFromFactory(factory: Function, descriptor: object): object;
    _createProcessor(descriptor: any): TransactionDescriptorProcessor;
}
import TransactionDescriptorProcessor from './TransactionDescriptorProcessor.js';
