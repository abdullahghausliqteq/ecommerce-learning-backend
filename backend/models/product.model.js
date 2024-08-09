const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    price: {
        type: Number,
        requried: [true, "Please enter product price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0,
    },
    images: {
        
    }

})