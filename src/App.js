import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/home/Home'
import List from './pages/lists/List'

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App