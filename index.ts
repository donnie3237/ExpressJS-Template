require('dotenv').config();
require('./DB/db')
const express = require('express') 
const app = express();
const PORT:string | undefined = process.env.PORT;
import cors from 'cors'
const Main_router = require('./Routes/main.route');

// middle ware
app.use(express.json())
app.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
app.use(express.urlencoded({ extended : true}))

// use Router
app.use("/",Main_router)

//listin port
app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})

export default app