const connectToContract = require('../services/contract.service');
const { fromPrivateKey } = require('../services/wallet.service');

function createUseContractSigned() {
  return async function useContract(req, res, next) {
    try {
      const { privateKey } = req.body;

      if (!privateKey)
        throw new Error('you must be send the private key to sign transaction ;)');

      const signer = await fromPrivateKey(privateKey);
      req.contract = await connectToContract();
      req.contract = req.contract.connect(signer);

      next();
    } catch (err) {
      res.status(500).send({
        success: false, 
        message: 'middleware error',
        error: err.message,
      });
    }
  };
}

module.exports = createUseContractSigned;