const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

//Rotues
const product = require("./routes/product.routes")

app.use("/api/v1/isWorking", (req, res) => {
    res.send("Server is working fine")
})

app.use("/api/v1", product)

module.exports = app