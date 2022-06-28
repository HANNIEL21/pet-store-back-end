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


app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to pet api_V1"
    })
})

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", users)
app.use("/api/vendors", vendors)



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})