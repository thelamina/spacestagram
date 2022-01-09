export * from './nasa';


export const addToFavourites = (photo) => {
    return {
        type: 'ADD_TO_FAVOURITES',
        photo,
    };
}