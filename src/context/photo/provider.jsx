import React, { createContext, useEffect, useReducer } from 'react';

import {
	photoReducer,
	ADD_TO_FAV_FAIL,
	ADD_TO_FAV_START,
	ADD_TO_FAV_SUCCESS,
	REMOVE_FROM_FAV_FAIL,
	REMOVE_FROM_FAV_START,
	REMOVE_FROM_FAV_SUCCESS,
} from './reducer';

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(photoReducer, {
		error: null,
		loading: false,
		favourites: JSON.parse(localStorage.getItem('favourites')) || [],
	});

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(state.favourites));
	}, [state.favourites]);

	const addPhotoToFav = (photo) => {
		dispatch({ type: ADD_TO_FAV_START });
		try {
			if (isPhotoInFav(photo)) {
				throw new Error('Photo already added to favourites');
			}
			dispatch({ type: ADD_TO_FAV_SUCCESS, payload: photo });
		} catch (error) {
			dispatch({
				type: ADD_TO_FAV_FAIL,
				payload: error,
			});
		}
	};

	const isPhotoInFav = (photo) => {
		return state.favourites.some((fav) => fav.url === photo.url);
	};

	const removePhotoFromFav = (photo) => {
		dispatch({ type: REMOVE_FROM_FAV_START });
		try {
			if (!isPhotoInFav(photo)) {
				throw new Error('Photo not found in favourites');
			}
			dispatch({ type: REMOVE_FROM_FAV_SUCCESS, payload: photo });
		} catch (error) {
			dispatch({
				type: REMOVE_FROM_FAV_FAIL,
				payload: error,
			});
		}
	};

	return (
		<PhotoContext.Provider
			value={{
				state,
				addPhotoToFav,
				isPhotoInFav,
				removePhotoFromFav,
			}}
		>
			{children}
		</PhotoContext.Provider>
	);
};
