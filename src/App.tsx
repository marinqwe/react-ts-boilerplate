import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Page } from 'components/Page'
import { Home, About, Login, Register } from 'pages'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Page />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
