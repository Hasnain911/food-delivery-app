const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const User = require("../models/Users");

router.post(
  "/newuser",
  body("email", "Invalid Email").isEmail(),
  body("name", "Your name must contain at least 5 characters").isLength({
    min: 5,
  }),
  body("password", "Your password must contain at least 5 characters").isLength(
    { min: 5 }
  ),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email", "Invalid Email").isEmail(),
  body("password", "Your password must contain at least 5 characters").isLength(
    { min: 5 }
  ),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Try logging with valid email address" });
      }
      if (req.body.password !== user.password) {
        return res
          .status(400)
          .json({ errors: "You typed an incorrect password" });
      }
     return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
