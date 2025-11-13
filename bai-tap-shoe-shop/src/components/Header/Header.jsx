import React from 'react'

export default function Header() {
  return (
    <header className="bg-black py-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-around">
        <img className="h-10" src="/public/Adidas-Logo.png" alt="adidas-white-logo.png"/>
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
        <button className="text-white text-xl cursor-pointer">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>

      </div>
    </header>
  )
}
