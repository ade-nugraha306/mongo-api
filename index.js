const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const noteRouter = require("./routers/note.router");

app.use(cors());
app.use(express.json());

// konek mongoDB
mongoose
  .connect(
    "mongodb+srv://nicky:inipassword@cluster-coba.dxkvtqg.mongodb.net/coba?retryWrites=true&w=majority&appName=cluster-coba"
  )
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
