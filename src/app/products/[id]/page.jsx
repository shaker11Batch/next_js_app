"use client"; 
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function ProductPage() {
  const { id } = useParams(); // get dynamic ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.json())
          .then((data) => {
              setProduct(data.result)
              console.log(data)
        });
    }
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
  <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">

        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg max-w-full h-auto object-cover"
          />
        </div>


        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="text-gray-700 font-medium">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              defaultValue={1}
              min={1}
              className="w-20 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Add to Cart
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-gray-500 text-sm">
            SKU: <span className="font-medium">{product.sku}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
