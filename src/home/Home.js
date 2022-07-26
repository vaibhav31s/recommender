import React from 'react'
import Search from '../search/Search'
import Hero from './Hero'
import Recommended from './Recommended'
import TopOffers from './TopOffers'
import Trending from './Trending'
const Home = () => {
  return (
    <>
        <Search />
        <Hero/>
        <TopOffers/><hr />
        <Recommended/><hr />
        <Trending/><hr />
    </>
  )
}

export default Home