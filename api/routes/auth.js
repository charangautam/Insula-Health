import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
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

router.post('/login', async (req, res) => {
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

        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;