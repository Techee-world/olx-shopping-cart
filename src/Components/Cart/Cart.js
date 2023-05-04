import React, { useContext, useState } from 'react'
import { bikeItems } from '../../ProductsItems/BikeItems'
// import { freshBike } from '../../ProductsItems/freshBike'
import './Cart.css'
import { BikeDetails } from '../../App'
import CartBox from '../CartBox/CartBox'
import { Link } from 'react-router-dom'


function Cart({ qucke, removeAll, length, zero, setQuck }) {
      const [ten, setTen] = useState([...qucke])
      const [zeroo, setZeroo] = useState(bikeItems)
      const [itemData, setItamData] = useState()
      // const [tprice, setTprice] = useState(qucke)
      const one = useContext(BikeDetails)
      const totalPrice = qucke.reduce((acc, item) => {
            return acc + item.price;
      }, 0);
      // console.log('one', tprice);
      // console.log('two', zero);

      function delet(id) {
            console.log('id',id);
            const newList = qucke.filter((item) => item.id !== id)
            // console.log('remove', newList);
            setQuck(newList);
      }

      function removes(itemDt) {

            setQuck([])
      }

      //  const {shoppingCart, actions}= useContext(BikeDetails)
      // const delet =(data)=>{
      //   console.log('delet', data);

      // let filterData=qucke.filter((obj)=>data.id == obj.id)
      // setTen(filterData)
      // }

      return (
            <div className='main'>
                  <div className="sory">

                  </div>
                  <div className='Cart-Container'>
                        <div className='Header'>
                              <h3 className='Heading'>Shopping Cart</h3>
                              <h5 className='Action' onClick={() => removes()}>Remove all</h5>
                        </div>
                        {qucke.map((item) => {
                        return (
                                    <>
                                          <CartBox item={item} delet={delet} zero={zero} />
                                    </>
                              )
                        })}
                        <hr />
                        <div className='checkout'>
                              <div className='total'>
                                    <div>
                                          <div className='Subtotal'>Sub-Total</div>
                                          <div className='items'>{length}</div>
                                    </div>
                                    <div className='total-amount'>{totalPrice}</div>
                              </div>
                              <Link to='/checkOut'><button className='button'>Checkout</button> </Link>
                        </div>
                  </div>
            </div>
      )
}

export default Cart
