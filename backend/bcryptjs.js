// bcrypt.js

const bcrypt = require('./bcrypt');

/**
 * Hash a password
 * @param {string} password - The password to hash
 * @returns {Promise<string>} - The hashed password
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    return await bcrypt.hash(password, salt); // Hash the password
};

/**
 * Compare a password with a hashed password
 * @param {string} password - The password to compare
 * @param {string} hashedPassword - The hashed password to compare against
 * @returns {Promise<boolean>} - Returns true if the passwords match, false otherwise
 */
const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePasswords
};