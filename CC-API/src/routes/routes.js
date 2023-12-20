const router = require('express').Router();
const authenticateToken = require('../middleware/authenticateToken');

const {
  authenticateRecruiter, 
  authenticateWorker
} = require('../middleware/authenticateRole');

const { 
    RecruiterLogin, 
    WorkerLogin, 
    RecruiterRegister, 
    WorkerRegister,
    CheckAuth,
} = require('../controllers/authController')

const { GetAllCategory } = require('../controllers/categoryController')

const { PredictCategoryPost, PredictCategoryGet } = require('../controllers/predictController')

const { 
    GetAllActiveJobs,
    CreateJob,
} = require('../controllers/jobController')

const {
  CreateOrder,
  UpdateOrderCompleted,
  GetMyRecruiterOrderHistory,
  GetMyWorkerOrderHistory,
} = require('../controllers/orderController')

// Auth for Worker
router.post('/worker/register', WorkerRegister);
router.post('/worker/login', WorkerLogin);

// Auth for Recruiter
router.post('/recruiter/register', RecruiterRegister);
router.post('/recruiter/login', RecruiterLogin);

// Check authentication for user data
router.get('/check-auth', authenticateToken, CheckAuth)

// All Available Category
router.get('/categories', GetAllCategory)

// Predict sentences category
router.get('/predict', PredictCategoryGet)
router.post('/predict', authenticateToken, PredictCategoryPost)

// Jobs route management
router.post('/recruiter/job', authenticateToken, authenticateRecruiter, CreateJob)
router.get('/worker/job', authenticateToken, authenticateWorker, GetAllActiveJobs)

// Order route management
router.post('/worker/job/:_id', authenticateToken, authenticateWorker, CreateOrder)
router.get('/worker/order', authenticateToken, GetMyWorkerOrderHistory)
router.patch('/recruiter/order/:_id', authenticateToken, authenticateRecruiter, UpdateOrderCompleted)
router.get('/recruiter/order', authenticateToken, GetMyRecruiterOrderHistory)

module.exports = router;
