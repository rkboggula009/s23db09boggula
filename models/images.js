const mongoose = require("mongoose")
const imagesSchema = mongoose.Schema({
images_name: String,
cost: Number,
size: String
})
module.exports = mongoose.model("images",imagesSchema)

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});