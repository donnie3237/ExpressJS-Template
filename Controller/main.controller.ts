//This file to make Controller process
const { ObjectID , ObjectId} = require('bson');
const model = require('../model/main.model');
import express  from "express";

exports.exampleMethod = (req : express.Request,res :express.Response) => {
    const User = model

    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    })
    
    new_user.save((err : any, result: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.send("hello")
        }
    })
    
};  
  
  
  
  