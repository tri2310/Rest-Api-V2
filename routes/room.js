const express = require('express');
const router = express.Router();
const room = require('../controllers/room.controller');
const Validation = require('../validation/room/room.validation')


router.get('/room', room.findAll);
router.get('/room/:id', room.findOne);
router.post('/room',Validation.createRoom, room.create);
router.put('/room/:id',Validation.createRoom, room.update);
router.delete('/room/:id', room.delete);


module.exports = router;
