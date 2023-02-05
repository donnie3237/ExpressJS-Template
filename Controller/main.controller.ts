//This file to make Controller process
const { ObjectID , ObjectId} = require('bson');
const model = require('../model/main.model.ts')

exports.exampleMethod = (req,res) => {
    const User = model

    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    })
    
    new_user.save((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.send("hello")
        }
    })
    
};  
  
  
  
  