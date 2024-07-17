const express =require('express')
const {MongoClient} =require('mongodb')
// import mongoose from 'mongoose';
// import dotenv from 'dotenv'
// import  bodyParser from 'body-parser';
// import { MongoClient } from 'mongodb';


const url ="mongodb://localhost:27017/";
const dbName  ='myDatabase'
// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config()
const client = new MongoClient(url);
async function main(){
    await client.connect();
    console.log('Connected successfully to server');
}

const dbConnection = async ()=>{
    try{
        await client.connect();
        console.log('Connected successfully to server');
        const db= client.db(dbName)
    }
    catch(error){
        console.error('Failed...', error);
        throw error;
    }

}
  
const app =express();

const PORT = process.env.PORT ||4000 ;

app.get('/',(req,res)=>{
    res.json({msg:"this is example"})
})



app.listen(PORT,()=>{
    console.log("Server is running...")
    console.log(PORT)
})

module.exports ={dbConnection};

//connect mongodb

// const URI =process.env.MONGODB_URL;
// mongoose.connect(URI,{
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("MongoDB connected")
// }).catch(err =>{
//     console.log(err)
// })