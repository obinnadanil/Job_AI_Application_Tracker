const JobApplication = require('../model/JobApplication');

const JobController = {

    async createJob(req, res) {
        try {
            const job = await JobApplication.creatJobApllication(req);
            if (!job)
                return res.status(400).json({ success: false, message: ' failed to create job application' });

            return res.status(200).json({ success: true, message: 'job applied succesfully', job: job });

        }
        catch (error) {
          return  res.status(500).json({ success: false, error: error.stack, message: ' job application failed' });
        }
    },

    async getJobById(req, res) {
        try{
            const job = await JobApplication.getJobById(req);
        if (!job)
            return res.status(404).json({ success: false, message: ' failed to retrieve job application' });
        return res.status(200).json({ success: true, message: 'job retrieved succesfully' , job: job});
        }
        catch(error){
          return  res.status(500).json({ success: false, error: error.stack, message: ' job retrieval failed' });
        }
    },

    async getJobs(req, res) {
        try{
            const jobs = await JobApplication.getJobApplications(req);
        if (!jobs)
            return res.status(404).json({ success: false, message: ' failed to retrieve job applications' });
        return res.status(200).json({ success: true, message: 'job retrieved succesfully', jobs: jobs });
        }
        catch(error){
          return  res.status(500).json({ success: false, error: error.stack, message: ' job retrieval failed' });
        }
    },

    async editJob(req, res){
        try{
            const job = await JobApplication.editJobApllication(req);
            if(!job)
            return res.status(401).json({ success: false, message: ' failed to retrieve job application' });

            return res.status(200).json({ success: true, message: 'job retrieved succesfully', job: job });
            }
            catch(error){
                return res.status(500).json({ success: false, error: error.stack, message: ' failed to edit job' });
            }
        },
         
        async deleteJob(req, res){
            try{

            const message = await JobApplication.deleteJob(req);
            return res.status(200).json({ success: true, message: message });
            }
            catch(error){
              return  res.status(500).json({ success: false, error: error.stack, message: 'failed to delete job' });
            }

        }
    
}

module.exports = JobController;