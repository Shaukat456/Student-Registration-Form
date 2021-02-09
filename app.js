

const express=require('express')
require('./src/db/conn')
const app=express()
const Student=require('./models/Student')


app.get('/',async ( req,res)=>{
    res.send('hello')
})

app.listen(80,()=>{
    console.log('listening')
})