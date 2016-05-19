customers_app.controller("productsController", function($scope, ProductFactory) {
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

        //if($scope.new_product.imgUrl.length < 10) {
        //    $scope.multipleErrors.push("Your image URL must be at least 10 characters or more.");
        //}

        console.log("addProduct $scope.multipleErrors array:", $scope.multipleErrors);

        //if($scope.multipleErrors.length === 0) {

            ProductFactory.addProduct($scope.new_product, function(errors) {
                $scope.errors = errors;


                    ProductFactory.getProducts(function(data) {
                        $scope.products = data;
                        $scope.products.reverse();
                    });

                    $scope.new_product = {};

            });

        //}

        $scope.new_product = {};

    };
});    
