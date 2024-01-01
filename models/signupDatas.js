const mongoose =require('mongoose') 


const schema = {
    displayname:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date
    }
}


const signupSchema = mongoose.Schema(schema)
const signupModel = mongoose.model('signupDatas',signupSchema)

module.exports = signupModel