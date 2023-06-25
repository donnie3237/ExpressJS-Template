import {Router , IRouter} from 'express';
import { get } from '../Controller/main.controller';
const Main_router = Router();

Main_router.get("/", get)

module.exports = Main_router ;