const express = require('express');
const router = express.Router();
const video = require('../controllers/video.controller');
const Validation = require('../validation/video/video.validation')


router.get('/video', video.findAll);
router.get('/video/:id', video.findOne);
router.post('/video',Validation.createVideo, video.create);
router.put('/video/:id',Validation.createVideo, video.update);
router.delete('/video/:id', video.delete);


module.exports = router;
