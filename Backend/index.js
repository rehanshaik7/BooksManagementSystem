import express, { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";

import {Book} from './models/bookModel.js';

import bookRoutes from './Routes/bookRoutes.js';

import cors from 'cors';

const app = express();


app.use(express.json());

app.use(cors());

// app.use(cors({
//     orgin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }));

app.get('/',(request,response)=>{

    console.log(request);
    return response.status(234).send('This is a express server')

});

app.use('/books',bookRoutes)



mongoose
.connect(mongoDBURL)
.then(()=>{
console.log("App is successfully connected to DataBase");
app.listen(PORT,()=>{
    console.log(`App is perfectly started and listening to port : ${PORT}`);
})
})
.catch((error)=>{
    console.log(error);
});
