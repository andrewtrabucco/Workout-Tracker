// Variables
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

// Use Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Require Routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

// Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
