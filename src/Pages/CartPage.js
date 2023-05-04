import React from 'react'
import Cart from '../Components/Cart/Cart'

function CartPage({ qucke, removeAll, delet, length, setAll, setQuck }) {

  return (
    <div>
      {/* {setAll.map((zero)=>{

      })} */}
      <Cart qucke={qucke} setQuck={setQuck} removeAll={removeAll} delet={delet} length={length} />
    </div>
  )
}

export default CartPage
