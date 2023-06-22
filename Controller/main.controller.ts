//This file to make Controller process
import Model from "../model/main.model";
import {Request ,Response} from "express";
import { user } from "../types/Model.type";

export function get(req:Request,res:Response){
    res.send('welcome to expressTS')
}

export function create(req:Request,res:Response){
    const {name , age} : user = req.body
    const new_user = new Model({
        name: name,
        age: age
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
  
  
  
  