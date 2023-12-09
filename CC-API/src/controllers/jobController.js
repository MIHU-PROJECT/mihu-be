/* eslint-disable no-unused-vars */
const { Jobs } = require('../models/jobModel')
const { Category, seedCategories } = require('../models/categoryModel')
const { Users } = require('../models/userModel')

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

const getJobById = async (req, res) => {
    try {
        const jobId = req.params._id
        const job = await Jobs.findById(jobId)

        if(!job) return res.status(404).json({
            message: "Job not found!"
        })

        res.status(200).json({ job })
    } catch(error){
        res.status(500).json({ 
            message: 'Failed fetch a Job'
        });
    }
}

const addJob = async (req, res) => {
    try {
        const { title, category, price, description } = req.body;
  
        const categoryObject = await Category.findOne({ name: category })
        const findUserId = await Users.findOne({}, { _id: req.userId })
  
        if(!categoryObject) {
            return res.status(400).json({
                message: 'Invalid category',
            });
        }

        const newJob = await Jobs.create({
            title,
            category: categoryObject._id,
            price,
            description,
            createdBy: findUserId
        });
  
        return res.status(201).json({
            message: 'Job added successfully',
            Jobs: newJob,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error adding job',
        })
    }
}

const updateJobById = async (req, res) => {}

const deleteJobById = async (req, res) => {}

module.exports = {
     getAllJobs,
     getJobById,
     addJob,
     updateJobById,
     deleteJobById
}