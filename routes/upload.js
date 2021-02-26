const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

const router = require("express").Router();

const limiter = rateLimit({
  // Logic
});

const speedLimiter = slowDown({
  // Logic
});

const uploadController = require("../controllers/upload");

// route logic

module.exports = router;
