const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models/userModel');
const { Workers } = require('../models/workerModel');
const { Recruiters } = require('../models/recruiterModel');

const RecruiterRegister = async (req, res) => {
  return await Register(req, res, 'recruiter');
}

const RecruiterLogin = async (req, res) => {
  return await Login(req, res, 'recruiter');
}

const WorkerRegister = async (req, res) => {
  return await Register(req, res, 'worker');
}

const WorkerLogin = async (req, res) => {
  return await Login(req, res, 'worker');
}

const Register = async (req, res, role) => {
    const { username, password, email } = req.body
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        const dataExist = await Users.findOne({
            $or: [{ username: username }, { email: email }]
        });
        if(dataExist) {
            return res.status(409).json({
                message: dataExist.username === username ? 
                'Username sudah ada sebelumnya!' : 'Email sudah ada sebelumnya!'
            });
        }

        const newUser = new Users({
            username: username,
            email: email,
            password: hashPassword
        });

        await newUser.save();

        if (role === 'recruiter') {
          const newRecruiter = new Recruiters({
            userId: newUser._id
          });

          await newRecruiter.save();

        } else if (role === 'worker') {
          const newWorker = new Workers({
            userId: newUser._id
          });

          await newWorker.save();

        } else {
          return res.status(500).json({
              message: 'Register failed with unknown role on server'
          });
        }

        return res.status(201).json({
            error: false,
            message: 'Register Successfull'
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Register failed'
        });
    }
}

const Login = async (req, res, role) => {
    try {
        const getUserData = await Users.findOne({
            email: { $regex: new RegExp(req.body.email, 'i') }
        });

        if (!getUserData) {
            return res.status(404).json({
                error: true,
                message: 'Email tidak ditemukan'
            });
        }

        const passMatching = await bcrypt.compare(req.body.password, getUserData.password);

        if (!passMatching) {
            return res.status(401).json({
                error: true,
                message: 'Password tidak cocok'
            });
        }

        const { _id, username, email } = getUserData;

        if (role === 'recruiter') {
          const getRecruiterData = await Recruiters.findOne({
            userId: _id
          });

          if (!getRecruiterData) {
            return res.status(404).json({
              error: true,
              message: 'Not a recruiter'
            });
          }

        } else if (role === 'worker') {
          const getWorkerData = await Workers.findOne({
            userId: _id
          });

          if (!getWorkerData) {
            return res.status(404).json({
              error: true,
              message: 'Not a worker'
            });
          }
        } else {
          return res.status(500).json({
              message: 'Login failed with unknown role on server'
          });
        }

        const accessToken = jwt.sign({ userId: _id, role }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1y'
        })
            
        return res.status(201).json({
            error: false,
            message: 'Success',
            data: {
              userId: _id, username, email, accessToken, role
            }
        })
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: 'Login failed'
        })
    }
}

const CheckAuth = async (req, res) => {
  const user = await Users.findById(req.user.userId);

  return res.status(200).json({
    error: false,
    message: 'Auth success',
    data: {
      userId: req.user.userId,
      username: user.username,
      email: user.email,
      role: req.user.role
    }
  });
};

module.exports = {
    RecruiterRegister,
    WorkerRegister,
    RecruiterLogin,
    WorkerLogin,
    CheckAuth
}