//This file to make Controller process
import Model from "../model/main.model";
import {Request ,Response} from "express";

export async function get(req:Request,res:Response){
    const result = await Model.find({})
    res.send(result)
}

export async function create(req:Request,res:Response){
    const {name , age} = req.body
    console.log(name)
    const result = await Model.create({
        name: "ff",
        age: 12
    })
    res.send(result)
};

export default {get , create};