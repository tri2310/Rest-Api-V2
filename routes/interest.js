const express = require('express');
const router = express.Router();
const interest = require('../controllers/interest.controller');
const Validation = require('../validation/interest/interest.validation')


router.get('/interest', interest.findAll);
router.get('/interest/:id', interest.findOne);
router.post('/interest',Validation.createInterest, interest.create);
router.put('/interest/:id',Validation.createInterest, interest.update);
router.delete('/interest/:id', interest.delete);


module.exports = router;
