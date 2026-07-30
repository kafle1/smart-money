import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContext from './context/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function getStoredUser() {
  const stored = sessionStorage.getItem('user')
  return stored ? JSON.parse(stored) : null
}

function App() {
  const [user, setUser] = useState(getStoredUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
