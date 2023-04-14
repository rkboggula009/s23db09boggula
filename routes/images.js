var express = require('express');
const images_controlers= require('../controller/images');
var router = express.Router();
/* GET images */
router.get('/', images_controlers.images_view_all_Page );
module.exports = router;



