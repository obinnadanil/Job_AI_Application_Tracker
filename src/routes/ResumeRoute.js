const express = require("express");
const { getResumeFeedback } = require("../controller/ResumeFeedbackController");
const JwtUil = require("../middleware/JwtUtil");

const router = express.Router();

router.post("/feedback",JwtUil.verifyToken, getResumeFeedback);

module.exports = router;
