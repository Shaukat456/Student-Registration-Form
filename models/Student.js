const mongoose=require('mongoose')
// require('validor')

const studentInfoType=mongoose.Schema({
    name:{
        type:String,
    }

})


const Student=new mongoose.model('Student',studentInfoType)


module.exports=Student;