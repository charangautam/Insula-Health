import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// initialize router
const authRouter = express.Router();

// register user
authRouter.post('/register', async (req, res) => {
    try {
        // check if user with username already exists
        const checkUser = await User.findOne({ username: req.body.username })
        if (checkUser) {
            res.status(200).json("Username already exists")
            return
        }

        // hash password before storing on DB
        req.body.password = await bcrypt.hash(req.body.password, 10)

        // create & store new user in DB
        const newUser = new User(req.body)
        const user = await newUser.save()

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// login user
authRouter.post('/login', async (req, res) => {
    try {
        // check if incorrect username entered
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.status(400).json('An user with this username does not exist')
            return
        }

        // check if password matches hashed password on DB
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            res.status(400).json('Incorrect password entered')
            return
        }

        // create JWT token
        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '3d' }
        )
        // send JWT token with necessary user info
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// verify token function for user actions
export const verifyToken = (req, res, next) => {
    // check if there is token
    const authHeader = req.headers.authorization
    if (authHeader) {
        // get the token
        const token = authHeader.split(' ')[1]

        // check if the token is correct
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).json('Token is not valid')
            }

            req.user = user
            next()
        })
    } else {
        console.log(error)
        res.status(401).json('You are not authenticated')
    }
}

// delete user if token is verified
authRouter.delete('/:userId', verifyToken, async (req, res) => {
    try {
        // check if correct user is trying to delete account
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).json("Sucessfully deleted user")
        } else {
            res.status(403).json('You cannot delete this user')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// edit user details if token is verified
authRouter.put('/:userId', verifyToken, async (req, res) => {
    try {
        // check if correct user is trying to edit account
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            // check if new password is entered to hash or not
            const checkUser = await User.findById(req.params.userId)
            if (checkUser.password !== req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10)
            }

            // update all fields
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $set: req.body },
                { new: true }
            )
            res.status(200).json(user)
        } else {
            res.status(403).json('You cannot update this user')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// get a user 
authRouter.get('/:userId', verifyToken, async (req, res) => {
    try {
        // check if correct user is trying to reach account
        if (req.user.id === req.params.userId || req.user.isAdmin) {
            const user = await User.findById(req.params.userId)
            res.status(200).json(user)
        } else {
            res.status(403).json('You cannot get this user')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// get all users [admin feature]
authRouter.get('/users', verifyToken, async (req, res) => {
    try {
        // check if user is admin & send all users
        if (req.user.isAdmin) {
            const users = await User.find()
            res.status(200).json(users)
        } else {
            res.status(403).json('You do not have access to this feature')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// export auth routes
export default authRouter;