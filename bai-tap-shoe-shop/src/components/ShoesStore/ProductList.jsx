import React from 'react'
import ProductItem from "./ProductItem"

export default function ProductList({ shoesListProp, onGetProductToCartProp }) {

  const onGetProductToCart = (shoe) => {
    onGetProductToCartProp(shoe);
  }

  const renderListProduct = () => {
    return shoesListProp.map((shoe) =>
      <ProductItem key={shoe.id} shoeProp={shoe} onGetProductToCartProp={onGetProductToCart} />
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-12">OUR PRODUCT</h1>
      <div className="grid grid-cols-3 gap-8">
        {renderListProduct()}
      </div>

    </div>
  )
}
