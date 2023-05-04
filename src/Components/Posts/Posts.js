import React from 'react';
import { bikeItems } from '../../ProductsItems/BikeItems'
import { freshBike } from '../../ProductsItems/freshBike';
import Heart from '../../assets/Heart';
// import { BikeDetails } from '../../App';
import './Post.css';



function Posts({heart,popupMassage}) {


// const bike= useContext(BikeDetails)
 

  return (
    <div className="postParentDiv">
  
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {bikeItems.map((item,index) => {
            if(index<8){

              return (
                <>
                  <div className="card" >
                    <div className="favorite" >
                    <svg onClick={()=>heart(item.img,item.name,item.price,item.id)} fill="red" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path> </g></svg>
                 
                    </div>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {item.price} </p>
                      <span className="kilometer">{item.wheel}</span>
                      <h6>{item.name}</h6>  
                    <div className="date">
                     <span>{item.date}</span>
                    </div>
                    </div>
                    <p onClick={()=>popupMassage(item)} className='more'>More Details</p>
                  </div>
                </>
              )
            }
          })}
        </div>
      </div>

    

      <div className="moreView">
        <div className="heading">
          <span>fresh recommendations</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {freshBike.map((item,index) => {
            if(index<8){

              return (
                <>
                  <div className="card" >
                    <div className="favorite" >
                    <svg onClick={()=>heart(item.img,item.name,item.price,item.id)} fill="red" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path> </g></svg>
                 
                    </div>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9; {item.price} </p>
                      <span className="kilometer">{item.wheel}</span>
                      <h6>{item.name}</h6>  
                    <div className="date">
                     <span>{item.date}</span>
                    </div>
                    </div>
                    <p onClick={()=>popupMassage(item)} className='more'>More Details</p>
                  </div>
                </>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
