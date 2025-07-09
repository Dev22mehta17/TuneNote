import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
// import cors from 'cors';

// app.use(cors());


dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use("/api/users",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port "+PORT);
})