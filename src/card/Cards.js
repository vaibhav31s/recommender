import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'
const Cards = (props) => {
    const data = props.pack;
    console.log(data)
    return (
        <div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
                <img src={data.image} alt="" />
            </div>
            <div class="product-details">
                <span class="product-catagory">{data.gender+", "+data.articleType}</span>
                <h4><Link to="/product/1">{data.productDisplayName}</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                <div class="product-bottom-details">
                    <div class="product-price"><small>$96.00</small>$230.99</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards