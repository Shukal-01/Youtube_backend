import mongoose from "mongoose";
import { Db_Name } from "../constants.js"

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_Name}`)
        console.log(`\n Mongodb connected !! Db host: ${connectionInstance.connection.host}`)
        // console.log(connectionInstance)
    } catch (error) {
        console.log("Mongo db connection error: ", error)
        process.exit(1)
    }
}

export default connectDb