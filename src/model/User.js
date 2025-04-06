const { Model } = require('../config/db.config');
const JwtUil = require('../middleware/JwtUtil');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get relationMappings() {
        const jobApplications = require('./JobApplication');
        return {
            jobApplications: {
                relation: Model.HasManyRelation,
                modelClass: jobApplications,
                join: {
                    from: 'users.id',
                    to: 'job_applications.user_id'
                }
            }

        }
    }

    static async registerUser(data) {
        try {
            const hashedPassword = await JwtUil.hashedPassword(data.password);
            const existingUser = await User.query().findOne({ email: data.email });
            if (existingUser) {
                return { error: 'User already exists' };
              }
                const savedUser = await User.query().insert(
                    {
                        name: data.name,
                        email: data.email,
                        password: hashedPassword
                    }
                );
                return savedUser;
           
        }
        catch (error) {
            throw error;
        }
    }


}

module.exports = User;