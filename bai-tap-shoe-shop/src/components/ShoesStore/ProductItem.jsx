import React from 'react'

export default function ProductItem({shoeProp}) {

    return (
        <div className="bg-neutral-primary-soft block w-full p-6 border border-default rounded-base shadow-xs">
            <a href="#">
                <img className="rounded-base" src={shoeProp.image} alt={shoeProp.name} />
            </a>
            <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{shoeProp.name}</h5>
            </a>
            <p className="mb-2 text-body text-xl text-red-500">{shoeProp.price}$</p>
            <p className="mb-6 text-body">{shoeProp.shortDescription}</p>
            <button href="#" className="cursor-pointer inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Add to cart
                <i className="ml-2 fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    )
}
