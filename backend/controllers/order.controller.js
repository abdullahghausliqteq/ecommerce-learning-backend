const Order = require("../models/order.model")
const asyncErrors = require("../middlewares/asyncErrors.js")
const Product = require("../models/product.model.js")
const ApiFeatures = require("../utils/apiFeatures.js")
const ErrorHandler = require("../utils/errorHandler.js")


//Create new Order
exports.createNewOrder = asyncErrors(async (req, res, next) => {
    const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(201).json({
        success: true,
        message: "Order placed successfully",
        order
    })

})

//Get Single Order 
exports.getSingleOrder = asyncErrors(async (req, res, next) => {

    // populate will use the user id given in req and will get the name and email of that specific user from User table and give with the data
    const order = await Order.findById(req.params.id).populate("user", "name email")

    if (!order) return next(new ErrorHandler("Order not found", 404))

    res.status(200).json({
        success: true,
        order
    })

})

//Get Logged in user orders 
exports.myOrders = asyncErrors(async (req, res, next) => {

    const orders = await Order.find({ user: req.user._id })
    if (!orders?.length) return res.status(200).json({
        success: true,
        orders: []
    })

    res.status(200).json({
        success: true,
        orders
    })

})