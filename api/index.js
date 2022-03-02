import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

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

app.listen(8080, () => {
    console.log('server is running')
});