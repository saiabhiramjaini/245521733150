import express from 'express';
import cors from 'cors';
import fetchRouter from './routes/fetch';
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", fetchRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})