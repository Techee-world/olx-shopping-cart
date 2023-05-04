import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import LaptopProduct from './Components/All-Products/LaptopProductOnly/LaptopProduct'
import Signup from './Components/Signup/Signup';
import Create from './Components/Create/Create';
import PopupPage from './Pages/PopupPage';
import Popup from './Components/popup/Popup';
import CarProduct from './Components/CarProduct/CarProduct'
import AllProducts from './Components/All-Products/AllProducts';
import BikeProductsOnly from './Components/BikeProducts/BikeProductsOnly';
import PhoneProductOnly from './Components/PhoneProducts/PhoneProductsOnly'
import CheckOut from './Pages/CheckOut/CheckOut';
import './App.css';


export const BikeDetails = React.createContext()

function App() {
    const [qucke, setQuck] = useState([])
    const [bikePop, setBikePop] = useState(false)
    const [popupData, setPopupData] = useState([])

    function bikeClickPopup(itemsDatas) {
        setBikePop(true)
        setPopupData(itemsDatas)
    }
    function closeBtn() {
        setBikePop(false)
    }

    const heart = (img, name, price, id) => {
        setQuck([
            ...qucke,
            {
                img: img,
                name: name,
                price: price,
                id: id
            }
        ])
    }
    function addToCart(img, name, price, id) {
        setQuck([
            ...qucke,
            {
                img: img,
                name: name,
                price: price,
                id: id
            }])

    }

    const removeAll = () => {
        setQuck([])
    }
   
    return (
        <div>
            {bikePop && <Popup closeBtn={closeBtn} popupData={popupData} addToCart={addToCart} />}
            <Router>
                <Header length={qucke.length}  />
                <PopupPage />
                <Routes>
                    <Route path='/' element={<Home heart={heart} addToCart={addToCart} />} />
                    <Route path='/products' element={<AllProducts heart={heart} />} />
                    <Route path='/laptop' element={<LaptopProduct heart={heart} bikeClickPopup={bikeClickPopup} />} />
                    <Route path='/bike' element={<BikeProductsOnly heart={heart} bikeClickPopup={bikeClickPopup} />} />
                    <Route path='/phone' element={<PhoneProductOnly heart={heart} bikeClickPopup={bikeClickPopup} />} />
                    <Route path='/car' element={<CarProduct heart={heart} bikeClickPopup={bikeClickPopup} />} />
                    <Route path='/checkOut' element={<CheckOut />} />
                    <Route path='/cart' element={
                        <BikeDetails.Provider value={qucke}>
                            <CartPage qucke={qucke} removeAll={removeAll} setQuck={setQuck} length={qucke.length}  />
                        </BikeDetails.Provider>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/create' element={<Create />} />
                </Routes>
            </Router>


        </div>
    );
}

export default App
