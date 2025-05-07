require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const noteRouter = require("./routers/note.router");
const dbUrl = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

// konek mongoDB
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Error!");
  });

app.use("/note", noteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

module.exports = app;
