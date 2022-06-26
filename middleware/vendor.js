const Vendor = require("../models/Vendor")

async function getVendors(req, res, next) {
    let vendor
    try {
        vendor = await Vendor.findById(req.params.id)
        if (vendor == null) {
            return res.status(404).json({ message: "Invalid Vendor Id" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.vendor = vendor
    next()
}

module.exports = getVendors;