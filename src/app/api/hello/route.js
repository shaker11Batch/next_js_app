import { mongoUri } from "@/lib/dbConnect";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(mongoUri)
    const data = await Product.find();
    console.log(data)

    return NextResponse.json({ result: data })
}

export const POST = async (request) => {
    const payload = await request.json()
    await mongoose.connect(mongoUri)
    let product = new Product(payload);
    const result = await product.save()
    return NextResponse.json({result, success: true})
}