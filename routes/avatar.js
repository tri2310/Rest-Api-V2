const express = require('express');
const router = express.Router();
const avatar = require('../controllers/avatar.controller');
const Validation = require('../validation/avatar/avatar.validation')


router.get('/avatar', avatar.findAll);
router.get('/avatar/:id', avatar.findOne);
router.post('/avatar',Validation.createAvatar, avatar.create);
router.put('/avatar/:id',Validation.createAvatar, avatar.update);
router.delete('/avatar/:id', avatar.delete);


module.exports = router;
