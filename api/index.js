import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// routes
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';

// initialize app
const app = express();
config();

// connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('connected to MongoDB'))
    .catch(err => console.log(err));

// middleware
app.use(cors());
app.use(express.json());
// use routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

// connect to server
app.listen(6000, () => {
    console.log('server is running')
});