import express from 'express';
const Main_router : any = express.Router();
const path = require('path');
const controller = require('../Controller/main.controller.js');

type Action = {
    req: express.Request;
    res: express.Response;
};

Main_router.use(express.json());
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get("/", (req : Action,res : Action)=>{
    res.res.sendFile(path.join(__dirname,'./server.html'))
})
Main_router.get('/code',(req : Action,res : Action)=>{
    res.res.sendFile(path.join(__dirname,'../index.js'))
})
Main_router.post('/example',(req : Action,res : Action)=>{
    controller.exampleMethod(req,res);
})

module.exports = Main_router ;