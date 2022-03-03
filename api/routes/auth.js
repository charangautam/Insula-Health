import express, { application } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    try {
        const checkUser = await User.findOne({ username: req.body.username })

        if (checkUser) {
            res.status(200).json("User already exists")
            return
        }

        req.body.password = await bcrypt.hash(req.body.password, 10)

        const newUser = new User(req.body)
        const user = await newUser.save()

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

authRouter.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.status(400).json('An user with this username does not exist')
            return
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            res.status(400).json('Incorrect password entered')
            return
        }

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            accessToken
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).json('Token is not valid')
            }

            req.user = user
            next()
        })
    } else {
        res.status(401).json('You are not authenticated')
    }
}

authRouter.delete('/:userId', verifyToken, async (req, res) => {
    try {
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).json("Sucessfully deleted user")
        } else {
            res.status(403).json('You cannot delete this user')
        }
    } catch (error) {

    }
})

export default authRouter;