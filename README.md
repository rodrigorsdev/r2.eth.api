# r2.eth.api

## Requeriments
- [Node.js](https://nodejs.org/download/release/latest-v10.x/): `>=10.0.0`
- [Solidity](https://solidity.readthedocs.io/en/v0.6.4/): `v0.6.4`
- [Truffle](https://www.trufflesuite.com/truffle): `v5.1.9`

## Start API
1. Clone the repo
2. Run ganache-cli (or another blockchain) use port 8545
```sh
ganache-cli
```
3. Install the dependencies
```sh
npm install
```
4. Create .env file on root (see the .env.example and set the informations)
5. Deploy smart contract
```sh
truffle migrate
```
6. Run API on http://localhost:3000/swagger

### Run tests

```sh
truffle test
```

### Deploy contract
1. Create .env file on root (see the .env.example and set the informations)
2. Deploy smart contract
```sh
truffle migrate --network <network_name>
```