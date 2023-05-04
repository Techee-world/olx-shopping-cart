import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Popup from '../Components/popup/Popup';


function Home({heart,addToCart}) {
  const [popup,setPopup] = useState(false)
  const [popupData,setPopupData] = useState([])

  function popupMassage(datas){
    setPopup(true)
    setPopupData(datas)
  }
  function closeBtn(){
    setPopup(false)
  }
// console.log('img',popupData); 
  return (
        <>
    <div className="homeParentDiv">
        {popup && <Popup closeBtn={closeBtn} 
      popupData={popupData}
        addToCart={addToCart} />}
        
        <Banner />
      {/* <img src="http://www.singaporebikes.com/temp/ubikes/65731_184617476.JPG" alt="" /> */}
        <Posts heart={heart}  popupMassage={popupMassage} />
        <Footer />
        

    </div>
        </>
      )

}

export default Home;
 
