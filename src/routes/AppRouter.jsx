import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '../components';

const PhotoList = lazy(() => import('../pages/PhotoList'));
const Favourites = lazy(() => import('../pages/Favourites'));

export const AppRouter = () => {
	return (
		<Suspense
			fallback={
				<Loader title='remember to drink water 😊' height='60vh' />
			}
		>
			<Routes>
				<Route path='/' element={<PhotoList />} />
				<Route path='favs' element={<Favourites />} />
			</Routes>
		</Suspense>
	);
};
