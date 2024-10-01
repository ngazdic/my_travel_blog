import React from 'react';

function Card(props) {
	return (
		<div className='row' id={props.key}>
			<div className='col-12 col-md-2'>
				<img src={`../${props.img}`} alt='Mt. Fuji' />
			</div>

			<div className='col-12 col-md-9'>
				<p className='d-inline pr-2 '>
					<span className='fa-solid fa-location-dot pr-2'></span>
					{props.location}
				</p>
				<a className='text-muted' href={props.googleMaps}>
					View on Google maps
				</a>
				<h3 className='pt-3'>Mount fuji</h3>
				<p>
					<b>{props.date}</b>
				</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default Card;
