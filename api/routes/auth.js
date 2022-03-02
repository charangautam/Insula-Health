import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const checkUsername = await User.findOne({ username: req.body.username })
        if (checkUsername) {
            res.status(409).json('user with this username already exists')
            return
        }

        // hash password
        req.body.password = bcrypt.hash(req.body.password, 10)

        const newUser = new User(req.body)
        const user = newUser.save()

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', (req, res) => {

})

export default router;