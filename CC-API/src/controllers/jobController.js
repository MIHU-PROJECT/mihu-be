const { Users } = require('../models/userModel');
const { Category, seedCategories } = require('../models/categoryModel')

const getAllJobs = async (req, res) => {}

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

// router.route('/jobs').get(jobController.getAllJobs)
// router.route('/jobs/:id').get(jobController.getJobById)
// router.route('/jobs/').post(jobController.createJob)
// router.route('/jobs/:id').put(jobController.updateJob)
// router.route('/jobs/:id').delete(jobController.deleteJob)