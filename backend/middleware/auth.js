
const jwt = require("jsonwebtoken")

// / Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.SECRET, (err, payload) => {
        if (err) {
            return res.status(403); // Forbidden
        }
        req.token = payload; // Attach user to the request
        next(); // Proceed to the next middleware/route handler
    });
};

module.exports = authenticateToken












