// components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    console.log(product)
    const { name, category, quantity, image, _id } = product;
    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition p-4 flex flex-col">
            {/* Product Image */}
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className="object-cover rounded-lg"
                    
                />
            </div>

            {/* Content */}
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-500 text-sm mt-1">Category: {category}</p>
            <p className="text-gray-700 font-medium mt-2">Quantity: {quantity}</p>

            {/* Button */}
            <Link href={`/products/${_id}`}>
                <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                </button>
            </Link>
        </div>
    );
}
