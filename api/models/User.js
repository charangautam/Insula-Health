import mongoose from "mongoose";

// create new UserSchema structure
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    birthday: {
        type: Date
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

// create User model from UserSchema
const User = mongoose.model('user', UserSchema);

// export User model
export default User;