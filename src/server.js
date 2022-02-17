require("dotenv").config();
const express = require("express");
const viewEngine   = require("./config/viewEngine");
const initWebRoute = require("./routes/web");
const bodyParser   = require("body-parser");
// const cors         = require("cors");

let app = express();

// config view engine
viewEngine(app);

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});