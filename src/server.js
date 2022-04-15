require("dotenv").config();
const express = require("express");
const viewEngine   = require("./config/viewEngine");
const initWebRoute = require("./routes/web");
const bodyParser   = require("body-parser");
const {connection} = require("./config/dbconnection");
const router = require("./routes/api");
let app = express();

// config view engine
viewEngine(app);

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);
app.use("api/v1/", router);

let port = process.env.PORT || 8080;

//connect db
connection();

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});