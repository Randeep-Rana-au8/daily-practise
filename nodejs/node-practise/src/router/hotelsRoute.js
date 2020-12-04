var express = require("express");
var hotelsRoute = express.Router();

// const menu = [
//   { link: "/", name: "Home" },
//   { link: "/hotels", name: "Hotels" },
//   { link: "/location", name: "City" },
// ];

function router(menu) {
  hotelsRoute.get("/", (req, res) => {
    res.render("hotels", { menuitems: menu });
  });

  hotelsRoute.get("/details/:id", (req, res) => {
    var id = req.params.id;
    var city = req.query.city;
    var market = req.query.market;
    res.send(
      "Hey i am the details page of hotels router " + id + city + market
    );
  });

  return hotelsRoute;
}

module.exports = router;
