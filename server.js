// Requirements
const express = require("express");
const bodyParser = require ("body-parser");

//Express
const app = express();
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json( {type: "application/json"} ));

//Allows static css and js files 
app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, () => console.log ("Listening on port " + port));