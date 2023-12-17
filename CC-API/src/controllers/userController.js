const bcrypt = require('bcrypt');
const { Users } = require('../models/userModel');
const { Workers } = require('../models/workerModel');
const { Recruiters } = require('../models/recruiterModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find()

        const usersWithRole = await Promise.all(users.map( async (user) => {
            const worker = await Workers.findOne({ userId: user._id })
            const recruiter = await Recruiters.findOne({ userId: user._id })

            if(worker){
                return {
                    ...user._doc,
                    role: 'worker'
                }
            } else if(recruiter) {
                return {
                    ...user._doc,
                    role: 'recruiter',
                }
            } else {
                return { message: "User not yet selected a role" }
            }
        }))

        res.send({
            error: false,
            message: "Users fetched successfully",
            dataUsers : {
                users : usersWithRole,
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: true,
            message: 'Users Gagal ditemukan'
        });
    }
}

const getUserById = async (req, res) => {
    const userId = req.params._id;
    
    try {
        const user = await Users.findOne({ _id: userId }, {
            password: 0,
            refreshToken: 0,
        })

        if (!user) {
            return res.status(404).json({
                message: 'User tidak ditemukan!'
            })
        }

        return res.status(200).json({
            error: false,
            message: 'User details berhasil didapatkan',
            user
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: true,
            message: 'Gagal mendapatkan User!'
        })
    }
}

const updateUserById = async (req, res) => {
    const userId = req.params._id;
    const { username, email, password, address } = req.body;

    try {
        const user = await Users.findByIdAndUpdate(
            userId,
            {
                $set: {
                    username: username,
                    email: email,
                    password: await bcrypt.hash(password, await bcrypt.genSalt()),
                    address: address,
                },
            },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        const updatedUser = { 
            _id: user._id, 
            username: user.username,
            email: user.email, 
            address: user.address 
        };

        return res.status(200).json({
            error: false,
            message: 'User details updated successfully!',
            user: updatedUser
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: 'User gagal untuk diperbarui',
        });
    }
}

module.exports = { 
    getAllUsers,
    getUserById,
    updateUserById
 }