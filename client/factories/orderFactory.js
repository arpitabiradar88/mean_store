// client factory
customers_app.factory("OrderFactory", function($http) {
    var factory = {};

    factory.getOrders = function(callback) {
        $http.get("/ordersObjects").success(function(output) {
            orders = output;
            callback(orders);
        });
    };

    factory.addOrder = function(info, callback) {
        $http.post("/saveOrder", info).success(function(info) {
            orders.push({name: info.name, quantity: info.quantity, product: info.product});
            callback(info);

            console.log(orders);

        });
    };

    return factory;
});
