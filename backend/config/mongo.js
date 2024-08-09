const mongoose = require('mongoose')

const connectMongoDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('\x1b[33m%s\x1b[0m', "MongoDB connected, DB HOST:", connectionInstance.connection.host)
    } catch (error) {
        console.log("MongoDB connection error: ", error)
        process.exit(1) //Eiting the process with code 1 meaning exiting due to an error or some failure
    }
}

module.exports = connectMongoDB