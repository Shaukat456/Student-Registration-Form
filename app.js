
const express=require('express')
require('./src/db/conn')
const app=express()
const Student=require('./models/Student')
const path=require('path')
const { stat } = require('fs')

// path.join(__d)
const staticpath=path.join(__dirname,'../public')
// const loginfolder=path.join(__dirname,'../Login')
//setting template engine
app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(staticpath))


app.get('/s',async ( req,res)=>{
    res.render('index')
})

app.get('/login',async ( req,res)=>{
    res.render('login')
})
app.post('/login',async ( req,res)=>{
    const name=req.body.n
    const pass=req.body.p

    const username=await Student.findOne({n:name});

    res.status(200).send('login')
})
app.post('/s',async ( req,res)=>{
    try {
        const user=new Student({
            name:req.body.n,
            password:req.body.p
        })
        const result= await user.save()
        console.log(user)
        // res.send('SUBMITTED')
    
        //This code is not working
        // req.body.n ==0 ? res.send(' Not submitted'):res.end('Submitted')
      
      
        res.render('index')
      
    } catch (err) {
        setTimeout(() => {
        res.render('index')
            
        }, 2000);
        
    }
})


app.delete('/s', async(req,res)=>{
    try {
        const deleteAll=await Student.deleteMany({ },()=>{
            res.end('deleted')
        })
    } catch (error) {
        res.send(error)
    }
})

app.listen(80,()=>{
    console.log('listening')
})