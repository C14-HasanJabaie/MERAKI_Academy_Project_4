
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()
mongoose.connect(process.env.DATABASE).then(() => {
      console.log("DB Ready To Use");
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });