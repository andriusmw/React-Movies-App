import { useState } from 'react'
import MovieCard from './components/MovieCard'
import MovieDetailsPage from './pages/details'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import '../src/css/App.css'

function App() {
 

  return (
    <div>
      <NavBar />
    
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
         <Route path='/movie/detail/:id' element={<MovieDetailsPage />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
