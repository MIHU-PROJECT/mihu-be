const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: String,
    },
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
    refreshToken: {
        type: String,
    },
});

const Users = mongoose.model('Users', userSchema);

module.exports = { Users }

