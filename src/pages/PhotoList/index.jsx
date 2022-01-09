import { useEffect, useState, useCallback } from 'react';
import { Loader, PhotoCard } from '../../components';
import { useFav } from '../../hooks';
import { getAstronomyPictureOfTheDay } from '../../services';
import dayjs from 'dayjs';

const PhotoList = () => {
	const { addPhotoToFav, removePhotoFromFav, isPhotoInFav } = useFav();
	const [photos, setPhotos] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [startDate, setStartDate] = useState(
		dayjs().subtract(1, 'day').format('YYYY-MM-DD')
	);
	const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));

	const getPhotos = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await getAstronomyPictureOfTheDay({
				start_date: startDate,
				end_date: endDate,
			});
			setPhotos(response);
			setError(null);
		} catch (error) {
			setError(error.message);
			setPhotos([]);
		}
		setIsLoading(false);
	}, [startDate, endDate]);

	useEffect(() => {
		getPhotos();
	}, [getPhotos]);

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className='mt-4 p-6 container mx-auto'>
			<div className='flex flex-wrap pb-6 items-center'>
				<div className='mr-4'>
					<label
						className='block p-2 font-medium text-gray-500'
						htmlFor='startDate'
					>
						Start Date
					</label>
					<input
						id='startDate'
						type='date'
						className='inline-block py-3 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input'
						value={startDate}
						onChange={(e) => {
							setStartDate(
								dayjs(e.target.value).format('YYYY-MM-DD')
							);
						}}
					/>
				</div>
				<div>
					<label
						className='block p-2 font-medium text-gray-500'
						htmlFor='endDate'
					>
						End Date
					</label>
					<input
						id='endDate'
						type='date'
						className='inline-block py-3 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input'
						value={endDate}
						onChange={(e) => {
							setEndDate(
								dayjs(e.target.value).format('YYYY-MM-DD')
							);
						}}
					/>
				</div>
			</div>
			{error && (
				<div className='w-full mt-4 text-center'>
					<p className='mb-4'>{error}</p>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={getPhotos}
					>
						Try again
					</button>
				</div>
			)}
			{photos.length > 0 && (
				<>
					<p className='my-4 text-sm font-normal text-gray-400'>
						Showing {photos.length} photo(s) taken between{' '}
						{startDate} and {endDate}
					</p>
					<div className='mt-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
						{photos.map((photo) => (
							<PhotoCard
								key={photo.url}
								photo={photo}
								toggleFav={() => {
									if (isPhotoInFav(photo)) {
										removePhotoFromFav(photo);
									} else {
										addPhotoToFav(photo);
									}
								}}
								isInFav={() => isPhotoInFav(photo)}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default PhotoList;
