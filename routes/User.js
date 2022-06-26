const express = require("express");
const userRouter = express.Router();
const User = require("../models/User")

// controllers
const createUserController = require("../controllers/User");
const getUserController = require("../controllers/User");
const getUsersController = require("../controllers/User");
const updatedUserController = require("../controllers/User");
const deleteUserController = require("../controllers/User");

// middleware
const getUser = require("../middleware/user");

/* ================= ======================= ======================= */ 

// creating a user
userRouter.post("/", createUserController.createUser);

// Getting all users
userRouter.get("/", getUsersController.getUsers);

// Getting one user
userRouter.get("/:id", getUser, getUserController.getUser);

// Updating a user
userRouter.patch("/:id", getUser, updatedUserController.updateUser)

// Deleting a user
userRouter.delete("/:id", getUser, deleteUserController.deleteUser)

module.exports = userRouter