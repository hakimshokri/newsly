import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import NewsCategory from './pages/NewsCategory'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ToastContainer />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<Home />} />
          <Route path='/news/:category' element={<NewsCategory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App