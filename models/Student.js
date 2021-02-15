const mongoose=require('mongoose')
// require('validor')
const bcrypt=require('bcryptjs')


const studentInfoType=mongoose.Schema({
    name:String,
    password:String

})

studentInfoType.pre("save",async function(next){
    this.password= await bcrypt.hash(this.password,5)
    console.log(this.password)
    next()
})

const Student=new mongoose.model('Student',studentInfoType)


module.exports=Student;