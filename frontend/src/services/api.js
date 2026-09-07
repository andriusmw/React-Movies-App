require('dotenv').config();

const REACT_APP_API_KEY = process.env.API_KEY;
const REACT_APP_BASE_URL = process.env.BASE_URL;

export const getPopularMovies = async () => {
    const response = await fetch(
        `${REACT_APP_BASE_URL}/movie/popular?api_key=${REACT_APP_API_KEY}`);
    const data = await response.json()
    // console.log(data) to see how the data is returned, with what structure
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(
        `${REACT_APP_BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    // console.log(data) to see how the data is returned, with what structure
    return data.results
}




