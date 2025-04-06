const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

class JwtUil {
    static async hashedPassword(password) {
        return bcrypt.hash(password, 10);
    }

    static async comparePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }

    static async generateToken(user) {
        return jwt.sign({
            id: user.id, email: user.email
        },
            process.env.JWT_SECRET,
            { expiresIn: '1d' });

    }

    static async verifyToken(req, res, next) {
        const token = req.header("Authorization")?.replace("Bearer ", "");;
        if (!token) return res.status(401).json({ message: "Access Denied" });
        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid Token" });
        }
    }
}

module.exports = JwtUil;