const { Jobs } = require('../models/jobModel')
const { Categories } = require('../models/categoryModel')
const { Recruiters } = require('../models/recruiterModel')

const GetAllActiveJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({ isActive: true })
        return res.status(200).json({
            error: false,
            message: "Success fetch all active jobs",
            data: {
                jobs
            }
        })
    } catch(error){
        return res.status(500).json({
            error: true,
            message: "Error getting all active jobs"
        })
    }
}

const CreateJob = async (req, res) => {
    try {
        const { name, description, categoryId, address, price } = req.body;
  
        const categoryObject = await Categories.findById(categoryId)
        const findRecruiterId = await Recruiters.findOne({}, { userId: req.user.userId })
  
        if(!categoryObject) {
            return res.status(400).json({
                message: 'Invalid category id',
            });
        }

        const newJob = await Jobs.create({
            name,
            categoryId: categoryObject._id,
            price,
            address,
            description,
            createdBy: findRecruiterId._id
        });
  
        return res.status(201).json({
            error: false,
            message: "Job added successfully",
            Jobs: newJob,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: true,
            message: 'Server error adding job',
        })
    }
}

//Not priority
// const GetJobById = async (req, res) => {
//     try {
//         const jobId = req.params._id
//         const job = await Jobs.findById(jobId)

//         if(!job) return res.status(404).json({
//             message: "Job not found!"
//         })

//         res.status(200).json({ 
//             error: false,
//             message: "Job fetched successfully",
//             job 
//         })
//     } catch(error){
//         res.status(500).json({ 
//             message: 'Failed fetch a Job'
//         });
//     }
// }

//Not priority
// const getAllJobs = async (req, res) => {
//     try {
//         const jobs = await Jobs.find()
//         return res.status(200).json({
//             error: false,
//             message: "Success fetch all jobs",
//             data: {
//                 jobs
//             }
//         })
//     } catch(error){
//         return res.status(500).json({
//             error: true,
//             message: "Error getting all jobs"
//         })
//     }
// }

//Not priority
// const updateJobById = async (req, res) => {
//     try {
//         const jobId = req.params._id
//         const { name, category, price, description } = req.body;

//         const categoryObject = await Category.findOne({ name: category })

//         const updatedJob = await Jobs.findByIdAndUpdate(
//             jobId,
//             { $set: { 
//                 name,
//                 category: categoryObject,
//                 price,
//                 description 
//             }},
//             { new: true }
//         )

//         if(!updatedJob) return res.status(404).json({
//             message: "Job not found"
//         })

//         return res.status(200).json({
//             error: false,
//             message: "Job updated successfully",
//             Jobs: updatedJob
//         })
//     } catch(error) {
//         return res.status(500).json({
//             error: true,
//             message: "Failed to update job"
//         })
//     }
// }

//Not priority
// const deleteJobById = async (req, res) => {
//     try {
//         const jobId = req.params._id;
//     
//         const deletedJob = await Jobs.findByIdAndDelete(jobId)
//     
//         if (!deletedJob) {
//           return res.status(404).json({ message: 'Job not found' })
//         }
//     
//         res.status(200).json({ 
//             error: false,
//             message: 'Job deleted successfully', 
//             Jobs: deletedJob 
//         })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//             error: true,
//             message: 'Failed to delete job' 
//         })
//     }
// }

//Not priority
// const searchJobByName = async (req, res) => {
//     try {
//         const name = req.params.name;
//         const jobs = await Jobs.find({ name: { $regex: new RegExp(name, 'i') } });

//         if (!jobs || jobs.length === 0) {
//             return res.status(404).json({
//                 error: true,
//                 message: `No jobs found with the name: ${name}`,
//             })
//         }

//         return res.status(200).json({
//             error: false,
//             message: `Jobs fetched successfully`,
//             jobs
//         })
//     } catch (error) {
//         return res.status(500).json({
//             error: true,
//             message: 'Error searching jobs by name',
//         });
//     }
// }

//Not priority
// const searchJobByCategory = async (req, res) => {
//     try {
//         const categoryName = req.params.category;
//         const category = await Category.findOne({ name: categoryName });

//         if (!category) {
//             return res.status(404).json({
//                 error: true,
//                 message: `Category is not valid`,
//             });
//         }

//         const jobs = await Jobs.find({ category: category._id });

//         return res.status(200).json({
//             error: false,
//             message: `Jobs with category, success to fetch`,
//             searchResult: {
//                 category,
//                 jobs
//             }
//         });
//     } catch (error) {
//         return res.status(500).json({
//             error: true,
//             message: 'Error searching jobs by category',
//         });
//     }
// }

module.exports = {
     GetAllActiveJobs,
     CreateJob,
     // GetJobById,
     // updateJobById,
     // deleteJobById,
     // searchJobByName,
     // searchJobByCategory
}
