import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connection = async () =>{
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('MG connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbname: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected(true)
    } catch (error) {
        console.log(error);
    }
}