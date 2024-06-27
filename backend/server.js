// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

MONGO_URI = "mongodb+srv://substring:rGgLXTl02U2znds5@cluster0.2tu0pso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to MongoDB!");
});

app.use("/api", eventRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
