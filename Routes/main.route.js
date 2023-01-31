const express = require('express')
const Main_router = express.Router();
const path = require('path');

Main_router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'./server.html'))
})
Main_router.get('/code',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.js'))
})
Main_router.get('/lol',(req,res)=>{
    res.send("hello")
})
module.exports = Main_router ;