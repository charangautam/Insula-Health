import express from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';

// verify jwt token for user actions
import { verifyToken } from './auth.js';

// initialize posts router 
const postsRouter = express.Router();

// create a post [admin feature]
postsRouter.post('/', verifyToken, async (req, res) => {
    try {
        // check if user is admin & create a post
        if (req.user.isAdmin) {
            const newPost = new Post(req.body)
            const post = await newPost.save()

            res.status(200).json(post)
        } else {
            res.status(403).json('You cannot create a post')
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

export default postsRouter;