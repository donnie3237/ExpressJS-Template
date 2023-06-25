require('dotenv').config();
const express = require('express') 
const app = express();
const PORT:string | number | undefined = process.env.PORT;
import cors from 'cors'
import { checkDatabaseConnection } from './DB/DB';
const Main_router = require('./Routes/main.route');

//check database connecttion
checkDatabaseConnection()

// middle ware
app.use(express.json())
app.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
app.use(express.urlencoded({ extended : true}))

// use Router
app.use("/",Main_router)

//listen port
app.listen(PORT, ()=>{
    console.log(`🚀 listining on port ${PORT}`)
})