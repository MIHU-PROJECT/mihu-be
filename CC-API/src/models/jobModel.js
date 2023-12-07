const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobId: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    jobImage: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
}, { timestamps: true })

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = { Jobs }