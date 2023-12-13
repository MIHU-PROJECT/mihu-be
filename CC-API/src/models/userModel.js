const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    specialization: {
        type: String,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker',
    },
    RecruiterInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruiter',
    },
    refreshToken: {
        type: String,
    },
});

const Worker = mongoose.model('Worker', workerSchema);

const Users = mongoose.model('Users', userSchema);

module.exports = { Users, Worker }

