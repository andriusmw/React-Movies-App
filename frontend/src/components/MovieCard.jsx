import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
       <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavClick}> ♥ </button>
       </div>
       <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
       </div>
      
    </div>  

}


export default MovieCard
