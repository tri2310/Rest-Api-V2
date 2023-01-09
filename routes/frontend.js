const express = require('express');
const router = express.Router();
const frontend = require('../controllers/frontend.controller');


router.get('/rolesHome', frontend.getRolesHome);
router.get('/rolesPage', frontend.getrolesPage);
router.get('/rolesDetail/:id', frontend.getrolesDetail);



router.get('/interestHome', frontend.getInterestHome);
router.get('/interestPage', frontend.getinterestPage);
router.get('/interestDetail/:id', frontend.getinterestDetail);



router.get('/produkHome', frontend.getProdukHome);
router.get('/produkPage', frontend.getprodukPage);
router.get('/produkDetail/:id', frontend.getprodukDetail);


module.exports = router;
