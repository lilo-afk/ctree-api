const express = require("express");
const router = express.Router();

// Health check index endpoint

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    status: "ONLINE",
    message: "API is running successfully",
  });
});

module.exports = router;
