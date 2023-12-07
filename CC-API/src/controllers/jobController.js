/* eslint-disable no-unused-vars */
const { Jobs } = require('../models/jobModel')
const { Category, seedCategories } = require('../models/categoryModel')

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find()
        return res.status(200).json(jobs)
    } catch(error){
        return res.status(500).json({
            message: "Error getting all jobs"
        })
    }
}

const getJobById = async (req, res) => {}

const addJob = async (req, res) => {}

const updateJobById = async (req, res) => {}

const deleteJobById = async (req, res) => {}

module.exports = {
     getAllJobs,
     getJobById,
     addJob,
     updateJobById,
     deleteJobById
}