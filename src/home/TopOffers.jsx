import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
const TopOffers = () => {
	return (
		<div className='topoffer-container' id='top-offers'>
			<div className="header-wrapper">
				<h1>Top Offers</h1>
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

export default TopOffers