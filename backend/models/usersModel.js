
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    Fname: {
        type: String,
        trim: true
    },
  
    Lname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    
        phoneNumber : {
            type: Number ,
            minlength: 8,
            maxlength : 14,
            
    },
    role : {type : mongoose.Schema.Types.ObjectId , ref:"Role"}

  

});

// Middleware to hash the password before saving the user
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare password need at login 
// userSchema.methods.comparePassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;