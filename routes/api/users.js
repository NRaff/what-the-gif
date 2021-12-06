const express = require("express");
const router = express.Router();

// * Users Route
router.get("/", (req, res) => res.json({
  message: "This is the users route"
}))

module.exports = router;