var images = require('../models/images');
// List of all Images
exports.images_list = async function(req, res) {
    try{
        theGifts = await images.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// Handle Costume create on POST.
exports.images_create_post = async function(req, res) {
    console.log(req.body)
    let document = new images();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gift_name":"watch", "numof_gifts":12, "gift_value":"cvbn"}
    document.images_name = req.body.images_name;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Gift create on POST.
exports.images_detail = async function(req, res) {
    try{
        theGifts = await images.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
//res.send('NOT IMPLEMENTED: Gift create POST');
};
// Handle Gift delete form on DELETE.
exports.images_delete = async function(req, res) {
    try{
        theGifts = await images.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id);
};
// Handle Gift update form on PUT.
exports.images_update_put = async function(req, res) {
    try{
        theGifts = await images.find();
        res.send(theGifts);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.images_view_all_Page = async function(req, res) {
try{
theGifts = await images.find();
res.render('images', { title: 'images Search Results', results: theGifts });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};