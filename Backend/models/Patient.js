const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    contact: String,
    appointments: [{
        date: String,
        reason: String
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);