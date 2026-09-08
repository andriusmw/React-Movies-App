const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

//----------------------------GET POPULAR MOVIES -------------------------

export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
     console.log(data)  //to see how the data is returned, with what structure
    return data.results
}

//---------------------------SEARCH MOVIES -------------------------------------

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    // console.log(data) to see how the data is returned, with what structure
    return data.results
}

//------------------------------ GET MOVIE DETAILS ------------------------------

export const getMovieDetails = async (id) => {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const dataDetails = await response.json()
    // console.log(data) to see how the data is returned, with what structure
    return dataDetails
}


