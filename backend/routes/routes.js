const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

//The router takes care of the different /sites the back-end webiste has.
// /food and / returns the menu database, /updateOrder calls the function to update the ratings of a dish with an incoming entry in JSON format. 
//new re-creates the database. 

router.get("/", controller.listMenu);
router.get("/food", controller.listMenu);
router.post('/updateOrder', controller.updateRatings);
router.get("/new", controller.newList);

router.use(function(req, res) {
        res.status(404);
        res.type('text/plain');
        res.send('404 Not found.');
    });

router.use(function(err, req, res, next) {
        res.status(500);
        res.type('text/plain');
        res.send('Internal Server Error.');
    });

module.exports = router;