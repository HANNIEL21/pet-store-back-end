const express = require('express');
const cors = require('cors');
const connectDB = require("./config/DBconfig");
const dotenv = require('dotenv').config();

const users = require("./routes/User");
const vendors = require("./routes/Vendor");

// initialize express & dotenv
const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB;


app.get("/", (req, res) => {
    res.send("hello world")
})

// Middleware
app.use(cors());
app.use(express.json());
app.use("/users", users)
app.use("/vendors", vendors)



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})