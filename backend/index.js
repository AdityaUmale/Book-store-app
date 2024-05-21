import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

try {
    mongoose.connect(URL);
    console.log("Connected to mongoDB")
    
} catch (error) {
    console.log("Error:", error)
    
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});
