const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/mern_form", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => console.log("Connected to MongoDB"));
db.on("error", (err) => console.log("MongoDB connection error:", err));


app.use("/forms", formRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));