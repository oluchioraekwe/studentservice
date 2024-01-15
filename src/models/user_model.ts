import {Schema, model} from 'mongoose'
import {IStudent} from "../utility/interface"

const studentSchema = new Schema<IStudent>({
    firstName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    gender:{
        type: String,
        enum: {
            values: ["M","F"],
            message: "Gender must be either M or F"
        },
        required: true,
        trim: true,
    },
    hasAdminRole:{
        type: String,
        enum:{
            values:["admin","user"],
            message: "Admin role can either be admin or user"
        },
        required: false,
        default: "user"
    },
    userType:{
        type: String,
        enum:{
            values:["Student","Staff"],
            message: "User can either be Staff or Student"
        },
        required: true,
    },
    class:{
        type:String,
        trim: true
    },
    lastAverage:{
        type:Number
    }
},{
    timestamps: true
})

const Student = model<IStudent>('Student',studentSchema)

export default Student