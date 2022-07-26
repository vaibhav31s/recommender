import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './topData.json'
const TopOffers = () => {
	return (
		<div className='topoffer-container' id='top-offers'>
			<div className="header-wrapper">
				<h1>Top Offers</h1>
			</div>
			<div className="card-wrapper">
				{
					data.map((pack, id) => {
						return (
							<Cards pack={pack} key={id} />
						)
					})
				}
			</div>
		</div>
	)
}

export default TopOffers