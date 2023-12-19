const { Categories } = require("../models/categoryModel");
const { Jobs } = require("../models/jobModel");
const { Orders } = require("../models/orderModel");
const { Workers } = require("../models/workerModel");
const { Recruiters } = require("../models/recruiterModel");
const { Users } = require("../models/userModel");

const CreateOrder = async (req, res) => {
  try {
    const jobId = req.params._id;

    const job = await Jobs.findById(jobId);
    const findWorkerId = await Workers.findOne({ userId: req.user.userId })

    if (!job) {
      return res.status(400).json({
        error: true,
        message: 'Invalid job id',
      })
    }

    if (!job.isActive) {
      return res.status(400).json({
        error: true,
        message: 'Job already taken',
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

UpdateOrderCompleted = async (req, res) => {
  try {
    const orderId = req.params._id;

    const order = await Orders.findById(orderId);

    if (!order) {
      return res.status(400).json({
        error: true,
        message: 'Invalid order id',
      })
    }

    if (order.isCompleted) {
      return res.status(400).json({
        error: true,
        message: 'Order already completed',
      })
    }

    const job = await Jobs.findById(order.jobId);
    const recruiter = await Recruiters.findOne({ userId: req.user.userId })

    if (!job.createdBy.equals(recruiter._id)) {
      return res.status(401).json({
        error: true,
        message: 'Not authorized to complete this order'
      })
    }

    order.isCompleted = true;
    order.save();

    return res.status(200).json({
        error: false,
        message: 'Success completing order',
        data: {
          order: order
        }
    })

  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error: true,
          message: 'Server error completing order',
      })
  }
}

const GetMyRecruiterOrderHistory = async (req, res) => {
  //{name: string, category: string, description: string,
  //price: number, worker: string, status: [waiting, ongoing, completed]
  //orderId: string (if status ongoing or completed)
  //createdAt (always use job): Date, updatedAt (use order if have): Date}[]
  recruiterOrderHistory = []

  recruiter = await Recruiters.findOne({userId: req.user.userId})

  jobs = await Jobs.find({createdBy: recruiter._id}).sort({ createdAt: -1 }).exec()

  for (let i = 0; i < jobs.length; i++) {
    category = await Categories.findById(jobs[i].categoryId)

    if (!jobs[i].isActive) {
      order = await Orders.findOne({jobId: jobs[i]._id})
      worker = await Workers.findById(order.workerId)
      user = await Users.findById(worker.userId)

      if (order.isCompleted) {
        orderStatus = 'completed'
      } else {
        orderStatus = 'ongoing'
      }

      recruiterOrderHistory.push({
        name: jobs[i].name,
        category: category.name,
        description: jobs[i].description,
        price: jobs[i].price,
        status: orderStatus,
        orderId: order._id,
        worker: user.username,
        createdAt: jobs[i].createdAt,
        updatedAt: order.updatedAt
      })

    } else {
      recruiterOrderHistory.push({
        name: jobs[i].name,
        category: category.name,
        description: jobs[i].description,
        price: jobs[i].price,
        status: 'waiting',
        createdAt: jobs[i].createdAt,
        updatedAt: jobs[i].updatedAt
      })

    }
  }

  return res.status(200).json({
    error: false,
    message: 'Success getting order history',
    data: {
    orders: recruiterOrderHistory
    }
  })
}

const GetMyWorkerOrderHistory = async (req, res) => {
  orderHistory = []

  worker = await Workers.findOne({userId: req.user.userId})

  orders = await Orders.find({workerId: worker._id}).sort({ createdAt: -1 }).exec()

  for (let i = 0; i < orders.length; i++) {
    job = await Jobs.findById(orders[i].jobId)
    category = await Categories.findById(job.categoryId)
    recruiter = await Recruiters.findById(job.createdBy)
    user = await Users.findById(recruiter.userId)

    if (orders[i].isCompleted) {
      orderStatus = 'completed'
    } else {
      orderStatus = 'ongoing'
    }

    orderHistory.push({
      name: job.name,
      category: category.name,
      description: job.description,
      price: job.price,
      status: orderStatus,
      recruiter: user.username,
      createdAt: orders[i].createdAt,
      updatedAt: orders[i].updatedAt
    })
  }

  return res.status(200).json({
    error: false,
    message: 'Success getting order history',
    data: {
      orders: orderHistory
    }
  })
}

module.exports = {
  CreateOrder,
  UpdateOrderCompleted,
  GetMyRecruiterOrderHistory,
  GetMyWorkerOrderHistory,
}
