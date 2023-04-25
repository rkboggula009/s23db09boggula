var express = require('express');
const images_controllers= require('../controller/images');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET images */
router.get('/', images_controllers.images_view_all_Page );


/* GET detail images page */
router.get('/detail', images_controllers.images_view_one_Page);

/* GET create images page */
router.get('/create', images_controllers.images_create_Page);

/* GET create update page */
router.get('/update', secured,images_controllers.images_update_Page);

/* GET delete images page */
router.get('/delete', images_controllers.images_delete_Page);
module.exports = router;





