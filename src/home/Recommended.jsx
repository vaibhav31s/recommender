import React from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
const Recommended = () => {
	return (
		<div className='topoffer-container' id='trending'>
			<div className="header-wrapper">
				<h1>Recommended for <span style={{"color":"#007bff"}}>YOU</span></h1>
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

export default Recommended