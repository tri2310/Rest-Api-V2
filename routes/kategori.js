const express = require('express');
const router = express.Router();
const kategori = require('../controllers/kategori.controller');
const Validation = require('../validation/kategori/kategori.validation')


router.get('/kategori', kategori.findAll);
router.get('/kategori/:id', kategori.findOne);
router.post('/kategori',Validation.createKategori, kategori.create);
router.put('/kategori/:id',Validation.createKategori, kategori.update);
router.delete('/kategori/:id', kategori.delete);


module.exports = router;
