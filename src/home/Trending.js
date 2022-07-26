import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './trending.json'
const Trending = () => {
	return (
		<div className='topoffer-container' id='trending'>
			<div className="header-wrapper">
				<h1>Trending</h1>
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

export default Trending