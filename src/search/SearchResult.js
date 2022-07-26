import React from 'react'
import Search from '../search/Search'
import Cards from '../card/Cards'
const SearchResult = () => {
  return (
    <div>
      <Search />

      <div className='topoffer-container' id='top-offers'>
        <div className="card-wrapper">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default SearchResult