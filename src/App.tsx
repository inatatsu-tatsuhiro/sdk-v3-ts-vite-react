
import symbolSdk from './libs/src'
const ALICE_PRIVATE_KEY = ''
const ALICE_PUBLIC_KEY = ''
const BOB_ADDRESS = ''

function App() {

  const submit =() => {
    const network = symbolSdk.symbol.Network.TESTNET
    const deadline = network.fromDatetime(new Date(Date.now() + 7200000)).timestamp;
    const facade = new symbolSdk.facade.SymbolFacade(network.name);

    const alicePrivateKey = new symbolSdk.PrivateKey(ALICE_PRIVATE_KEY);
    const aliceKeyPair = new symbolSdk.symbol.KeyPair(alicePrivateKey)

    const transaction = facade.transactionFactory.create({
      type: 'transfer_transaction_v1',
      signerPublicKey: ALICE_PUBLIC_KEY,
      fee: 1000000n,
      deadline,
      recipientAddress: BOB_ADDRESS,
    });

    const aliceSignature = facade.signTransaction(aliceKeyPair, transaction);
    const jsonPayload = facade.transactionFactory.constructor.attachSignature(
      transaction,
      aliceSignature
    );
    const payload = JSON.parse(jsonPayload).payload;
    console.log(payload);
  }

  return (
    <div>
      <div>Hello World</div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default App
