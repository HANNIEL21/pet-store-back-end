const express = require("express");
const vendorRouter = express.Router();
const Vendor = require("../models/Vendor")

// Controller
const createVendorController = require("../controllers/Vendor");
const getVendorController = require("../controllers/Vendor");
const getVendorsController = require("../controllers/Vendor");
const updateVendorController = require("../controllers/Vendor");
const deleteVendorController = require("../controllers/Vendor");

// MiddleWare
const getVendors = require("../middleware/vendor")


/* =========================== ================================= ================== */ 


// creating a vendor
vendorRouter.post("/", createVendorController.createVendor);

// Getting all vendors
vendorRouter.get("/", getVendorsController.getVendors);

// Getting one vendor
vendorRouter.get("/:id", getVendors, getVendorController.getVendor);

// Updating a vendor
vendorRouter.patch("/:id", getVendors, updateVendorController.updateVendor);

// Deleting a vendor
vendorRouter.delete("/:id", getVendors, deleteVendorController.deleteVendor);



module.exports = vendorRouter