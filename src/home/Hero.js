import React, { useEffect, useRef, useState } from 'react'
import './hero.css'
import Images from "../images/Images"
import Item1 from "../images/Item1.png"
import Item2 from "../images/Item2.png"
import Item3 from "../images/Item3.png"
import { Link } from 'react-router-dom'
// import Shoe from '../images/home-shoe-1.png'
const Hero = () => {

    let slides = document.querySelectorAll(".slide-container");
    let index = 0;

    function next() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    function prev() {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    }

    return (
        <div class="home" id="home">

            <div class="slide-container active">
                <div class="slide">
                    <div class="content">
                        <span>Men's T-Shirt</span>
                        <h3>nike metcon shoes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minus totam consequatur aperiam
                            numquam mollitia a libero, eos nobis! Voluptatum?</p>
                        <Link
                            to={{
                                pathname: "/product/1",
                                state: { img: Item1 }
                            }}
                            className="btn-add_to_cart">View</Link>
                    </div>
                    <div class="image">
                        <img width="200px" src={Item1} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>nike blue shoes</span>
                        <h3>nike metcon shoes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minus totam consequatur aperiam
                            numquam mollitia a libero, eos nobis! Voluptatum?</p>
                        <Link to={{
                                pathname: "/product/1",
                                state: { img: Item2 }
                            }} className="btn-add_to_cart">View</Link>
                    </div>
                    <div class="image">
                        <img src={Item2} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>nike yellow shoes</span>
                        <h3>nike metcon shoes</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia minus totam consequatur aperiam
                            numquam mollitia a libero, eos nobis! Voluptatum?</p>
                        <Link to={{
                                pathname: "/product/1",
                                state: { img: Item3 }
                            }} className="btn-add_to_cart">View</Link>
                    </div>
                    <div class="image">
                        <img src={Item3} class="shoe" alt="" />
                    </div>
                </div>
            </div>

            <div id="prev" class="fas fa-chevron-left" onClick={prev}></div>
            <div id="next" class="fas fa-chevron-right" onClick={next}></div>
        </div>
    )
}

export default Hero