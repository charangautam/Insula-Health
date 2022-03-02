import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// routes
import router from './routes/auth.js'

const app = express();
config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// middleware
app.use(cors());
app.use(express.json());
// use routes
app.use('/api/auth', router)

app.listen(6000, () => {
    console.log('server is running')
});