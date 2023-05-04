import React, { useState } from 'react'
import './Allproducts.css'
import BikeProductsOnly from '../BikeProducts/BikeProductsOnly'
// import LaptopProduct from '../All-Products/LaptopProductOnly/LaptopProduct'
import PhoneProductOnly from '../PhoneProducts/PhoneProductsOnly'
import Popup from '../popup/Popup'
import Footer from '../Footer/Footer'
import { laptop } from '../../ProductsItems/LaptopDatas'



function AllProducts({heart}) {
  const [bikePop,setBikePop] = useState(false)
  const [popupData,setPopupData] = useState([])

  console.log('laptop', laptop);

  function bikeClickPopup(itemsDatas){
    setBikePop(true)
    setPopupData(itemsDatas)
   
  }
  function closeBtn(){
    setBikePop(false)
  }



  return (
  <>
{bikePop && <Popup closeBtn={closeBtn} popupData={popupData} /> }
<BikeProductsOnly  bikeClickPopup={bikeClickPopup} heart={heart}  />
{/* <PhoneProductOnly /> */}
<Footer />   
  </>  
  )
}

export default AllProducts

