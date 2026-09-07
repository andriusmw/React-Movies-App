import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        {id:"1",title:"John Wick",year:"2014"},
        {id:"2",title:"The Avengers",year:"2012"},
        {id:"3",title:"Iron Man",year:"2008"},
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home;