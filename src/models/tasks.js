import mongoose, { Schema } from "mongoose";
 const TasksSchema=  new Schema({
    userid :{ 
        type:mongoose.Schema.Types.ObjectId ,
        required:true,
    },

    status:{
        type: String,
        enum: ['pending', 'complete', ],
        default: 'pending',
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
 }
   
    
)
export const Task=mongoose.models.tasks || mongoose.model('tasks',TasksSchema)