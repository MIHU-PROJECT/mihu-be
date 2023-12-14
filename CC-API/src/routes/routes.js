const router = require('express').Router();
const authenticateToken = require('../middleware/AuthenticateToken');

const { 
    RecruiterLogin, 
    WorkerLogin, 
    RecruiterRegister, 
    WorkerRegister,
    Logout, 
    CheckAuth,
    // refreshToken, 
} = require('../controllers/authController')

const {
    getAllUsers,
    getUserById,
    updateUserById
} = require('../controllers/userController')

const { 
    getAllJobs,
    addJob,
    getJobById,
    updateJobById,
    deleteJobById,
    searchJobByName,
    searchJobByCategory
} = require('../controllers/jobController')


// Authenthication management
// router.post('/register', Register);

// router.post('/login', Login)

// Auth for Worker
router.post('/worker/register', WorkerRegister);
router.post('/worker/login', WorkerLogin);
// Auth for Recruiter
router.post('/recruiter/register', RecruiterRegister);
router.post('/recruiter/login', RecruiterLogin);

// router.get('/token', authenticateToken, refreshToken)
router.get('/check-auth', authenticateToken, CheckAuth)
// router.delete('/logout', Logout)

// User Management
router.get('/users', getAllUsers)
router.get('/users/:_id', getUserById)
router.put('/users/:_id', updateUserById)

// Jobs route management
router.post('/jobs', authenticateToken, addJob)
router.get('/jobs', authenticateToken, getAllJobs)
router.get('/jobs/:_id', authenticateToken, getJobById)
router.put('/jobs/:_id', authenticateToken, updateJobById)
router.delete('/jobs/:_id', authenticateToken, deleteJobById)
router.get('/jobs/search/name/:name', searchJobByName);
router.get('/jobs/search/category/:category', searchJobByCategory);

// Order route management

module.exports = router;
