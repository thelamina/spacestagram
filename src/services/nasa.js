import axios from 'axios';

export const getAstronomyPictureOfTheDay = async ({ start_date, end_date }) => {
	try {
		const response = await axios.get(
			`https://api.nasa.gov/planetary/apod`,
			{
				params: {
					api_key: process.env.REACT_APP_NASA_API_KEY,
					start_date,
					end_date,
					thumbs: true,
				},
			}
		);
		return response.data;
	} catch (error) {
		const err = error?.response.data.msg || error?.message;
		console.log({ error });
		throw new Error(err);
	}
};
