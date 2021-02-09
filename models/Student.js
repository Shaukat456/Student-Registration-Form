const mongoose=require('mongoose')


const StudentInfoType=mongoose.Schema({
    name:{
        type:String
    }
})


const Student=new mongoose.model('Student',StudentInfoType)


module.exports=Student;