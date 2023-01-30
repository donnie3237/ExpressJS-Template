require('dotenv').config(); //นำเข้าไฟล์ ดอทอีเอนวี
const express = require('express') 
const app = express();
const PORT = process.env.PORT; //พอร์ตเซิร์ฟเวอร์
const Datadase_URI = process.env.DATABASE_URI //รหัสฐานข้อมูล
const MongoClient = require('mongodb').MongoClient; 
const cors = require('cors')
const path = require('path')
const bcrypt = require('bcrypt');  // hash password
const { ObjectID , ObjectId} = require('bson');
let Database;

MongoClient.connect(Datadase_URI,{useNewUrlParser:true},(err,result)=>{
    Database = result.db('DosE-IOT')
})

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended : true}))

app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./server.html'))
})
app.get('/code',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.js'))
})
app.get('/lol',(req,res)=>{
    res.send("blablabla")
})
app.post('/register',async (req,res)=>{
    const hashPAss = await bcrypt.hash(req.body.password,10)
    Database.collection('users').find({"username": req.body.username}).toArray((err,result)=>{
        console.log(result)
        if(result != ""){
            res.send("รหัสซ้ำ")
            console.log(":hh")
        }else if(result = []){
        try {
            const user = {
                "name":req.body.name,
                "username":req.body.username,
                "password": hashPAss,
                "img_URI": req.body.img
            }
            Database.collection('users').insertOne(user)
            res.send("success")
                }
             catch (error) {
                console.log(error)
            }
        }
    });
})
app.get('/get/:id',(req,res)=>{
    Database.collection('users').find({_id :ObjectId(req.params['id'])}).toArray((err,result)=>{
        res.send(result)
    })
})
app.post('/login',async(req, res)=> {
    const userName = req.body.username;
    Database.collection('users').find({"username": userName }).toArray((err, result)=> {
        if(result != ""){
            const passwordsMatch =  bcrypt.compareSync(req.body.password , result[0].password )
            if (passwordsMatch) {
                let UserID = result[0]._id
                console.log('Successfully logged in');
                res.send(UserID)
            }else{
                console.log('password not true')
                res.send("wrongpass")
            }
        }else{
            console.log("user not found")
            res.send("notfound")
        }
    })
})