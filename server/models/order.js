var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    name: { type: String },
    product: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now}
});

// Order form validation
OrderSchema.path("name").required(true, "Please select a customer.");

OrderSchema.path("product").required(true, "Please select a product.");

OrderSchema.path("quantity").required(true, "Please select a quantity.");

mongoose.model("Order", OrderSchema);