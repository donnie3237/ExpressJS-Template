require('dotenv').config();
const express = require('express') 
const app = express();
const PORT:string | number | undefined = process.env.PORT;
import cors from 'cors'
import { connectDB } from './DB/db';
const Main_router = require('./Routes/main.route');

// use Router
app.use("/",Main_router)

// middle ware
app.use(express.json())
app.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
app.use(express.urlencoded({ extended : true}))

//listen port
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
    //connect database after run server
    connectDB()
})