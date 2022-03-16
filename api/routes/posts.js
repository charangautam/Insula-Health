import express from 'express';
import Post from '../models/Post.js';

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
            res.status(403).json('You cannot create posts')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// edit a post [admin feature]
postsRouter.put('/:postId', verifyToken, async (req, res) => {
    try {
        // check if admin user is trying to edit account
        if (req.user.isAdmin) {
            // update all fields
            const post = await Post.findByIdAndUpdate(
                req.params.postId,
                { $set: req.body },
                { new: true }
            )
            res.status(200).json(post)
        } else {
            res.status(403).json('You cannot edit posts')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// delete a post [admin feature]
postsRouter.delete('/:postId', verifyToken, async (req, res) => {
    try {
        // check if admin user is trying to delete account
        if (req.user.isAdmin) {
            await Post.findByIdAndDelete(req.params.postId)
            res.status(200).json('Successfully deleted post')
        } else {
            res.status(403).json('You cannot delete posts')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// get all posts
postsRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

// add user likes to a post
postsRouter.post('/like/:postId', verifyToken, async (req, res) => {
    try {
        // find post and add userId to likes array
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            { $addToSet: { likes: req.user.id } },
            { new: true }
        )
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

postsRouter.delete('/unlike/:postId', verifyToken, async (req, res) => {
    try {
        // find post and pull userId from likes array
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            { $pull: { likes: req.user.id } },
            { new: true }
        )
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

export default postsRouter;