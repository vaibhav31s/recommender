import React from 'react'
import Cards from '../card/Cards'
import './recommendations.css'
import StarRating from 'react-svg-star-rating'
const Recommendations = () => {
  return (
   <div class="s">
    
  <div class="row">
    <div class="col-sm">
    <img  class="img1"  width="500" height="600" src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

    </div>
        <div class="col-sm">
      
          <h1>Title of the</h1>
          
          <h1>Rating : 5 <i class="fa-solid fa-star " ></i></h1>
     
     
          <h1> Price  :  123123$</h1>


    <div class="center">
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Buy Now</span>
      </button>
  
  </div>
    </div>
  </div>


  <div>
  <h3>Recommendations</h3>
  <div class="row">
              <div class="col-sm">
                <Cards></Cards>
              </div>
              <div class="col-sm">
              <Cards></Cards>
              </div>
              <div class="col-sm">
                           <Cards></Cards>

              </div>    
              <div class="col-sm">
                           <Cards></Cards>
              </div>
    </div>
    <h3>User May Like this </h3>
  <div class="row">
              <div class="col-sm">
                <Cards></Cards>
              </div>
              <div class="col-sm">
              <Cards></Cards>
              </div>
              <div class="col-sm">
                           <Cards></Cards>

              </div>    
              <div class="col-sm">
                           <Cards></Cards>
              </div>
    </div>
     </div>
    </div>
  )
}

export default Recommendations