import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import ProductList from "./ProductList"
import Cart from "./Cart"

import data from "../../data/data.json"

export default function ShoesStore({ onGetTotalQuantityProp }) {
  const [shoesList, setShoesList] = useState(data);

  const [cartList, setCartList] = useState([]);

  const findIndexCartItem = (id) => {
    return cartList.findIndex((cartItem) => cartItem.id === id);
  }

  // Add product to cart
  const onGetProductToCart = (shoe) => {
    let newCartList = [...cartList]

    const productAddToCart = {
      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      image: shoe.image,
      quantity: 1,
    }

    // Tìm sản phẩm đã tồn tại trong giỏ hàng và +1 quantity cho sản phẩm đó
    const index = findIndexCartItem(productAddToCart.id);

    if (index !== -1) { //đã có sản phẩm tồn tại trong giỏ hàng
      newCartList[index].quantity += 1;
    } else { //chưa có sản phẩm này trong giỏ hàng 
      newCartList.push(productAddToCart);
    }
    setCartList(newCartList);
  }

  // Update quantity of a product in the cart
  const onUpdateQuantity = (id, isIncrease) => {
    let newCartList = [...cartList]
    const index = findIndexCartItem(id);

    if (isIncrease) {
      newCartList[index].quantity += 1;
    } else {
      newCartList[index].quantity -= 1;
      if (newCartList[index].quantity === 0) {
        //delete sản phẩm ra khỏi mảng khi số lượng = 0
        newCartList = newCartList.filter((cartItem) => cartItem.id !== id)
      }
    }
    setCartList(newCartList);
  }

  // delete item from cart
  const onDeleteItem = (id) => {
    let newCartList = cartList.filter((cartItem) => cartItem.id !== id);
    setCartList(newCartList);
  }

  //Clear all items from cart
  const onClearCart = () => {
    setCartList([]);
  }

  //Checkout cart
  const onCheckoutCart = () => {
    setCartList([]);
    alert("Checkout successful!" + " Thank you for your purchase.");
    document.getElementById("close-modal").click();
  }

  // Calculate total quantity
  const totalQuantity = cartList.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    onGetTotalQuantityProp(totalQuantity);
  }, [totalQuantity, onGetTotalQuantityProp]);

  // Calculate subtotal
  const subTotal = cartList.reduce((total, item) => total + item.price * item.quantity, 0);

  // setLocalStorage
  const setLocalStorage = () => {
    const dataString = JSON.stringify(cartList);
    localStorage.setItem("cartList", dataString);
  }

  const getLocalStorage = () => {
    const dataString = localStorage.getItem("cartList");
    if (dataString) {
      const dataJon = JSON.parse(dataString);
      setCartList(dataJon);
    }
  }
  // Đọc localStorage khi component mount (lần đầu render)
  useEffect(() => {
    getLocalStorage();
  }, []);

  // Ghi localStorage khi cartList thay đổi
  useEffect(() => {
    setLocalStorage();
  }, [cartList]);

  return (
    <div className="py-10">
      <div className="container mx-auto max-w-7xl">
        <ProductList shoesListProp={shoesList} onGetProductToCartProp={onGetProductToCart} />
      </div>

      <Cart cartListProp={cartList}
        onUpdateQuantityProp={onUpdateQuantity}
        onDeleteItemProp={onDeleteItem}
        onClearCartProp={onClearCart}
        onCheckoutCartProp={onCheckoutCart}
        totalQuantityProp={totalQuantity}
        subTotalProp={subTotal} />
    </div>
  )
}
