import React, { useState } from 'react';
import './search.css';
import { Link } from 'react-router-dom';
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
                        <input type="search" id="form1" class="form-control" placeholder='search'/>
                    </div>
                    <Link className="btn btn-primary" to="/search">
                        <BsSearch />
                    </Link>
                </div>
        </div>
    );
}

export default Search;