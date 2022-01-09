export const ADD_TO_FAV_START = 'ADD_TO_FAV_START';
export const ADD_TO_FAV_FAIL = 'ADD_TO_FAV_FAIL';
export const ADD_TO_FAV_SUCCESS = 'ADD_TO_FAV_SUCCESS';
export const REMOVE_FROM_FAV_START = 'REMOVE_FROM_FAV_START';
export const REMOVE_FROM_FAV_FAIL = 'REMOVE_FROM_FAV_FAIL';
export const REMOVE_FROM_FAV_SUCCESS = 'REMOVE_FROM_FAV_SUCCESS';

export const photoReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_FAV_START:
			return {
				...state,
				loading: true,
			};
		case ADD_TO_FAV_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				favourites: [...state.favourites, action.payload],
			};
		case ADD_TO_FAV_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case REMOVE_FROM_FAV_START:
			return {
				...state,
				loading: true,
			};
		case REMOVE_FROM_FAV_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				favourites: state.favourites.filter(
					(fav) => fav.url !== action.payload.url
				),
			};
		case REMOVE_FROM_FAV_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
