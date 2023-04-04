//This file to make Controller process
const model = require('../model/main.model');
import {Request ,Response} from "express";

export const get = (req:Request,res:Response) => {
    res.send('welcome to expressTS')
}

export const create = (req:Request,res:Response) => {
    const User = model

    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    })
    
    new_user.save((err : any, result: any) => {
        if (err) {
            res.sendStatus(400);
        } else {
            res.sendStatus(201)
        }
    })
};

export default {get , create};
  
  
  
  