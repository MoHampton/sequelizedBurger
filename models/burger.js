// Require modules and packages
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    // table_name, [burger_name, devoured], [forminput1, forminput2], callback
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger",condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;