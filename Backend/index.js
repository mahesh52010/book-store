import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//db connection
connectDB();


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// 