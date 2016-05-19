// server model
var mongoose = require("mongoose");

var ProductsSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    imgUrl: { type: String, trim: true },
    description: { type: String, trim: true },
    initialQuantity: Number,
    created_at: {type: Date, default: Date.now}
});

mongoose.model("Product", ProductsSchema);