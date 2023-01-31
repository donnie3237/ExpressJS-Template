const express = require('express')
const Main_router = express.Router();
const path = require('path');
const example = require('../Controller/main.controller.js')
Main_router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'./server.html'))
})
Main_router.get('/code',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.js'))
})
Main_router.get('/lol',(req,res)=>{
    res.send(`lol`);
    example();
})

module.exports = Main_router ;