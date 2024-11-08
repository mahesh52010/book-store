import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://maheshyandrapu77:mahesh@cluster0.rqj18.mongodb.net/online-book-store-main').then(()=>console.log("DB connected"));
}