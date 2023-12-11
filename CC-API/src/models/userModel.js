const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Worker', 'Recruiter'],
        default: 'Worker',
    },
    workerInfo: {
        type: mongoose.Scema.Types.ObjectId,
        ref: 'Worker',
    },
    RecruiterInfo: {
        type: mongoose.Scema.Types.ObjectId,
        ref: 'Recruiter',
    },
    refreshToken: {
        type: String,
    },
});

const Worker = mongoose.model('Worker', workerSchema);

const Users = mongoose.model('Users', userSchema);

module.exports = { Users, Worker }

