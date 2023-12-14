const router = require('express').Router();
const authenticateToken = require('../middleware/AuthenticateToken');

const { 
    Login, 
    Register, 
    Logout, 
    refreshToken, 
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


// Mendefinisikan Route Auth
router.post('/register', Register);
router.post('/login', Login)
router.get('/token', authenticateToken, refreshToken)
router.delete('/logout', Logout)

// User Management
router.get('/users', getAllUsers)
router.get('/users/:_id', getUserById)
router.put('/users/:_id', updateUserById)

// Mendefinsikan Route Job
router.post('/jobs', authenticateToken, addJob)
router.get('/jobs', authenticateToken, getAllJobs)
router.get('/jobs/:_id', authenticateToken, getJobById)
router.put('/jobs/:_id', authenticateToken, updateJobById)
router.delete('/jobs/:_id', authenticateToken, deleteJobById)
router.get('/jobs/search/name/:name', searchJobByName);
router.get('/jobs/search/category/:category', searchJobByCategory);

// Order

// History


module.exports = router;
