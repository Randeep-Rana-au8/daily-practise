var express = require("express");
var locationRouter = express.Router();

// const menu = [
//   { link: "/", name: "Home" },
//   { link: "/hotels", name: "Hotels" },
//   { link: "/location", name: "City" },
// ];

function router(menu) {
  locationRouter.get("/", (req, res) => {
    res.render("location", { menuitems: menu });
  });

  locationRouter.get("/details", (req, res) => {
    res.send("Hey i am the details page of location router");
  });

  return locationRouter;
}

module.exports = router;
