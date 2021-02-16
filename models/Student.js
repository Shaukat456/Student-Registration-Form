const mongoose=require('mongoose')
// require('validor')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')




const studentInfoType=mongoose.Schema({
    name:String,
    password:String,
    token:String

})


studentInfoType.pre("save",async function(next){
      const _id = this.id;
      console.log(this.password)
    this.password= await bcrypt.hash(this.password,10)
    const jjj=jwt.sign({_id},"THISISATOKEN")
    console.log(jjj.concat('    TOKEN'))
    
    next()
})




const Student=new mongoose.model('Student',studentInfoType)


module.exports=Student;