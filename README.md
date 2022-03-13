# Web3 React Scaffold
This repository contains scaffolding to get started creating a Web3 Application (aka. Decentralized Application, DApp) using `ether.js`, `web3-react` and `react`. By default the scaffolding is setup to use MetaMask as an injected Web3 Provider. However, this can be changed by adding your desired connector to the [`connectors.js`](./src/connectors.js) file (e.g. Wallet Link, Wallet Connect, Ledger, Infura, _etc_. See the `web3-react` documentation for examples of alternative providers). The project is initialized via the `npx create-react-app` utility and therefore uses the `react-scripts` package to start and stop the application.

## Install
Clone the repository

Install dependencies
```bash
cd your-dapp
yarn 
```

## Running 
**Note**: Your browser must have MetaMask installed in order to connect and verify the scaffolding is running as expected.

```bash
yarn start

open http://localhost:3000
```

Hit the "Connect" button and MetaMask will prompt you to connect your wallet to the application.

## Licence
MIT Licence
