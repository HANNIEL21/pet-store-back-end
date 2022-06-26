const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dealer: {
        type: String,
        required: true,
        isVerified: {
            true: "verified",
            false: "not verified"
        }
    },
    location: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true,
        default: "kg"
    },
    stock: {
        type: String,
        required: true,
        default: "In Stock"
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('items', itemsSchema);