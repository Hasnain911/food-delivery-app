const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "secretKey";
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
    const salt = await bcrypt.genSalt(5);
    let securePassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
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
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with valid email address" });
      }
      const passwordComparison = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!passwordComparison) {
        return res
          .status(400)
          .json({ errors: "You typed an incorrect password" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, secretKey);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
