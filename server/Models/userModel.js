import mongoose from "mongoose"
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Users',userSchema)