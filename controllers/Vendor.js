const Vendor = require("../models/Vendor");

// Creating a Vendor
exports.createVendor = async (req, res) => {
    const vendor = new Vendor({
        email: req.body.email,
        name: req.body.name,
        location: req.body.location,
        phoneno: req.body.phoneno
    })

    try {
        const newVendor = await vendor.save();
        res.status(201).json(newVendor);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Getting a Vendor
exports.getVendor = async (req, res) => {
    res.json(res.vendor)
}

// Getting all Vendors
exports.getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find()
        res.status(200).send(vendors)
    } catch (error) {

    }
}

// Updating a Vendor
exports.updateVendor = async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const phoneno = req.body.phoneno
    const location = req.body.location
    if (email != null || firstname != null || lastname != null || phoneno != null || address != null) {
        res.vendor.email = email
        res.vendor.name = name
        res.vendor.phoneno = phoneno
        res.vendor.location = location
    }
    try {
        const updatedVendor = await res.vendor.save()
        res.json(updatedVendor)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Deleting a Vendor
exports.deleteVendor = async (req, res) => {
    try {
        await res.vendor.remove();
        res.json({message: "Vendor Deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}