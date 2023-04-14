var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controller/api');
var images_controller = require('../controller/images');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gift ROUTES ///
// POST request for creating a Gift.
router.post('/images', images_controller.images_create_post);
// DELETE request to delete Gift.
router.delete('/images/:id', images_controller.images_delete);
// PUT request to update Gift.
router.put('/images/:id', images_controller.images_update_put);
// GET request for one Gift.
router.get('/images/:id', images_controller.images_detail);
// GET request for list of all Gift items.
router.get('/images', images_controller.images_list);

// GET request for one costume.
router.get('/images/:id', images_controller.images_detail);
module.exports = router;