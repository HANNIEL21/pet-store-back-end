const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");
const JWT = require("jsonwebtoken");


// Creating a user
exports.createUser = async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json({ message: "User Already Exists" })

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNo: req.body.phoneNo,
        address: req.body.address
    })

    try {
        const newUser = await user.save();
        res.status(201).json({ user: newUser._id });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// login a user
exports.LoginUser = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({ message: "Invalid credentials" });

    const token = JWT.sign({_id : user._id}, process.env.TOKEN_SECRET);
    res.header("auth-token", token).json({"User Token" : token})
}

// Getting one user
exports.getUser = (req, res) => {
    res.json(res.user)
}

// Getting all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users: users });
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