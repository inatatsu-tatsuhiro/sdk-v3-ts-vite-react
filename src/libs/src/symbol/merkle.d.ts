/**
 * Builder for creating a merkle hash.
 */
export class MerkleHashBuilder {
    hashes: any[];
    /**
     * Adds a hash to the merkle hash.""
     * @param {Hash256} componentHash Hash to add.
     */
    update(componentHash: Hash256): void;
    /**
     * Calculates the merkle hash.
     * @returns {Hash256} Merkle hash.
     */
    final(): Hash256;
}
export function proveMerkle(leafHash: Hash256, merklePath: array<any>, rootHash: Hash256): boolean;
export function deserializePatriciaTreeNodes(buffer: any): (LeafNode | BranchNode)[];
/**
 * Possible results of a patricia merkle proof.
 */
export class PatriciaMerkleProofResult {
    static VALID_POSITIVE: number;
    static VALID_NEGATIVE: number;
    static INCONCLUSIVE: number;
    static STATE_HASH_DOES_NOT_MATCH_ROOTS: number;
    static UNANCHORED_PATH_TREE: number;
    static LEAF_VALUE_MISMATCH: number;
    static UNLINKED_NODE: number;
    static PATH_MISMATCH: number;
}
export function provePatriciaMerkle(encodedKey: Hash256, valueToTest: Hash256, merklePath: array<LeafNode | BranchNode>, stateHash: Hash256, subcacheMerkleRoots: Hash256): numeric;
import { Hash256 } from '../CryptoTypes.js';
/**
 *  Leaf node in a compact patricia tree.
 */
declare class LeafNode extends TreeNode {
    /**
     * Creates a leaf node.
     * @param {PatriciaTreePath} path Leaf path.
     * @param {Hash256} value Leaf value.
     */
    constructor(path: PatriciaTreePath, value: Hash256);
    value: Hash256;
    /**
     * Calculates node hash.
     * @returns {Hash256} Hash of the node.
     */
    calculateHash(): Hash256;
}
/**
 *  Branch node in a compact patricia tree.
 */
declare class BranchNode extends TreeNode {
    /**
     * Creates a branch node.
     * @param {PatriciaTreePath} path Branch path.
     * @param {array<Hash256>} links Branch links.
     */
    constructor(path: PatriciaTreePath, links: array<Hash256>);
    links: array<Hash256>;
    /**
     * Calculates node hash.
     * @returns {Hash256} Hash of the node.
     */
    calculateHash(): Hash256;
}
/**
 *  Node in a compact patricia tree.
 */
declare class TreeNode {
    /**
     * Creates a tree node.
     * @param {PatriciaTreePath} path Node path.
     */
    constructor(path: PatriciaTreePath);
    path: PatriciaTreePath;
    /**
     * Gets hex representation of path.
     * @returns {str} Hex representation of path.
     */
    get hexPath(): str;
}
export {};
