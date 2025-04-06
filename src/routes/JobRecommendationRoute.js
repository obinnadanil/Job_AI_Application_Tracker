const express = require("express");
const { getJobRecommendations } = require("../controller/JobRecommendationController");
const JwtUil = require("../middleware/JwtUtil");

const router = express.Router();

router.post("/recommendations", JwtUil.verifyToken, getJobRecommendations);

module.exports = router;
