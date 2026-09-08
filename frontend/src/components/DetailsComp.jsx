import "../css/MovieCard.css"

      



function DetailsComp({movieDetails}) {

    function onFavClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
             <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movie.title} />
        </div>
       <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavClick}> ♥ </button>
       </div>
       <div className="movie-info">
              <h3>{movieDetails.title}</h3>
              <p>{movieDetails.release_date?.split("-")[0]}</p>
              <p>{movieDetails.sinopsis}  </p>
              <p>{movieDetails.rating}  </p>
       </div>
      
    </div>  

}


export default DetailsComp
