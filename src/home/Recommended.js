import React, { useState, useEffect } from 'react'
import './topoffers.css'
import Cards from '../card/Cards'
import data from './recommended.json'
const Recommended = ({data}) => {
	const [pack, setPack] = useState([]);
	const url = process.env.REACT_APP_RECOMMEND_URL;

	useEffect(() => {
			fetch(url + "?productId=" + pack.productId)
				.then(res => res.json())
				.then(data => {
					setPack(data);
				})
	}, [])

	return (
		<div className='topoffer-container' id='recommended'>
			<div className="header-wrapper">
				<h1>Recommended for <span style={{ "color": "#007bff" }}>YOU</span></h1>
			</div>
			<div className="card-wrapper">
				{
					(pack
						? pack : data).map((pack, id) => {
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