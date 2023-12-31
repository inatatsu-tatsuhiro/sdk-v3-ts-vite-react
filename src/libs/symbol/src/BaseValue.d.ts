/**
 * Represents a base integer.
 */
export default class BaseValue {
    /**
     * Creates a base value.
     * @param {number} size Size of the integer.
     * @param {number|BigInt} value Value.
     * @param {boolean} isSigned Should the value be treated as signed.
     */
    constructor(size: number, value: number | BigInt, isSigned?: boolean);
    size: number;
    isSigned: boolean;
    value: any;
    /**
     * Converts base value to string.
     * @returns {string} String representation.
     */
    toString(): string;
}
