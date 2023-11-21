import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';

const app = express();
  
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

app.use(express.json())
app.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
app.use(express.urlencoded({ extended : true}))
app.use(limiter)

export default app;