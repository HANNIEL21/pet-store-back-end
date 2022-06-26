const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required: true,
            default: "Vendor"
        },
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: false
        },
        phoneno: {
            type: String,
            required: true
        },
        dateCreated: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
)

module.exports = mongoose.model("vendor", vendorSchema);