const { Jobs } = require("../models/jobModel");
const { Orders } = require("../models/orderModel");
const { Workers } = require("../models/workerModel");

const CreateOrder = async (req, res) => {
  try {
    const jobId = req.params._id;

    const job = await Jobs.findById(jobId);
    const findWorkerId = await Workers.findOne({}, { userId: req.user.userId })

    if (!job) {
      return res.status(400).json({
        error: true,
        message: 'Invalid job id',
      })
    }

    const existingOrder = await Orders.findOne({ jobId: jobId })

    if (existingOrder) {
      return res.status(400).json({
        error: true,
        message: 'Order already existed',
      })
    }

    const newOrder = await Orders.create({
      jobId: jobId,
      workerId: findWorkerId._id,
    })
    newOrder.save();

    job.isActive = false;
    job.save();

    return res.status(201).json({
        error: false,
        message: 'Success taking job',
        data: {
          order: newOrder
        }
    })
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error: true,
          message: 'Server error taking job',
      })
  }
}

module.exports = {
  CreateOrder,
}
