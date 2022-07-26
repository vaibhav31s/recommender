import React from 'react'
import Cards from '../card/Cards'
import './recommendations.css'
import Search from '../search/Search'
import Recommended from '../home/Recommended'
// import StarRating from 'react-svg-star-rating'
const Recommendations = () => {
  return (
    <div class="s">
      <Search/>
      <div class="product_view">
        <div class="product_img">
          <img class="img1" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

        </div>
        <div className="product_detail">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className="desc">
            <h2><span>-90%</span>$42749</h2>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga facere, facilis voluptatem, consequuntur quibusdam aperiam harum sint dolorum deleniti nisi assumenda, molestias amet sit iure vero. Accusamus itaque, quo sequi recusandae sint minus sapiente assumenda.</small><br />

            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span><br />

            <div class="product-bottom-details">
              <div class="product-price"><small>$96.00</small>$230.99</div>
              <div class="product-links">
                <a href=""><i class="fa fa-heart"></i></a>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>


            <div class="services">
              <div class="box-container">

                <div class="box">
                  <i class="fas fa-shipping-fast"></i>
                  <h3>fast delivery</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nam!</p>
                </div>


                <div class="box">
                  <i class="fas fa-undo"></i>
                  <h3>10 days replacement</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nam!</p>
                </div>

                <div class="box">
                  <i class="fas fa-headset"></i>
                  <h3>24 x 7 support</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, nam!</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <Recommended/>

    

      {/* <div>
        <div className="header-wrapper">
          <h1>You May Like this</h1>
        </div>
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
      </div> */}
    </div>
  )
}

export default Recommendations