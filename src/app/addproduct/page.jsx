"use client"

import React from 'react';

const AddProduct = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const category = e.target.category.value;
        const brand = e.target.brand.value;
        const image = e.target.img.value;
        const description = e.target.description.value;
        const payload = { name, price, quantity, category, brand, image, description };
        console.log(payload);
        let result = await fetch('http://localhost:3000/api/hello', {
            method: "POST",
            body: JSON.stringify(payload)
        })
        result = await result.json()
        if (result.success) {
            alert("new data added")
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center my-12 font-bold text-4xl'>Add Product</h1>
            <form onSubmit={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-6">


                <div class="col-span-2">
                    <label class="block text-gray-700 font-medium mb-2">Product Name</label>
                    <input type="text" name="name" placeholder="Enter product name" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>


                <div>
                    <label class="block text-gray-700 font-medium mb-2">Price ($)</label>
                    <input name="price" min={0} type="number" placeholder="Enter price" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-2">Quantity</label>
                    <input name='quantity' min={0} type="number" placeholder="Enter stock quantity" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>


                <div>
                    <label class="block text-gray-700 font-medium mb-2">Category</label>
                    <select name="category" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none  text-black">
                        <option value="">Select Category</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Accessories</option>
                        <option>Home</option>
                        <option>Other</option>
                    </select>
                </div>


                <div>
                    <label class="block text-gray-700 font-medium mb-2">Brand</label>
                    <input name='brand' type="text" placeholder="Enter brand name"
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none" />
                </div>


                <div class="col-span-2">
                    <label class="block text-gray-700 font-medium mb-2">Product Image</label>
                    <input name='img' type="file" accept="image/*" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
                </div>


                <div class="col-span-2">
                    <label class="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea name='description' rows="4" placeholder="Enter product description" required
                        class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
                </div>


                <div class="col-span-2 text-center">
                    <button type="submit"
                        class="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                        Submit Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;