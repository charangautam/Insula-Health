import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', (req, res) => {
    res.status(200).json('it works!')
})


export default router;