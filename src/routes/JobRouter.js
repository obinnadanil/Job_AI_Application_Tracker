const express = require('express');
const JobController = require('../controller/JobController');
const JwtUil = require('../middleware/JwtUtil');

const router = express.Router();

router.post('/',JwtUil.verifyToken,JobController.createJob);
router.patch('/:id', JwtUil.verifyToken, JobController.editJob);
router.get('/:id',JwtUil.verifyToken, JobController.getJobById);
router.get('/', JwtUil.verifyToken, JobController.getJobs);
router.delete('/:id', JobController.deleteJob);

module.exports = router;

