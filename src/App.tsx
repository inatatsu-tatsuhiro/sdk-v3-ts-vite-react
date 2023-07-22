
import { Configuration, ConfigurationParameters, TransactionPayload, TransactionRoutesApi } from '@nemtus/symbol-sdk-openapi-generator-typescript-axios'
import symbolSdk from './libs/src'
import TransactionFactory from './libs/src/symbol/TransactionFactory'

const ALICE_PRIVATE_KEY = ''
const BOB_ADDRESS = ''

const NODE_URL = 'https://sym-test-03.opening-line.jp:3001'

const configurationParameters: ConfigurationParameters = {
  basePath: NODE_URL,
}

const configuration: Configuration = new Configuration(configurationParameters)

function App() {

  const submit =() => {
    const network = symbolSdk.symbol.Network.TESTNET
    const deadline = network.fromDatetime(new Date(Date.now() + 7200000)).timestamp;
    const facade = new symbolSdk.facade.SymbolFacade(network);

    const alicePrivateKey = new symbolSdk.PrivateKey(ALICE_PRIVATE_KEY);
    const aliceKeyPair = new symbolSdk.symbol.KeyPair(alicePrivateKey)

    const transaction = facade.transactionFactory.create({
      type: 'transfer_transaction_v1',
      signerPublicKey: aliceKeyPair.publicKey.toString(),
      fee: 1000000n,
      deadline,
      recipientAddress: BOB_ADDRESS,
    });

    const aliceSignature = facade.signTransaction(aliceKeyPair, transaction);

    const jsonPayload = TransactionFactory.attachSignature(
      transaction,
      aliceSignature
    );

    const transactionRoutesApi: TransactionRoutesApi = new TransactionRoutesApi(configuration)

    const payload: TransactionPayload = {payload: JSON.parse(jsonPayload).payload}
    transactionRoutesApi.announceTransaction({
      transactionPayload: payload,
    })
    .then((response) => {
      console.log('res', response)
    })

  }


  return (
    <div>
      <div>Hello World</div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default App
