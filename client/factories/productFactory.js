// client factory

customers_app.factory("ProductFactory", function($http) {
    var factory = {};

    factory.getProducts = function(callback) {
        $http.get("/productsObjects").success(function(output) {
            products = output;
            callback(products);
        });
    };

    factory.addProduct = function(info, callback) {
        $http.post("/saveProduct", info).success(function() {
            callback(info);
        });
    };

    return factory;
});