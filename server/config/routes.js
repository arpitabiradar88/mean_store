// server routes

// First at the top of your routes.js file you'll have to require the controller
var customers = require("./../controllers/customers.js");
var products = require("./../controllers/products.js");
var orders = require("./../controllers/orders.js");

// This is our routes.js file located in /config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it a
module.exports = function(app) {
    /****** home page ******/

    // Show the home page
    app.get("/", function(req, res) {
        res.render("index");
    });

    /****** customers collection actions ******/

    // customers are displayed on a customers page
    // AND index page
    app.get("/customersObjects", function(req, res) {
        customers.show(req, res);
    });

    // Save a customer
    app.post("/save", function(req, res) {
        customers.saveCustomer(req, res);
    });

    // Delete a customer
    app.get("/destroy/:id", function(req, res) {
        customers.deleteCustomer(req, res);
    });

    // Show a customer to update
    app.get("/customer/:id", function(req, res) {
        customers.showSingleCustomer(req, res);
    });

    // Update a customer
    app.post("/customer/update/:id", function(req, res) {
        customers.updateSingleCustomer(req, res);
    });


    /****** products collection actions ******/

    // Show all products
    app.get("/productsObjects", function(req, res) {
        products.showProducts(req, res);       
    });

    // Save a product
    app.post("/saveProduct", function(req, res) {
        products.saveProduct(req, res);
    });

    // Delete a product
    app.get("/destroy/product/:id", function(req, res) {
        products.deleteProduct(req, res);
    });

    // Show a product to update
    app.get("/product/:id", function(req, res) {
        products.showSingleProduct(req, res);
    });

    // Update a product
    app.post("/product/update/:id", function(req, res) {
        products.updateSingleProduct(req, res);
    });

    /****** orders collection actions ******/

    // Show all orders
    app.get("/ordersObjects", function(req, res) {
        orders.showOrders(req, res);
    });

    // Save an order
    app.post("/saveOrder", function(req, res) {
        products.subtractProductQuantity(req, res);
        orders.saveOrder(req, res);
    });

    app.get("/destroy/order/:id", function(req, res) {
        orders.deleteOrder(req, res);
    });

    // Delete an order
    app.post("/destroy/order", function(req, res) {
        orders.deleteOrder(req, res);
    });

};