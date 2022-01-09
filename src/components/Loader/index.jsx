import React from 'react';

export const Loader = ({ title = 'Loading...' }) => {
	return (
		<div className='w-full h-72 flex flex-col justify-center items-center'>
			<div className='animate-ping rounded-full h-6 w-6 border-2 bg-red-300 mb-5' />
			{title}
		</div>
	);
};
