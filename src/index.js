// require('dotenv').config({ path: './env' }) 

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app"

dotenv.config({
    path: './env'
})

connectDB().then(() => {
    // To start the server 
    app.listen(process.env.PORT || 8000, () => {
        `Server is running at port : ${process.env.PORT}`
    });
}).catch((err) => {
    console.log("MongoDB connection Failed. ", err);
})