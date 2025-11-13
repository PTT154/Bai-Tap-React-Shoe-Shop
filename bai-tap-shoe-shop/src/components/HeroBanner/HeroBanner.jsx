import React from 'react'

export default function HeroBanner() {
    return (
        <div className="pt-[72px]">
            <img className="object-cover w-full h-[calc(100vh-72px)]" src="/public/adidas-banner.jpg" alt="adidas-banner.jpg" />

            <div className="absolute top-1/3 left-16 text-white">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Adidas Y3 Collection</h1>
                <p className="text-xl mb-6 drop-shadow-lg">Discover the ultimate sports style with Adidas Y3!</p>
                <button className="cursor-pointer bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
                    Buy now
                </button>
            </div>
        </div>
    )
}
