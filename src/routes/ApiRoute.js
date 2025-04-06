const express = require('express');
const router = express.Router();
const AuthRoute = require('./AuthRoute');
const JobRoute = require('./JobRouter');
const ResumeRoute = require('./ResumeRoute')
const jobRecommendationRoutes = require("./JobRecommendationRoute");


router.use('/user', AuthRoute);
router.use('/job', JobRoute);
router.use('/resume', ResumeRoute)
router.use("/jobs", jobRecommendationRoutes);

module.exports = router;