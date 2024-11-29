// const express =require('express')

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json()); //allows us to parse incoming request :req.body
app.use(cookieParser()); // allows us to parse incoming cookies

//Main Routers
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Serveris running on port ${PORT}`);
});
