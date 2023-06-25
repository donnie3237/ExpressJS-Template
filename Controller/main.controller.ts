//This file to make Controller process
import Model from "../model/main.model";
import {Request ,Response} from "express";

export function get(req:Request,res:Response){
    res.send('welcome to expressTS')
}

export function create(req:Request,res:Response){
    const User = Model

    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    })

    new_user.save((err, result) => {
        if (err) {
            res.sendStatus(400);
        } else {
            res.sendStatus(201)
        }
    })
};

export default {get , create};
  
  
  
  