//router of server side

import express from 'express';
const Main_router : express.IRouter = express.Router();
const controller = require('../Controller/main.controller');
import cors from 'cors'

Main_router.use(express.json());
Main_router.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}))
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get("/", (req : express.Request,res :express.Response)=>{
    res.send('Welcome to expressTS')
})
Main_router.post('/example',(req : express.Request,res :express.Response)=>{
    controller.exampleMethod(req,res);
})

module.exports = Main_router ;