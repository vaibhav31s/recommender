import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
const Trending = () => {
	return (
		<div className='topoffer-container' id='trending'>
			<div className="header-wrapper">
				<h1>Trending</h1>
			</div>
			<div className="card-wrapper">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	)
}

export default Trending