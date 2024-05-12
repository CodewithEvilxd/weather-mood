export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

