import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try{
        const mongoUri = process.env.MONGO_DB_URL;
        await mongoose.connect(mongoUri);
        if (!mongoUri) {
            throw new Error('MONGO_DB_URL is not defined in the environment');
        }
        console.log("Connect to the MongoDB");
    }catch(error){
        console.log("Error connectiong to MongoDB ", error.message);
    }
};

export default connectToMongoDB;