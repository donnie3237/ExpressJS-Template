// import mongoose from "mongoose";
// const Datadase_URI : any = process.env.DATABASE_URI;
const chalk = require('chalk')

// mongoose.set('strictQuery', true)
// mongoose.connect(Datadase_URI , {dbName: '<DB-Name>'},)
//     .then(()=>{
//         console.log(chalk.bgGreen("  Connected to database  "))
//         }
//     ).catch(()=>{
//     console.log(chalk.bgRed("  Not connect to database  "))
//     }
// )
// // to set dbName you can change this in line 6 dbName: '<DB-Name>'
const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dose',
    password: '3237',
    port: 5432,
});

pool.connect((err:any, client:any, done:any) => {
  if (err) {
    console.error(chalk.bgRed('Not connect to the database!'));
  } else {
    console.log(chalk.bgGreen('Connected to database!'));
  }
});

export const client = pool.connect