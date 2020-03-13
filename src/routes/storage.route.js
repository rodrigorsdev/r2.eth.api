'use strict';

const express = require('express');
const router = express.Router();

const useUnsignedContract = require('../middlewares/unsigne-contract.middleware');
const useSignedContract = require('../middlewares/signed-contract.middleware');

const controller = require('../controllers/storage.controller');

const contractUnsigned = useUnsignedContract();
const contractSigned = useSignedContract();

router.get('/', [contractUnsigned], controller.get);
router.post('/', [contractSigned], controller.post);

module.exports = router;