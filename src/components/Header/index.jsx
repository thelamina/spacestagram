import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
	let activeClassName = 'text-gray-900 font-semibold text-lg';
	return (
		<header className='w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40'>
			<div className='container relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center'>
				<div className='relative items-center justify-between pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0'>
					<div className='relative p-1'>
						<Link
							to='/'
							className=' text-xl font-bold uppercase text-gray-500 block relative'
						>
							Spacestagram
						</Link>
					</div>
					<div className='relative p-1'>
						<NavLink to='/favs'>
							{({ isActive }) => (
								<span
									className={
										isActive
											? activeClassName
											: 'text-gray-500 block relative font-medium'
									}
								>
									Favourites
								</span>
							)}
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
};
