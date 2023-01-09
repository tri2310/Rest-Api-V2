const express = require('express');
const router = express.Router();
const roles = require('../controllers/roles.controller');
const Validation = require('../validation/roles/roles.validation')


router.get('/roles', roles.findAll);
router.get('/roles/:id', roles.findOne);
router.post('/roles',Validation.createRoles, roles.create);
router.put('/roles/:id',Validation.createRoles, roles.update);
router.delete('/roles/:id', roles.delete);


module.exports = router;
