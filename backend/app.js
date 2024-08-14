const express = require("express")
const cors = require("cors")
const app = express()

const errorMiddleware = require("./middlewares/error")

app.use(cors())
app.use(express.json())

//Rotues
const product = require("./routes/product.routes")

app.use("/api/v1/isWorking", (req, res) => {
    res.send("Server is working fine")
})

app.use("/api/v1", product)

//Middleware for error
app.use(errorMiddleware)

module.exports = app