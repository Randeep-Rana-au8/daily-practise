var _ = require("underscore");

// With the help of _.contains we are checking that the array contains the given element or not.
console.log(_.contains([0, 3, 4, 2, 5], 1)); //false
console.log(_.contains([0, 3, 4, 2, 5], 3)); //true
