import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import Home from './Pages/Home'
import Authentication from './Pages/Authentication'
import Registration from './Pages/Register'
import SearchPanel from './Pages/SearchPanel'
import AdminPanel from './Pages/AdminPanel'


function App() {
  const [count, setCount] = useState(0)
  const {user} = useAuth();

  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Authentication/>} />
    <Route path="/register" element={<Registration/>} />
    <Route path="/admin" element={user?.role === "admin" ? <AdminPanel/> : <Navigate to="/"/>} />
    <Route path="/register" element={user ? <SearchPanel/> : <Navigate to="/"/>} />
  </Routes>
</Router>
    </>
  )
}

export default App