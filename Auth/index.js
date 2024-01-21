const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://127.0.0.1:27017/authDemo")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to mongo");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({extended: true}));

app.get("/secret", (req, res) => {
  res.send("Secreto");
});

app.get("/register", (req, res) => {
  res.render("Register");
});

app.post("/register", async (req, res) => {
  const {password, username} = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const {password, username} = req.body;
  const user = await User.findOne({username});
  const validUser = await bcrypt.compare(password, user.password);
  if (validUser) {
    res.send("Great!");
  } else {
    res.send("Try again");
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
