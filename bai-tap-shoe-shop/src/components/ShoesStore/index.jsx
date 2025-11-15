import React from 'react'
import { useState } from "react"
import ProductList from "./ProductList"
import Cart from "./Cart"

import data from "../../data/data.json"

export default function ShoesStore() {
  const [shoesList, setShoesList] = useState(data);

  const [cartList, setCartList] = useState([]);

  const onGetProductToCart = (shoe) => {
    let newCartList = [...cartList]

    const productAddToCart = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      image: shoe.image,
      quantity: 1,
    }

    newCartList.push(productAddToCart);
    setCartList(newCartList);
  }

  const findIndexCartItem = (id) => {
    return cartList.findIndex((cartItem) => cartItem === id);
  }

  const onUpdateQuantity = (id, isIncrease) => {

  }

  return (
    <div className="py-10">
      <div className="container mx-auto max-w-7xl">
        <ProductList shoesListProp={shoesList} onGetProductToCartProp={onGetProductToCart} />
      </div>

      <Cart cartListProp={cartList} />
    </div>
  )
}
