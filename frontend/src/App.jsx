import { useState } from 'react'
import MovieCard from './components/MovieCard'

import './App.css'

function App() {
 

  return (
    <>
      <MovieCard movie={{title:"Tim's film", year:"1999" , }} />
    </>
  )
}

export default App
