customers_app.controller("customersController", function($scope, CustomerFactory) {
	$scope.currentDate = Date.now();
    $scope.multipleErrors = [];

    CustomerFactory.getCustomers(function (data) {
        $scope.customers = data;
        if($scope.customers){
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
                $scope.error = "This is already a customer with that name.";

                console.log("$scope.error:", $scope.error);
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
});