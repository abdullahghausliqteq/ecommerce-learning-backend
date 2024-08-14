const ErrorHandler = require("../utils/errorHandler")

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal Server Error"

    //Handling wrong mongoDB _id error
    if (err.name === "CastError") {
        err = new ErrorHandler(`Recource not found. Invalid ${err.path}`, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })

}