// client controller
customers_app.controller("ordersController", function($scope, $compile, CustomerFactory, ProductFactory, OrderFactory) {

    $scope.currentDate = Date.now();

    $scope.multipleErrors = [];

    /****** Use CustomerFactory ******/
    CustomerFactory.getCustomers(function (data) {
        $scope.customers = data;
        if($scope.customers) {
            $scope.customers.reverse();
        }
    });

    $scope.addCustomer = function() {

        // Client side error to check if
        // a customer name already exists
        var duplicate_found = false;

        // For statement iterates through
        // all customers in the database and
        // checks if the submitted customer name
        // matches a customer name in the DB
        // and displays an error and stops
        // form submission
        for(var i in $scope.customers) {
            if($scope.new_customer.name === $scope.customers[i].name) {
                duplicate_found = true;
                $scope.errors.push("This is already a customer with that name.");

                console.log("addCustomer $scope.multipleErrors:", $scope.error);
            }
        }



        CustomerFactory.addCustomer($scope.new_customer, function (errors) {

            $scope.errors = errors;

            CustomerFactory.getCustomers(function (data) {
                $scope.customers = data;
                $scope.customers.reverse();
            });

            $scope.new_customer = {};

        });

    };

    /****** Use ProductFactory ******/
    ProductFactory.getProducts(function(data) {
        $scope.products = data;
        if($scope.products) {
            $scope.products.reverse();
        }
    });


    $scope.addProduct = function() {

        var duplicate_found = false;

        for(var i in $scope.products) {
            if($scope.new_product.name === $scope.products[i].name) {
                duplicate_found = true;
                $scope.multipleErrors.push("There is already a product with that name.");
            }
        }

        if($scope.new_product.imgUrl.length < 10) {
            $scope.multipleErrors.push("Your image URL must be at least 10 characters or more.");
        }

        console.log("addProduct $scope.multipleErrors array:", $scope.multipleErrors);

        if($scope.multipleErrors.length === 0) {

            ProductFactory.addProduct($scope.new_product, function(errors) {
                $scope.errors = errors;


                    ProductFactory.getProducts(function(data) {
                        $scope.products = data;
                        $scope.products.reverse();
                    });

                    $scope.new_product = {};

            });

        }

        $scope.new_product = {};

    };

    /****** Use OrderFactory ******/
    OrderFactory.getOrders(function(data) {
        $scope.orders = data;
        if($scope.orders) {
            $scope.orders.reverse();
        }
    });

    $scope.addOrder = function() {

        OrderFactory.addOrder($scope.new_order, function(errors) {
            $scope.errors = errors;

            OrderFactory.getOrders(function(data) {
                $scope.orders = data;
                $scope.orders.reverse();
            });

            console.log("$scope.new_order:", $scope.new_order);

            $scope.new_order = {};


        });
    };

});