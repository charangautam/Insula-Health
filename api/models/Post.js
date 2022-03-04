import mongoose from 'mongoose';

// create new PostSchema structure
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    link: {
        type: String,
        unique: true
    }
}, { timestamps: true });

// create Post model from PostSchema
const Post = mongoose.model('post', PostSchema);

// export Post model
export default Post;