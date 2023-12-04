const router = require('express').Router();
const authenticateToken = require('../middleware/AuthenticateToken');

const { 
    Login, 
    Register, 
    Logout, 
    refreshToken, 
    getAllUsers 
} = require('../controllers/authController')

// Mendefinisikan Route Auth
router.post('/register', Register);
router.post('/login', Login)
router.get('/token', authenticateToken, refreshToken)
router.delete('/logout', Logout)

// User Management
router.get('/users', getAllUsers)


// Mendefinsikan Route Job
// router.route('/jobs').get(jobController.getAllJobs)
// router.route('/jobs/:id').get(jobController.getJobById)
// router.route('/jobs/').post(jobController.createJob)
// router.route('/jobs/:id').put(jobController.updateJob)
// router.route('/jobs/:id').delete(jobController.deleteJob)

// JobByKategori?

module.exports = router;
