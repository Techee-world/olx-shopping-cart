import React, { useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Link } from 'react-router-dom';
function Header({length}) {

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
         <Link to='/'><OlxLogo></OlxLogo> </Link> 
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input className='items' style={{border:'none',marginTop:'10px'}} type="text" placeholder='products' />
          
          <Arrow></Arrow>
          
        </div>
        <div className="productSearch">
          <div className="input">           
            <input
              type="text"
              style={{marginTop:'7px'}}
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
       <Link to='/products'> <div className="language">
          <span> All Products </span>
          {/* <Arrow></Arrow> */}
         
        </div></Link>
      <Link to='/cart' > <div className="cart">
          <span>cart <p>{length}</p>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" alt="" />
          </span>
        </div>
        </Link>
       <Link to='/login'>  <div className="loginPage">
          <span>Login</span>
          <hr />
        </div>
        </Link>
       <Link to='/signup'>  <div className="loginPage">
          <span>sign up</span>
          <hr />
        </div>
        </Link>
        

     <Link to='/create' > <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        </Link> 
      </div>
    </div>
  );
}

export default Header;
