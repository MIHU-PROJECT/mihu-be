const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.send(users);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Users Gagal ditemukan'
        });
    }
}

const Register = async (req, res) => {
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

        return res.status(201).json({
            message: 'Register berhasil'
        });

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

const Login = async (req, res) => {
    try {
        const getUserData = await Users.findOne({
            email: req.body.email
        })

        if(!getUserData) {
            return res.status(404).json({
                message: 'Email tidak ditemukan'
            });
        }

        const passMatching = await bcrypt.compare(
            req.body.password, getUserData.password
        )
        
        if(!passMatching){
            return res.sendStatus(401).json({
                message: 'Password tidak cocok'
            })
        }

        const { 
            _id, 
            username, 
            email 
        } = getUserData;

        const accessToken = jwt.sign({ _id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15m'
        });

        const refreshToken = jwt.sign({_id, username, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '45m'
        })
        
        await Users.findByIdAndUpdate(
            _id, { refreshToken: refreshToken });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            domain: 'localhost',
            path: '/token',
        });
            
        return res.status(201).json({
            _id, username, email, accessToken, refreshToken
        });
    } catch(err) {
        return res.status(404).json({
            message: "Email tidak ditemukan"
        });
    }
}

const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({
            message: 'Token tidak tersedia!'
        });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await Users.findOne({
            _id: decoded._id,
            refreshToken: refreshToken
        });
        if (!user) {
            return res.status(403).json({
                message: 'Token tidak valid'
            });
        }

        const { _id, username, email } = user;
        const accessToken = jwt.sign({ _id, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15m'
        });

        return res.status(200).json({
            _id, username, email, accessToken
        });
    } catch (err) {
        console.log(err);
        return res.status(403).json({
            message: 'Token tidak valid'
        });
    }
}

const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken) return res.sendStatus(204)

    const user = await Users.findOneAndUpdate(
        { refreshToken: refreshToken },
        { $unset: { refreshToken: 1 } },
        { new: true }
    );

    if(!user) return res.sendStatus(204);

    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');

    return res.status(200).json({
        message: 'Logout berhasil'
    });
}

module.exports = {
    Register,
    Login,
    refreshToken,
    Logout,
    getAllUsers
 }