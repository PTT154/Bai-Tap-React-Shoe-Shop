import React from 'react'
import { useState } from "react"
import ProductList from "./ProductList"
import data from "../../data/data.json"

export default function ShoesStore() {
  const [shoesList, setShoesList] = useState(data);

  return (
    <div className="py-10">
      <div className="container mx-auto max-w-7xl">
        <ProductList shoesListProp={shoesList} />
      </div>
    </div>
  )
}
