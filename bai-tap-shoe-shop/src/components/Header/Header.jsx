import React from 'react'

export default function Header({ totalQuantityProp }) {
  return (
    <header className="bg-black py-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-around">
        <img className="h-10" src="/public/Adidas-Logo.png" alt="adidas-white-logo.png" />
        <nav>
          <ul className="flex space-x-8 justify-start">
            <li>
              <a href="#" className="text-white font-medium border-b-2 border-white pb-1">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 font-medium hover:text-white">Company</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 font-medium hover:text-white">Marketplace</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 font-medium hover:text-white">Features</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 font-medium hover:text-white">Team</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 font-medium hover:text-white">Contact</a>
            </li>
          </ul>
        </nav>

        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="relative block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          <i className="fa-solid fa-cart-shopping"></i>

          <span className="absolute w-5 h-5 -top-2.5 -right-2.5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full" id="cart-total-quantity">{totalQuantityProp}</span>
        </button>
      </div>
    </header>
  )
}
