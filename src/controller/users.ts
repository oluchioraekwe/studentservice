import {Request,Response} from 'express';
import {getAllUsers, addUser,removeUser, getUserById, updateUser, getUserByEmail} from "../service/users"


/* GET users listing. */
export const allUsers = async (req:Request, res:Response) =>{
    try {
        const users = await getAllUsers()

        if(users.length < 1){
            return res.status(404).send({
                "message":"Users Not Found"
            })
        }
        return res.status(200).send(users)
    } catch (error:any) {
        return res.status(500).send(error.message)
    }
};

/* POST create user. */
export const createUser = async (req:Request, res:Response) =>{
    try {
        const user = await addUser(req.body)
        
        return res.status(201).send(user)
    } catch (error:any) {
        return res.status(500).send(error.message)
    }
};

/* DELETE create user. */
export const deleteUser =async (req:Request,res:Response) => {
    try{
        const id = req.params.id
        await removeUser(id)
        return res.status(200).send({
            message:"User Deleted"
        })
    }catch(error:any){
        return res.status(500).send(error.message)
    }
}

export const getUser = async (req:Request, res:Response)=>{
    try {
        const id = req.params.id
        const user = await getUserById(id)
        if(!user){
            return res.status(404).send({
                "message":"User Not Found"
            })
        }
        return res.status(200).send(user)
    } catch (error:any) {
        return res.status(500).send(error.message)
    }
}

export const updateUserController = async (req:Request, res:Response)=>{
    try {
        const id = req.params.id
        const body = req.body
        const user = await updateUser(id,body)
        return res.status(200).send(user)
    } catch (error:any) {
        return res.status(500).send(error.message)
    }
}

export const findByEmail = async (req:Request, res:Response)=>{
    try {
        const email = req.body.email
        const user = await getUserByEmail(email)
        if(!user){
            return res.status(404).send('Invalid Credentials')
        }
        return res.status(200).send(user)
    } catch (error:any) {
        return res.status(500).send(error.message)
    }
}