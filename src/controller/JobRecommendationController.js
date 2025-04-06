const axios = require("axios");

const getJobRecommendations = async (req, res) => {
  try {
    const { skills } = req.body; 

    if (!skills || skills.trim().length === 0) {
      return res.status(400).json({ message: "Skills are required for job recommendations." });
    }

    const query = encodeURIComponent(skills);

    const response = await axios.get(`https://remotive.com/api/remote-jobs?search=${query}`);

    const jobs = response.data.jobs.map((job) => ({
      job_title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      url: job.url,
      type: job.job_type,
    }));

    res.json({ message: "Job Recommendations", jobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching job recommendations", error: error.message });
  }
};

module.exports = { getJobRecommendations };
