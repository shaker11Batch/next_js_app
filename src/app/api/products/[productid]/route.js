import { mongoUri } from "@/lib/dbConnect";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {

    const productId = content.params.productid
    const filter = { _id: productId }
    const payload = await request.json()
    console.log(payload)

    await mongoose.connect(mongoUri)

    const result = await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}



export async function GET(request, content) {

    const productId = content.params.productid
    const query = { _id: productId }
    await mongoose.connect(mongoUri)
    const result = await Product.findById(query)
    return NextResponse.json({ result, success: true })
}



