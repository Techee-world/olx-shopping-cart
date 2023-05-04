import React from 'react'
import './Popup.css'
function Popup({ closeBtn, popupData, addToCart }) {

      return (
            <div className='popup'>
                  <div className="popup-content">



                        <div className="popup-contetn-data">
                              <div className="popup-img">
                                    <img src={popupData.img} alt="" />
                                    <p> <b>About Bike :</b> bicycle, also called bike, two-wheeled steerable machine that is pedaled by the rider’s feet. On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork. The rider sits on a saddle and steers by leaning and turning handlebars that are attached to the fork. The feet turn pedals attached to cranks and a chainwheel. Power is transmitted by a loop of chain connecting the chainwheel to a sprocket on the rear wheel. Riding is easily mastered, and bikes can be ridden with little effort at 16–24 km (10–15 miles) per hour—about four to five times the pace of walking. The bicycle is the most efficient means yet devised to convert human energy into mobility.</p>
                              </div>
                              <h2>{popupData.name}</h2>
                              <span className='price'>PRICE: {popupData.price}</span>
                              <ul>
                                    <li>warranty is available</li>
                                    <li>  working is smoot</li>
                                    <li> standerd accessories</li>
                                    <li> conditon  very perfect</li>
                              </ul>
                              <button onClick={() => addToCart(popupData.img, popupData.name, popupData.price, popupData.id)} className='btnn'>Add to cart</button>
                              <h3 onClick={() => closeBtn()} className='close'>Close</h3>
                        </div>


                  </div>
            </div>
      )
}

export default Popup
