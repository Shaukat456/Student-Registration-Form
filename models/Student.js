const mongoose = require('mongoose')
// require('validor')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




const studentInfoType = mongoose.Schema({
    name: String,
    password: String,
    token:String

})

studentInfoType.methods.genAuth = async function () {
    try {
        const _id = this.id;
        const token = jwt.sign({ _id }, "THISISATOKEN")
        console.log(token.concat('    TOKEN'))
        return token
    } catch (error) {
        res.send('error'+error)
    }
}

studentInfoType.pre("save", async function (next) {
   
    // console.log(this.password)
    this.password = await bcrypt.hash(this.password, 10)
    next()
})




const Student = new mongoose.model('Student', studentInfoType)


module.exports = Student;