const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

function DB() {
    mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.error("something went wrong", err.message);
    }) 
}

const connectDB = DB();

module.exports = connectDB;

