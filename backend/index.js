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
