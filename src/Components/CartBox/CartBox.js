import React, { useState } from 'react'



function CartBox({ item, delet}) {
      const [incre, setIncrea] = useState(1)
      const [price, setPrice] = useState([])
      // const [currentShoppingCart, setShoppingCart] = React.useState([]);

      function increace() {
            setPrice(item.price)

            setIncrea(incre + 1)
      }
      function decreace() {

            setIncrea(incre - 1)
      }

      return (
            <div className='Cart-Items'>
                  <div className='image-box'>
                        <img src={`${item.img}`} style={{ height: '80px' }} alt='' />
                  </div>
                  <div className='about'>
                        <h4 className='title'>{item.name}</h4>
                        <button onClick={() => delet(item.id)}>Delet</button>
                  </div>
                  <div className='counter'>
                        <div className='btn' onClick={increace}>+</div>
                        <div className='count'>{incre}</div>
                        <div className='btn' onClick={decreace}>-</div>
                  </div>
                  <div className='prices'>
                        <div className='amount'>$ {item.price}</div>

                        {/* <div className='save'><u>Save for later</u></div>
            <div className='remove'><u>Remove</u></div> */}
                  </div>
            </div>
      )
}
export default CartBox
