const express = require('express');
const router = express.Router();
const admin_login = require('../controllers/admin.controller');
const Validation = require('../validation/admin/admin.validation')


router.get('/admin/login', admin_login.findAll);
router.get('/admin/login/:id', admin_login.findOne);
router.post('/admin/login',Validation.createAdmin, admin_login.create);
router.put('/admin/login/:id',Validation.createAdmin, admin_login.update);
router.delete('/admin/login/:id', admin_login.delete);


module.exports = router;