// models/serviceModel.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    details: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0
    }
 
});

serviceSchema.pre('save', function(next) {
    this.updatedOn = Date.now();
    next();
});

const ServiceModel = mongoose.model('Service', serviceSchema);

module.exports = ServiceModel;