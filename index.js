require('dotenv').config();
require('./DB/db.js')
const express = require('express') 
const app = express();
const PORT = process.env.PORT;
const cors = require('cors')
const Main_router = require('./Routes/main.route');


app.use("/",Main_router)


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended : true}))

app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})
