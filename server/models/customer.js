// This is the customer.js file located at /server/models/customer.js
// We want to create a file that has the schema for our customers and creates a model that we can then call upon in our controller
var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({
    name: { type: String, unique: true, trim: true },
    created_at: {type: Date, default: Date.now}
});

// Customer form validations
CustomerSchema.path("name").required(true, "Customer name cannot be blank.");

CustomerSchema.path("name").validate(function(val) {
    return val.length > 1;
}, "Customer name must be two letters or more.");



// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model("Customer", CustomerSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
