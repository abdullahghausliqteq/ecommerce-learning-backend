const asyncErrors = require("../middlewares/asyncErrors.js")
const Product = require("../models/product.model.js")
const ApiFeatures = require("../utils/apiFeatures.js")
const ErrorHandler = require("../utils/errorHandler.js")

//Create product -- Admin
exports.createProduct = asyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success: true,
        product
    })
})

//Get all products
exports.getAllProducts = asyncErrors(async (req, res, next) => {
    let resultsPerPage = 5;
    const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage)
    const products = await apiFeatures.query
    res.status(200).json({
        success: true,
        products
    })
})

//Update product -- Admin
exports.updateProduct = asyncErrors(async (req, res, next) => {
    let product = Product.findById(req.params.id)

    if (!product) return next(new ErrorHandler("Product not found", 404))

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        product
    })
})

//Delete Product -- Admin 
exports.deleteProduct = asyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) return next(new ErrorHandler("Product not found", 404))

    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
})


//Product Details 
exports.productDetails = asyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) return next(new ErrorHandler("Product not found", 404))

    res.status(200).json({
        success: true,
        product
    })

})