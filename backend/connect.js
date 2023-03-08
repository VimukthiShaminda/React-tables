/*require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const port = 5000;

// enable CORS middleware
app.use(cors());

// parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// define a schema for the data
const dataSchema = new mongoose.Schema({
  email: String,
  question: String,
  answer: String,
});

// create a model for the data
const Data = mongoose.model("Data", dataSchema);

// define a route to fetch all data
app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// define a route to update data by email
app.post("/api/data/update", async (req, res) => {
  const { email, answer } = req.body;
  try {
    const result = await Data.findOneAndUpdate({ email }, { answer });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// start the server
app.listen(process.env.PORT2, () => {
  console.log(`Server running on port ${port}`);
});
*/
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://vimukthi:1234pwd@formdata.5jjufbv.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Data routes
const dataRoutes = require("./routes/formRoutes");
app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
