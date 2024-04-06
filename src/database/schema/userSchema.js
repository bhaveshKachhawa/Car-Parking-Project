import mongoose from 'mongoose';
const userDetails = new mongoose.Schema({
    email: String,
    password: String
});
const userData = new mongoose.model("user", userDetails);
export { userData };