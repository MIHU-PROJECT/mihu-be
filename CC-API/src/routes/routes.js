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

// Jobs route management
router.post('/recruiter/job', authenticateToken, authenticateRecruiter, CreateJob)
router.get('/worker/job', authenticateToken, authenticateWorker, GetAllActiveJobs)

// Order route management
router.post('/worker/job/:_id', authenticateToken, authenticateWorker, CreateOrder)
router.get('/worker/order', authenticateToken, GetMyWorkerOrderHistory)
router.patch('/recruiter/order/:_id', authenticateToken, authenticateRecruiter, UpdateOrderCompleted)
router.get('/recruiter/order', authenticateToken, GetMyRecruiterOrderHistory)

// Users route management
// router.get('/users', getAllUsers)
// router.get('/users/worker/:_id', getAllUsers)
// router.get('/users/recruiter/:_id', getAllUsers)
// router.put('/users/:_id', updateUserById)

// router.get('/job/:_id', authenticateToken, GetJobById)
// router.put('/jobs/:_id', authenticateToken, updateJobById)
// router.delete('/jobs/:_id', authenticateToken, deleteJobById)
// router.get('/jobs/search/name/:name', searchJobByName);
// router.get('/jobs/search/category/:category', searchJobByCategory);

module.exports = router;
