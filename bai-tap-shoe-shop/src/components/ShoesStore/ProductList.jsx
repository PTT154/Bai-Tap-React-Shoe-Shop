import React from 'react'
import ProductItem from "./ProductItem"
import Cart from "./Cart"

export default function ProductList({ shoesListProp }) {
  const renderListProduct = () => {
    return shoesListProp.map((shoe) =>
      <ProductItem key={shoe.id} shoeProp={shoe} />
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12">OUR PRODUCT</h1>
      <div className="grid grid-cols-3 gap-8">
        {renderListProduct()}
      </div>

      <Cart />
    </div>
  )
}
