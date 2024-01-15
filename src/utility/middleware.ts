import {Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv'
import { postRequest } from './request';
dotenv.config()

const baseurl = process.env.BASEURL_AUTH
const port_auth = process.env.PORT_AUTH

dotenv.config()
export const authenticate = async(req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization?.split(" ")['1']
    const url = `${baseurl}:${port_auth}/users/verify`
    const body = {
        token
    }    
    if(!token){
        return res.status(400).send('Invalid Token')
    }
    try{
        const verifyToken = await postRequest(url,body)
        if(!verifyToken){
            return res.status(401).send('Invalid Token')
        }
        next()
    }catch(error:any){
        return res.status(401).send(error.message)
    }
} 
