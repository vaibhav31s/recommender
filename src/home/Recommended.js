import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './recommended.json'
const Recommended = () => {
	return (
		<div className='topoffer-container' id='trending'>
			<div className="header-wrapper">
				<h1>Recommended for <span style={{ "color": "#007bff" }}>YOU</span></h1>
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

export default Recommended