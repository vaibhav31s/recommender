import React from 'react'
import Cards from '../card/Cards'
import './recommendations.css'
const Recommendations = () => {
  return (
   <div class="s">
  <div class="row">
    <div class="col-sm">
    <img   width="500" height="600" src = "https://renderer.mhme.nu/design/thumbnail/58b36d1a-8f92-4b1a-b7b0-60b133d2bcdf?width=500&update=1658834601221"/>

    </div>
    <div class="col-sm">
        <h1>Description</h1>
        <p>Design Details
Receiving recommendations and feedback from your customers is an important part of evolving as a business. The Recommendation Comment Card from MustHaveMenus gives your customers the opportunity to voice their feedback before they even leave the table. Your restaurant name is displayed on the front in an ornate black frame along with a thank you message. Our easy-design editing software makes it fast and easy to customize the card. Change text, add imagery, switch colors and much more. We know how quick things happen in the restaurant business, so we print and ship next business day.</p>
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
     </div>
    </div>
  )
}

export default Recommendations