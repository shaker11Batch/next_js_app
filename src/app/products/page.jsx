import ProductCard from "@/components/ProductCard";


const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    if (data.success) {
        return data.result
    }
    else {
        return { success: false }
    }
}


const Products = async () => {

    const products = await getProducts()
    console.log(products)

    return (
        <div>
            <h1 className='text-center my-12 text-3xl font-bold'>This is my products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;















































;