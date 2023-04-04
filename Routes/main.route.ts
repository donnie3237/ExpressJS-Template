//router of server side
import express,{IRouter , Router} from 'express';
const Main_router : IRouter = Router();
import { create , get} from '../Controller/main.controller'
Main_router.use(express.urlencoded({ extended: true }));

Main_router.get("/", get)
Main_router.post('/example',create)

module.exports = Main_router ;