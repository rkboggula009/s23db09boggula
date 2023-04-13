const mongoose = require("mongoose")
const imagesSchema = mongoose.Schema({
images_name: String,
cost: Number,
size: String
})
module.exports = mongoose.model("images",imagesSchema)