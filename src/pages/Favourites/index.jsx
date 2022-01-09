import { Link } from 'react-router-dom';
import { PhotoCard, Loader } from '../../components';
import { useFav } from '../../hooks';

const Favourites = () => {
	const {
		state: { favourites, isLoading },
		removePhotoFromFav,
		isPhotoInFav,
	} = useFav();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className='mt-4 px-4 container mx-auto'>
			<h2 className='text-xl font-semibold'>Favourites</h2>

			{favourites.length > 0 ? (
				<div className='mt-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4'>
					{favourites.map((photo) => (
						<PhotoCard
							key={photo.url}
							photo={photo}
							isInFav={() => isPhotoInFav(photo)}
							toggleFav={() => removePhotoFromFav(photo)}
						/>
					))}
				</div>
			) : (
				<div className='w-full mt-24 text-center'>
					<p className='mb-4'>
						You don't have any favourite photo(s)
					</p>
					<Link to='/'>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Add photo(s) to favourites
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Favourites;
