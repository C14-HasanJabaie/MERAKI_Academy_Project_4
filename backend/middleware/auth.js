const jwt = require('jsonwebtoken');
// const { hashPassword, comparePasswords } = require('./bcrypt'); // Import functions from bcrypt.js
const bcrypt = require('./bcryptjs');

const User = require('./models/users'); // Adjust the path as necessary

// Secret key for JWT
const JWT_SECRET =process.env.SECRET  ; // Change this to a more secure key in production!

// Register new user
const registerUser = async (req, res) => {
    const { Fname,Lname, email, password } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ Fname,Lname, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user and return a JWT
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
         .puopulate()
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token 
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.Token = payload; // Attach user to the request
        next(); // Proceed to the next middleware/route handler
    });
};

module.exports = {
    registerUser,
    loginUser,
    authenticateToken
};