import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Auth/Register'
import RequiredAuth from './components/Auth/RequiredAuth'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Purchase from './components/Order/Purchase'
import { Navbar } from './components/Shared/Navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase" element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>
        } />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </div>
  )
}

export default App
