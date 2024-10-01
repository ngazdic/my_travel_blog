import { useState } from 'react';
import Nav from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Data from './data.jsx';

function App() {
	const newData = Data.map((item) => {
		return (
			<Card
				key={item.id}
				img={item.titleImg}
				location={item.location}
				date={item.date}
				description={item.description}
			/>
		);
	});

	return (
		<div className='container'>
			<Nav />
			<div className='row'>{newData}</div>
		</div>
	);
}

export default App;
