var mongoose = require("mongoose");

var Order = mongoose.model("Order");

module.exports = (function() {
    return {

        /****** Orders methods  ******/
        showOrders: function(req, res) {

            // Show customer documents from the
            // "FullMean" Mongo database
            Order.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show customers Errors:", err);
                }
                else {
                    res.json(results);
                }

            });
        },
        saveOrder: function(req, res) {

            var order = new Order(req.body);

            order.save(function(err) {
                if(err) {
                    console.log("saveOrder Server Controller errors:", order.errors);

                    res.json({title: "you have errors", errors: order.errors});
                }
                else {
                    // console.log("Order saved:", order);

                    console.log("Order added:", order);
                    res.send(true);
                }
            });

        },

        deleteOrder: function(req, res) {

            Order.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Order delete error:", err);
                }
                else {
                    console.log("Order deleted!");
                    res.redirect("/#orders");
                }
            });
        }

    }

})();
