
const express=require('express')
require('./src/db/conn')
const app=express()
const Student=require('./models/Student')

app.use(express.json())

app.get('/s',async ( req,res)=>{
    res.send('hello')
})
app.post('/s',async ( req,res)=>{
   const user=await new Student(req.body)
   console.log(user)
   res.send(req.body.name +'    hello')
})


app.listen(80,()=>{
    console.log('listening')
})