import Student from "../models/user_model"
import { IStudent } from "../utility/interface"



export const getAllUsers = async ()=>{
    return await Student.find()
}

export const addUser = async (user:IStudent)=>{
    return await Student.create(user)
}

export const removeUser = async (id: any) =>{
    return await Student.findByIdAndDelete(id)
}

export const getUserById = async (id: any)=>{
    return await Student.findById(id)
}

export const updateUser = async (id:any, user:IStudent)=>{
    return await Student.findOneAndUpdate({_id:id},{$set:user},{new:true,runValidators:true})
}

export const getUserByEmail = async(email:string)=>{
    return await Student.findOne({email})
}