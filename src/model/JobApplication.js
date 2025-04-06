const { Model } = require('../config/db.config');

class JobApplication extends Model {
    static get tableName() {
        return "job_applications";
    }

    static get relationMappings() {
        const User = require("./User");
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "job_applications.user_id",
                    to: "users.id",
                },
            },
        };
    }

    static async creatJobApllication(req) {
        try {
            const data = req.body;
            const job = await JobApplication.query().insert({
                job_title: data.job_title,
                company: data.company,
                status: data.status,
                applied_date: data.applied_date,
                notes: data.notes,
                user_id: req.user.id,
            });

            return job;
        }
        catch (error) {
            throw error;
        }
    }

    static async getJobApplications(req) {
        try {
            const jobs = await JobApplication.query().where("user_id", req.user.id);
            return jobs;
        }
        catch (error) {
            throw error;
        }
    }

    static async getJobById(req) {
        try {
            const job = await JobApplication.query().findById(req.params.id);
            if (!job || job.user_id !== req.user.id) {
                return { message: "Job not found" };
            }
            return job;
        }
        catch (error) {
            throw error;
        }
    }

    static async editJobApllication(req) {
        try {
            const data = req.body;
            const job = await JobApplication.query().findById(req.params.id);
            
            const updatedJob = await JobApplication.query().patchAndFetchById(req.params.id, {
                job_title: data.job_title,
                company: data.company,
                status: data.status,
                applied_date: data.applied_date,
                notes: data.notes,
                user_id: req.user.id,
            });

            return updatedJob;
        }
        catch (error) {
            throw error;
        }
    }

    static async deleteJob(req) {
        try {
         
            const job = await JobApplication.query().findById(req.params.id);
            if (!job) {
                return { message: "Job not found" };
            }
            await JobApplication.query().deleteById(req.params.id);
            return { message: "Job deleted successfully" };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = JobApplication;
