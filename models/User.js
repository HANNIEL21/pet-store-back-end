const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }       
});

module.exports = mongoose.model("user", userSchema)