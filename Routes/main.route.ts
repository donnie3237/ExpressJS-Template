import express from 'express';
const Main_router : any = express.Router();
// const controller = require('../Controller/main.controller');
import cors from 'cors'
import User, { UserMap } from '../model/main.model';
import database from '../DB/db';

Main_router.use(express.json());
Main_router.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}))
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get("/", (req : express.Request,res :express.Response)=>{
    res.send('welcome to expressTS')
})

Main_router.get('/pg', (req : express.Request,res :express.Response) => {
  UserMap(database);
  const result = User.findAll();
  res.send(result)
});

module.exports = Main_router ;