// Import the model to use its database functions.
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
  db.Burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

app.post("/", function(req, res) {
  db.Burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, "0"
  ], function() {
    res.redirect("/");
  });
});

app.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  db.Burger.destroy(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
//module.exports = router;
