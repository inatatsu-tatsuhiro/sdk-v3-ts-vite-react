export default ed25519;
declare namespace ed25519 {
    function keyPairFromSeed(hashMode: any, seed: any): {
        publicKey: Uint8Array;
        privateKey: any;
    };
    function sign(hashMode: any, message: any, privateKey: any): Uint8Array;
    function verify(hashMode: any, message: any, signature: any, publicKey: any): any;
}
