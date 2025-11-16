import React, { useState} from 'react'
import Header from "./components/Header/Header"
import HeroBanner from "./components/HeroBanner/HeroBanner"
import ShoesStore from "./components/ShoesStore"

export default function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const onGetTotalQuantity = (quantity) => {
    setTotalQuantity(quantity);
  }
  
  return (
    <div>
      <Header totalQuantityProp={totalQuantity} />
      <HeroBanner />
      <ShoesStore onGetTotalQuantityProp={onGetTotalQuantity} />
    </div>
  )
}

