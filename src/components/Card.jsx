import React from 'react';

function Card(props) {
	return (
		<div className='row mb-5' key={props.item.key}>
			<div className='col-12 col-md-2'>
				<img src={`../${props.item.titleImg}`} alt='Mt. Fuji' />
			</div>

			<div className='col-12 col-md-9'>
				<p className='d-inline pr-2 ' style={{ textTransform: 'uppercase' }}>
					<span className='text-danger fa-solid fa-location-dot pr-2'></span>
					{props.item.location}
				</p>
				<a className='text-muted' href={props.item.googleMaps} target='_blank'>
					View on Google maps
				</a>
				<h3 className='pt-3'>{props.item.placeName}</h3>
				<p>
					<b>{props.item.date}</b>
				</p>
				<p>{props.item.description}</p>
			</div>
		</div>
	);
}

export default Card;
