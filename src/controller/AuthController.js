const User = require('../model/User');
const JwtUil = require('../middleware/JwtUtil');
require('dotenv').config();


const AuthController = {

    async registerUser(req, res) {
        try {
            const data = req.body;
            const user = await User.registerUser(data);

            if (user)
                return res.status(200).json({ success: true, user: user, stack: 'user registered successfully' });
            if (!user)
                res.status(500).json({ success: false, error: error.message, stack: ' failed to register User' });
        }
        catch (error) {
            res.status(500).json({ success: false, error: error.stack, message: ' failed to register User' });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.query().findOne({ email });
            const isPasswordValid = await JwtUil.comparePassword(password, user.password);
            if (!user || !JwtUil.comparePassword(password, user.password))
                return res.status(400).json({ success: false, message: ' login failed' });
            else {
                const token = await JwtUil.generateToken(user);
                res.status(200).json({ success: true, token: token , message: 'user logged in successfully'});
            }

        }
        catch (error) {
            res.status(500).json({ success: false, error: error.stack, message: ' login failed' });
        }
    }

}

module.exports = AuthController;