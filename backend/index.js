const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => {
        console.log(`Mongo DB : ${res.connections[0].host}`);
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));

app.use("/", (req, res) => {
    res.status(200).json({ message: "Employee Management System is running!" });
});
