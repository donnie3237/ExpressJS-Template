// const chalk = require('chalk')
const mongoose = require('mongoose')
const Datadase_URI = process.env.DATABASE_URI;
const chalk = require('chalk')
mongoose.set('strictQuery', true)
mongoose.connect(Datadase_URI).then(()=>{
    console.log(chalk.bgGreen("connected to database"))}
).catch(()=>{
    console.log(chalk.bgRed("Not connect to database"))
}
)

//** in mongoClient **
// let Database;
// const MongoClient = require('mongodb').MongoClient;
// try {
//     MongoClient.connect(Datadase_URI,{useNewUrlParser:true},(err,result)=>{
//         Database = result.db('Your-collection-database')
//         console.log("connected")
//     })
// } catch (error) {
//     console.log("Faild connect to database")
// }