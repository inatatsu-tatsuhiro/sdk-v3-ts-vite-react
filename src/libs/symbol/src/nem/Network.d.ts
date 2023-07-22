/**
 * Represents a NEM network timestamp with millisecond resolution.
 */
export class NetworkTimestamp extends BasicNetworkTimestamp {
    /**
     * Adds a specified number of seconds to this timestamp.
     * @override
     * @param {number} count Number of seconds to add.
     * @returns {NetworkTimestamp} New timestamp that is the specified number of seconds past this timestamp.
     */
    override addSeconds(count: number): NetworkTimestamp;
}
/**
 * Represents a NEM address.
 */
export class Address extends ByteArray {
    static SIZE: number;
    static ENCODED_SIZE: number;
    /**
     * Creates a NEM address.
     * @param {Uint8Array|string|Address} address Input string, byte array or address.
     */
    constructor(address: Uint8Array | string | Address);
}
/**
 * Represents a NEM network.
 */
export class Network extends BasicNetwork {
    /**
     * Creates a new network with the specified name, identifier byte and generation hash seed.
     * @param {string} name Network name.
     * @param {number} identifier Network identifier byte.
     * @param {Date} epochTime Network epoch time.
     */
    constructor(name: string, identifier: number, epochTime: Date);
}
export namespace Network {
    let MAINNET: Network;
    let TESTNET: Network;
    let NETWORKS: Network[];
}
import { NetworkTimestamp as BasicNetworkTimestamp } from '../NetworkTimestamp.js';
import ByteArray from '../ByteArray.js';
import { Network as BasicNetwork } from '../Network.js';
