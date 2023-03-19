//This file to make Controller process
import express  from "express";
import {client} from '../DB/db'

exports.exampleMethod = async (req : express.Request,res :express.Response) => {
    const result = await client.query('SELECT * FROM dose');
    res.send(result.rows);
};  
  
  
  
  