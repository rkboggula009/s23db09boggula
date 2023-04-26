const mongoose = require("mongoose");

const imagesSchema = mongoose.Schema({
  images_name: { 
    type: String 
  },
  size: { 
    type: String 
  },
  cost: {
    type: Number,
    min: [0, "Price must be min 0"],
    max: [100000, "Price must be max 100"]
  },
});
module.exports = mongoose.model("images", imagesSchema);