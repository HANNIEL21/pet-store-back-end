const User = require("../models/User");

// Creating a user
exports.createUser = async (req, res) => {
    const user = new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phoneno: req.body.phoneno,
        address: req.body.address
    })

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Getting one user
exports.getUser = (req, res) => {
    res.json(res.user)
}

// Getting all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Updating a user
exports.updateUser = async (req, res) => {
    const email = req.body.email
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneno = req.body.phoneno
    const address = req.body.address
    if (email != null || firstname != null || lastname != null || phoneno != null || address != null) {
        res.user.email = email
        res.user.firstname = firstname
        res.user.lastname = lastname
        res.user.phoneno = phoneno
        res.user.address = address
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Deleting a user
exports.deleteUser = async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: "USer Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}