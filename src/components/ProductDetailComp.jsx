import React from 'react'

const ProductDetailComp = (props) => {
    const { product, onAdd,onRemoveAll, cartItems } = props;
    const isFound = cartItems.some(element => {
        if (element.id === product.id) {
            return true;
        }
        return false;
    });
    
    return (
        <div id="ProductDetail"
            className='backdrop-blur-md max-w-xs m-2 max-h-xs'>
            <div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <img className='bg-white-100 w-auto max-h-50' src={product.image} alt={product.name} />
                    <h5 title={product.name} className="text-[#EB6440] text-xl leading-tight font-medium mb-2">
                        {product.name.length>24?product.name.substring(0, 24)+'...':product.name}</h5>
                    <p className="text-[#497174] text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <h2 className='text-green-800 font-semibold text-xl'>
                        ${product.price}</h2>
                        <p>  {product.shipping> 0 ? "Shipping: $"+product.shipping : "Free Shipping"}</p>
                    {isFound ? (
                    <button onClick={() => onRemoveAll(product)}
                    type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-[#c25135] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
                        Remove
                    </button>) : (
                    <button onClick={() => onAdd(product)}
                    type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-[#497174] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                       Add To Cart 
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComp
