//router of server side
import {IRouter , Router} from 'express';
import { create , get} from '../Controller/main.controller'
const Main_router : IRouter = Router();

Main_router.get("/", get)
Main_router.post('/example',create)

module.exports = Main_router ;