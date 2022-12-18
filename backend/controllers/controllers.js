const menuDAO = require("../models/menuModel");
const menu = new menuDAO({ filename: "menu.db", autoload: true, });

//MVC part 3: controller, here are all the functions of the back-end will be called from and reacted to accordingly. 

exports.newList = function (req, res) {
  menu.init();
  res.redirect("/");
};
exports.listMenu = function (req, res) {
  menu.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.listOrders = function (req, res) {
order.getAllEntries()
    .then((list) => {
      res.json(list);
      console.log(list);
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.addOrder = function (req, res) {
  console.log("req body to add to database : ", req.body);
  order.addEntry(req.body).catch((err) => {
    console.log("promise rejected", err);
  });
  res.redirect("/");
};

exports.updateRatings = function (req, res) {
  //console.log(req.body)
  menu.updateRatings(req.body.id, req.body.name, req.body.description, req.body.price, req.body._id, req.body.category, req.body.ingredients, req.body.recipe, req.body.serving, req.body.original, req.body.image, req.body.ratings);
  
  res.redirect('back');
}