
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


// app.get('/s',async ( req,res)=>{
//     res.render('index')
// })



// const bcrypt=require('bcryptjs')

// // spass=bcrypt.hash()












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
       return res.render('index')
            
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

app.patch('/s/:id',async(req,res)=>{
    try {
        const _id=req.params.id;                         

                                                                    
       const update = await Student.findByIdAndUpdate({_id:_id},req.body,{
           new:true
        }
        )
        res.send(update)
        console.log(update)
    } catch (error) {
        res.send(error)
    }
})

app.get('/s',async(req,res)=>{
    try {
        const sdata=await Student.find()
        res.send(sdata)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

app.listen(80,()=>{
    console.log('listening')
})