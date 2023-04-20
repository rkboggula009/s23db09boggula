var express = require('express');
const images_controllers= require('../controller/images');
var router = express.Router();
/* GET images */
router.get('/', images_controllers.images_view_all_Page );
module.exports = router;

/* GET detail images page */
router.get('/detail', images_controllers.images_view_one_Page);

/* GET create costume page */
router.get('/create', images_controllers.images_create_Page);

/* GET create update page */
router.get('/update', images_controllers.images_update_Page);

/* GET delete costume page */
router.get('/delete', images_controllers.images_delete_Page);





