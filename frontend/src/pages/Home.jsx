import { use } from "react"
import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        {id:"1",title:"John Wick",year:"2014"},
        {id:"2",title:"The Avengers",year:"2012"},
        {id:"3",title:"Iron Man",year:"2008"},
    ]

    const HandleSearch = () => {
        // e.preventDefault()
        alert(searchQuery)
    }



    return <div className="home">
        <form onSubmit={HandleSearch} className="search-form">
            <input type="text" placeholder="search for movies..." 
            className="search-input" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}>
            </input>
            <button type="submit" className="search-btn">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map(movie => 
            //Continional rendering && means show the next "(content)" if the condition is true
            movie.title.toLowerCase().includes(searchQuery) && (
            <MovieCard movie={movie} key={movie.id} /> )
            )
            }
        </div>
    </div>
}

export default Home;