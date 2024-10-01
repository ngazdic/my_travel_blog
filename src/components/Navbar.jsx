import React from 'react';

function Nav() {
	return (
		<nav className='py-2 text-center bg-danger'>
			<div className='container'>
				<a className=' text-white' href='#'>
					<span className='fa-solid fa-earth-americas'></span> my travel
					journal.
				</a>
			</div>
		</nav>
	);
}

export default Nav;
