import React, { useState } from 'react';
import './search.css';
import { Link } from 'react-router-dom';
import List from './List'
import data from "./ListData.json"
import { BsSearch } from 'react-icons/bs'
function Search({ details }) {

    const [searchField, setSearchField] = useState("");

    const handleChange = e => {
        // setSearchField(e.target.value);
    };

    return (
        <div className="search-container">
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" list='input' placeholder='search'/>
                        {/* <List/> */}
                        <datalist id="input">
                            {
                                data.map((item)=>{
                                    return(
                                        <option value={item.text}>{item.text}</option>
                                    )
                                })
                            }
                        </datalist>



                    </div>
                    <Link className="btn btn-primary" to="/search">
                        <BsSearch />
                    </Link>
                </div>
        </div>
    );
}

export default Search;