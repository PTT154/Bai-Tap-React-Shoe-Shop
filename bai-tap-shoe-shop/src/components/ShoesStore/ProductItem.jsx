import React from 'react'

export default function ProductItem({ shoeProp, onGetProductToCartProp }) {
    const handleAddToCart = () => {
        onGetProductToCartProp(shoeProp);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#" className="flex justify-center">
                <img className="rounded-t-lg w-[80%]" src={shoeProp.image} alt={shoeProp.name} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{shoeProp.name}</h5>
                </a>
                <p className="mb-3 font-bold text-xl text-red-500">{shoeProp.price}$</p>
                <p className="mb-3 font-normal text-gray-700">{shoeProp.shortDescription}</p>
                <button onClick={handleAddToCart} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Add to cart
                    <i className="ml-2 fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    )
}
