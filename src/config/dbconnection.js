const mongoose = require("mongoose");
require("dotenv").config();

let  MONGODB_URI  = process.env.MONGODB_URI;

console.log(MONGODB_URI)

const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
};

const connection = async () => {
    try {
        await mongoose.connect(MONGODB_URI, options);
        console.log(":::> Connected to MongoDB database");
    } catch (error) {
        console.log("<::: Couldn't connect to database ", error);
    }
};


module.exports = {connection}