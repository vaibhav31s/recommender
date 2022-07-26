import React, { useState, useEffect } from 'react'
import Search from '../search/Search'
import Cards from '../card/Cards'
import { useLocation } from 'react-router-dom'

const SearchResult = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    console.log(url)
    console.log(location.state.input)
    fetch(url + "/product/search?searchKey=" + location.state.input)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let test=[];
        for (var i = 0; i < 12; i++) {
          test.push(data[i]);
        }
        setData(test);
      })
  }, [])

  return (
    <div>
      <Search />

      <div className='topoffer-container' id='top-offers'>
        <div className="card-wrapper">
          {
              data.map((pack,id)=>{
                return(
                  <Cards key={id}/>
                )
              })
          }
          {/* {
            

[...const n = 8;

[...Array(n)].map((elementInArray, index) => ( 
    <div className="" key={i}> Whatever needs to be rendered repeatedly </div> 
    ) 
)(8)].map((data, i) => ( 
    <div className="" key={i}> Whatever needs to be rendered repeatedly </div> 
    ) 
)
          } */}
        </div>
      </div>
    </div>
  )
}

export default SearchResult