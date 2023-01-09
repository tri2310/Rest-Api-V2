const express = require('express');
const router = express.Router();
const produk = require('../controllers/produk.controller');
const Validation = require('../validation/produk/produk.validation')


router.get('/produk', produk.findAll);
router.get('/produk/:id', produk.findOne);
router.post('/produk',Validation.createProduk, produk.create);
router.put('/produk/:id',Validation.createProduk, produk.update);
router.delete('/produk/:id', produk.delete);


module.exports = router;
