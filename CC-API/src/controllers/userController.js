/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { Users } = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find()
        res.send(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Users Gagal ditemukan'
        });
    }
}

const getUserById = async (req, res) => {
    const userId = req.body.userId;
    
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
            user,
            message: 'User details berhasil didapatkan',
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
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
            user: updatedUser,
            message: 'User details updated successfully!',
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'User gagal untuk diperbarui',
        });
    }
};

const uploadPictureImageByUserId = (req, res) => {}

module.exports = { 
    getAllUsers,
    getUserById,
    updateUserById,
    uploadPictureImageByUserId
 }