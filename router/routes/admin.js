const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("YOU AREN´T AN ADMIN");
});

router.get("/secret", (req, res) => {
  res.send("This is top secret!!!!");
});
router.get("/delete", (req, res) => {
  res.send("Deleting everything!!!!");
});

module.exports = router;
