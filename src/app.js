import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.json({
    limit: '16kb',
  })
);
app.use(express.urlencoded({  
     extended: true,
      limit: '16kb' 
    }));
    app.use(express.static("public"));


 // routes ko import krna kalia   
 import userRouter from './routes/user.routes.js'

 
//  routes ko decalare krna kalia
app.use('/api/user', userRouter)

// http://localhost:8000/api/v1/user


export default app;

