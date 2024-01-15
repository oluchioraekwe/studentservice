import mongoose from "mongoose";

const dbconnect = async ()=>{
  if(process.env.NODE_ENV == 'docker'){
    await mongoose.connect(`mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@mongo:27017/`)
  }else if(process.env.NODE_ENV == 'minikube'){
    await mongoose.connect(`mongodb://${process.env.ME_CONFIG_MONGODB_ADMINUSERNAME}:${process.env.ME_CONFIG_MONGODB_ADMINPASSWORD}@${process.env.ME_CONFIG_MONGODB_SERVER}:27017/${process.env.ME_CONFIG_MONGODB_AUTH_DATABASE}?authSource=admin`)
  }else{
    await mongoose.connect('mongodb://localhost:27017/')
  }
 }

export default dbconnect