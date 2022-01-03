import React  from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import CountryPage from './pages/CountryPage'

function App() {

  return(
    <main className='m-auto bg-grey-955 dark:bg-blue-955 min-h-screen transition-colors ease-in-out duration-1000'>

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:code" element={<CountryPage />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>

    </main>
  )
}


export default App