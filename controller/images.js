var images = require('../models/images');
// List of all Gifts
exports.images_list = async function(_req, res) {
    try{
        theimages = await images.find();
        res.send(theimages);
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
    // {"images_name":"image1", "size":"large", "cost":1000}
    document.images_name = req.body.images_name;
    document.size = req.body.size;
    document.cost = req.body.cost;
    // console.log(document);
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(error){
    res.status(500);
    res.send(`{"error": ${error}}`);
    console.log(error)
    }
   };
// Handle images create on POST.
exports.images_detail = async function(_req, res) {
    try{
        theimages = await images.find();
        res.send(theimages);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
//res.send('NOT IMPLEMENTED: Gift create POST');
};
// Handle Gift delete form on DELETE.
exports.images_delete = async function(_req, res) {
    try{
        theimages = await images.find();
        res.send(theimages);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id);
};
// Handle Gift update form on PUT.
exports.images_update_put = async function(_req, res) {
    try{
        theimages = await images.find();
        res.send(theimages);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.images_view_all_Page = async function(_req, res) {
try{
theimages = await images.find();
res.render('images', { title: 'images Search Results', results: theimages });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific Costume.
exports.images_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await images.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle Costume update form on PUT.
exports.images_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await images.findById( req.params.id)
// Do updates of properties
if(req.body.images_name)
toUpdate.images_name = req.body.images_name;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};