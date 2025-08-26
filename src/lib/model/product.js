import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    category: String,
    brand: String,
    image: String,
    description: String,

});

export const Product = mongoose.models.products || mongoose.model("products", productModel)

