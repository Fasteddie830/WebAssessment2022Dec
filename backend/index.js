//backend app using express, cors, and body parser. routes are handled by the router, and the app is listening on port 3005
//meaning localhost:3005

const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

const router = require('./routes/routes');
app.use('/', router);

app.listen(3005, () => {
  console.log("Server opened not on 3001, but on 3005. Enjoy")
});
