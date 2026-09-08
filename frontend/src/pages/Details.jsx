import { useParams } from 'react-router-dom';
  import { useState, useEffect } from "react"
  import DetailsComp from "../components/DetailsComp";
import { getMovieDetails } from "../services/api"
  
  function MovieDetailsPage() {
      //-----------------STATES,Vars and consts ------------------
      const { id } = useParams();
      const [movieDetails,setMovieDetails] = useState(null);
      const [error,setError] = useState(null);
      const [loading,setLoading] = useState(true);
  
  
  
  
  //--------------- Functions ---------------------------
    useEffect(() => {
        const loadMovieDetails = async () => {
            setLoading(true)
            try {
                const MovieDetailsFunc = await getMovieDetails(id)
                setMovieDetails(MovieDetailsFunc)
                setError(null)
            } catch (err) {
                console.log(err)
                setError("Failed to load movie details...")
                setLoading(false)
            } finally {
                setLoading(false)
                
            }
        }
        loadMovieDetails()
    }, [id])

    //render the modieDetails state so i can send it updated to the children component
    useEffect(() => {
  console.log('movieDetails updated:', movieDetails);
}, [movieDetails]);


    if (loading) {
      return <p>Loading movie details...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

    return <>

    <DetailsComp
        movieDetails={movieDetails}
    />
   
    </>
      }

    export default MovieDetailsPage;