// client app.js

// Lets create our angular module
var customers_app = angular.module("customers_app", ["ngRoute"]);

// Get routes for partials
customers_app.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "/partials/dashboards.html"
        })
        .when("/orders", {
            controller: "ordersController",
            templateUrl: "/partials/orders.html"
        })
        .when("/customers", {
            controller: "customersController",
            templateUrl: "/partials/customers.html"
        })
        .when("/products", {
            controller: "productsController",
            templateUrl: "partials/products.html"
        })
        .otherwise({
            redirectTo: "/"
        });

});