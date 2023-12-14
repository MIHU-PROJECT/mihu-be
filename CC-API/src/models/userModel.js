const mongoose = require('mongoose')

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

const Users = mongoose.model('Users', userSchema);

module.exports = { Users }

