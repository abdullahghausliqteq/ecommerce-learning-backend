const app = require("./app");
const dotenv = require("dotenv");
const connectMongoDB = require("./config/mongo");

//Config
dotenv.config({ path: "./config/config.env" })

//Connect database
connectMongoDB()


app.listen(process.env.PORT, () => {
    console.log('\x1b[33m%s\x1b[0m', `Server is working on:`, `http://localhost:${process.env.PORT}`)
})