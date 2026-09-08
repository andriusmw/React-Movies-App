import { use } from "react"
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home() {
    //-----------------STATES,Vars and consts ------------------
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

 
    //--------------- Functions ---------------------------
    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true)
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                setLoading(false)
                setError(null)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
                setLoading(false)
            } finally {
                setLoading(false)
                
            }
        }
        loadPopularMovies()
    }, [])



    const HandleSearch = async (e) => {
         e.preventDefault()
        if(!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setLoading(false)
            setError(null)
        } catch (err) {
                console.log(err)
                setError("Failed to search...")
                setLoading(false)
        } finally {
            setLoading(false)
            
        }


       //setSearchQuery("");
    }



    return <div className="home">
        <form onSubmit={HandleSearch} className="search-form">
            <input type="text" placeholder="search for movies..." 
            className="search-input" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}>
            </input>
            <button type="submit" className="search-btn">Search</button>
        </form>


        {error && <div className="error-message"> {error} </div>}


        {loading ? (
        <div className="loading">Loading...</div> 
        ) :  ( 
        <div className="movies-grid">
            {movies.map(movie => 
            //Continional rendering && means show the next "(content)" if the condition is true
            movie.title.toLowerCase().includes(searchQuery) && (
            <MovieCard movie={movie} key={movie.id} /> )
            )
            }
        </div> ) }
       
    </div>
}

export default Home;