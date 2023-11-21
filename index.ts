import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import DB from './DB/db'

import Main_router from './Routes/main.route';
import Middleware from './middleware/middleware';

const app = express();
const PORT:string | number | undefined = process.env.PORT;

DB;
// middle ware
Middleware ;

// use Router
app.use("/",Main_router)

//listen port
app.listen(PORT, ()=>{
    console.log(`🚀 listining on port ${PORT}`)
})