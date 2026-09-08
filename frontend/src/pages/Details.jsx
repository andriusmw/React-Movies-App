  import { use } from "react";
import { useParams } from 'react-router-dom';
  import { useState, useEffect } from "react"
import { getMovieDetails } from "../services/api"
  
  function MovieDetailsPage() {
      //-----------------STATES,Vars and consts ------------------
      const { id } = useParams();
      const [movieDetails,setMovieDetails] = useState([]);
      const [error,setError] = useState(null);
      const [loading,setLoading] = useState(true);
  
  
  
  
  //--------------- Functions ---------------------------
    useEffect(() => {
        const loadMovieDetails = async () => {
            setLoading(true)
            try {
                const MovieDetailsFunc = await getMovieDetails(id)
                setMovieDetails(MovieDetailsFunc)
                console.log(movieDetails)
                setLoading(false)
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
    }, [])

    return <>

    
    
    </>
      }

    export default MovieDetailsPage;