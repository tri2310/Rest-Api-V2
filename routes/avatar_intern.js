const express = require('express');
const router = express.Router();
const avatar_intern = require('../controllers/avatar_intern.controller');
const Validation = require('../validation/avatar_intern/avatar_intern.validation')


router.get('/avatar_intern', avatar_intern.findAll);
router.get('/avatar_intern/:id', avatar_intern.findOne);
router.post('/avatar_intern',Validation.createAvatarIntern, avatar_intern.create);
router.put('/avatar_intern/:id',Validation.createAvatarIntern, avatar_intern.update);
router.delete('/avatar_intern/:id', avatar_intern.delete);


module.exports = router;