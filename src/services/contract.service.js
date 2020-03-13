const { Contract } = require('ethers');
const instanceProvider = require('./provider.service');
const simpleStorageContract = require('../../build/contracts/SimpleStorage.json');

async function connectToContract() {

    if (!simpleStorageContract)
        throw new Error(`contrat is not builded, run truffle compile ;)`);

    const deploymentKey = Object.keys(simpleStorageContract.networks)[0];

    if (!deploymentKey)
        throw new Error(`contrat is not deployd, run truffle migrate ;)`);

    const contractAddress = simpleStorageContract
        .networks[deploymentKey]
        .address;

    const contract = new Contract(contractAddress, simpleStorageContract.abi, await instanceProvider());

    return contract;
}

module.exports = connectToContract;