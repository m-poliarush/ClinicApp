import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './Context/AuthContext'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
//import SearchPanel from './Pages/SearchPanel'
//import AdminPanel from './Pages/AdminPanel'
import Authentication from './Pages/Authentication'


function App() {
  const [count, setCount] = useState(0)
  const {user} = useAuth();

  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Authentication/>} /> 
   <Route path="/register" element={<Registration/>} />
    {/*<Route path="/admin" element={user?.role === "admin" ? <AdminPanel/> : <Navigate to="/"/>} />*/}
    {/*<Route path="/search" element={user ? <SearchPanel/> : <Navigate to="/"/>} />*/}
    {/*<Route path="/login" element={<Authentication/>} />*/}
  </Routes>
</Router>
    </>
  )
}

export default App