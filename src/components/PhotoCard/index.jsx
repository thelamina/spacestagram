import { useState } from 'react';
import dayjs from 'dayjs';

export const PhotoCard = ({ photo, toggleFav, isInFav }) => {
	const [showMoreBtn, setShowMoreBtn] = useState(false);
	const {
		copyright,
		date,
		explanation,
		hdurl,
		media_type,

		title,
		thumbnail_url,
		url,
	} = photo;
	let favClass =
		'bg-red-700 text-white absolute rounded-full w-12 h-12 right-8 -top-6 transition-all';
	return (
		<div className='overflow-hidden shadow-lg rounded-2xl h-full w-full  m-auto'>
			<div
				className='relative h-60 w-full flex flex-col justify-center items-center'
				onMouseOver={() => {
					setShowMoreBtn(true);
				}}
				onMouseLeave={() => {
					setShowMoreBtn(false);
				}}
			>
				<img
					alt={title}
					src={media_type === 'video' ? thumbnail_url : url}
					className='rounded-t-lg hover:scale-125 transition-all duration-300 ease-in-out h-60 w-full object-cover bg-gray-300'
				/>
				{showMoreBtn && (
					<a
						href={media_type === 'video' ? url : hdurl}
						target='_blank'
						rel='noopener noreferrer'
						className='absolute z-10 bg-red-100 border-white hover:text-white hover:bg-red-700 text-red-700 font-medium py-2 px-4 border rounded-sm'
					>
						<span className='px-2'>
							{media_type === 'video' ? 'See Video' : 'View HD'}
						</span>
					</a>
				)}
			</div>
			<div className='bg-white w-full p-4 relative'>
				<button
					aria-label='Go to article'
					type='button'
					onClick={(e) => {
						e.preventDefault();
						toggleFav();
					}}
					className={
						isInFav()
							? favClass
							: ` bg-white text-red-700 absolute rounded-full w-12 h-12 right-8 -top-6 transition-all`
					}
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 16 14'
						className='h-5 w-5  mx-auto'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.4468 0.959367C12.7437 -0.490633 10.1968 -0.250008 8.61558 1.38124L7.99996 2.01874L7.38433 1.38437C6.10933 0.0656173 3.53746 -0.728133 1.55308 0.959367C-0.409419 2.63437 -0.512544 5.64062 1.24371 7.45312L7.29058 13.6969C7.48433 13.8969 7.74058 14 7.99683 14C8.25308 14 8.50933 13.9 8.70308 13.6969L14.75 7.45312C16.5125 5.64062 16.4093 2.63437 14.4468 0.959367ZM14.0375 6.75937L8.01246 13.0031L1.96246 6.75937C0.762456 5.52187 0.512456 3.16249 2.20308 1.72187C3.91558 0.259367 5.92808 1.31874 6.66558 2.08124L7.99996 3.45937L9.33433 2.08124C10.0593 1.33124 12.0906 0.268742 13.7968 1.72187C15.4843 3.15937 15.2375 5.51874 14.0375 6.75937Z'
							fill={isInFav() ? '#fff' : 'red'}
						/>
					</svg>
				</button>
				<div className=''>
					<div className=''>
						<p className='text-gray-800 text-xl text-capitalize font-semibold my-2'>
							{title}
						</p>
						<p className='inline-block text-sm mb-2 mr-2 font-medium text-gray-500 '>
							{dayjs(date).format('MMM DD, YYYY')}
						</p>
						<p className='text-gray-500 text-sm font-normal leading-relaxed mt-4'>
							{explanation}
						</p>
					</div>
					<div className='flex flex-wrap justify-between items-center mt-6'>
						<p className='text-sm mb-2 py-1.5  text-gray-600 italic'>
							&copy; {copyright}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
