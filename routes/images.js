var express = require('express');
const images_controllers= require('../controller/images');
var router = express.Router();
/* GET images */
router.get('/', images_controllers.images_view_all_Page );
module.exports = router;

/* GET detail images page */
router.get('/detail', images_controllers.images_view_all_Page);



