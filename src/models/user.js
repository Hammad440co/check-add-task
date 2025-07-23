import mongoose, { Schema } from "mongoose";
 const userSchema=  new Schema({
    name :String,
    email:{
        type : String,
        required :[true,"Email Required"]
        },
password:{
    type:String,
    required:[true,"Password Required"]
},
about :String,
profileUrl:String
    }
    
)
export const user=mongoose.models.user || mongoose.model('user',userSchema)