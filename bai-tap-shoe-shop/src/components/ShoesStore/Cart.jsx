import React from 'react'

export default function Cart({ cartListProp, onUpdateQuantityProp, onDeleteItemProp, onClearCartProp, onCheckoutCartProp, totalQuantityProp, subTotalProp }) {

    const renderListCart = () => {
        return cartListProp.map((cartItem) => (
            <tr key={cartItem.id} className="border-b last:border-b-0">
                <td className="py-4">
                    <div className="flex items-center">
                        <img className="h-16 w-16 mr-4" src={cartItem.image} alt={cartItem.name} />
                        <span className="font-semibold">{cartItem.name}</span>
                    </div>
                </td>
                <td className="py-4">${cartItem.price}</td>
                <td className="py-4">
                    <div className="flex items-center">
                        <button
                            // disabled = {cartItem.quantity === 1}
                            onClick={() => { onUpdateQuantityProp(cartItem.id, false) }} className="border border-gray-300 rounded-md py-2 px-4 mr-2">-</button>
                        <span className="text-center w-8">{cartItem.quantity}</span>
                        <button onClick={() => { onUpdateQuantityProp(cartItem.id, true) }} className="border border-gray-300 rounded-md py-2 px-4 ml-2">+</button>
                    </div>
                </td>
                <td className="py-4">${cartItem.price * cartItem.quantity}</td>
                <td>
                    <button onClick={() => onDeleteItemProp(cartItem.id)} className="leading-3 text-[10px] w-8 h-8 text-red-700 border-2 border-red-700 rounded-full p-2 hover:bg-red-700 hover:text-white transition duration-300">
                        <i className="fa-solid fa-x"></i>
                    </button>
                </td>
            </tr>
        ));
    };

    

    return (
        // < !--Main modal-- >
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-6xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Shopping Cart
                        </h3>
                        <button id="close-modal" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-4 max-h-[400px] overflow-y-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left font-semibold">Product</th>
                                                <th className="text-left font-semibold">Price</th>
                                                <th className="text-left font-semibold">Quantity</th>
                                                <th className="text-left font-semibold">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartListProp.length > 0 ? renderListCart() : (
                                                <tr>
                                                    <td colSpan={4} className="text-center py-8 text-gray-500">Your cart is empty.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="md:w-1/4">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between border-b">
                                        <h2 className="text-lg font-semibold mb-2">Summary</h2>
                                        <span>{totalQuantityProp === 1 ? `${totalQuantityProp} item` : `${totalQuantityProp} items`}</span>
                                    </div>
                                    <div className="flex justify-between mt-2 mb-2">
                                        <span>Subtotal</span>
                                        <span>${subTotalProp.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes</span>
                                        <span>$1.99</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>$0.00</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold">${(subTotalProp + 1.99).toFixed(2)}</span>
                                    </div>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={onCheckoutCartProp}>Checkout</button>
                                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={onClearCartProp}>Clear Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
