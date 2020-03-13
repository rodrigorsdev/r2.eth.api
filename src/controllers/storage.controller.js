'use strict';

exports.get = async (req, res, next) => {
    try {
        const { contract } = req;
        const result = await contract.get();
        res.status(200).send({ success: true, message: 'get success', data: result });
    } catch (err) {
        res.status(500).send({ success: false, message: 'get error', error: err.message });
    }
};

exports.post = async (req, res, next) => {
    try {
        const { contract } = req;
        const { value } = req.body;
        await contract.set(value);
        res.status(200).send({ success: true, message: 'post success', data: value });
    } catch (err) {
        res.status(500).send({ success: false, message: 'post error', error: err.message });
    }
};