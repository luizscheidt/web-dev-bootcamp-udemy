const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/secret", (req, res) => {
  res.send("Secreto");
});

app.get("/register", (req, res) => {
  res.render("Register");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
