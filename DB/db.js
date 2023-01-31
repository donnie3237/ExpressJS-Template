// const chalk = require('chalk')
const mongoose = require('mongoose')
const Datadase_URI = process.env.DATABASE_URI;
const chalk = require('chalk')
mongoose.set('strictQuery', true)
mongoose.connect(Datadase_URI).then(()=>{
    console.log(chalk.bgGreen("connected to database"))}
).catch(()=>{
    console.log(chalk.bgRed("  Not connect to database  "))
}
)


// const MongoClient = require('mongodb').MongoClient;
// function DB( data ,result){
//     var Data;
//     MongoClient.connect(Datadase_URI,{useNewUrlParser:true},(err,result)=>{
//         // result
//         // .db('Your-collection-database')
//         if(result){
//             console.log(chalk.bgGreen(" connected to database "))
            
//         }else{
//             console.log(chalk.bgRed(" Not connect to database "))
//             Data = "3"
//         }
//     })
// }

// module.exports = DB ;