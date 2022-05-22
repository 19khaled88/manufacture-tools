import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import OrderPage from './components/Order/OrderPage'
import { Navbar } from './components/Shared/Navbar/Navbar'


function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/order" element={<OrderPage></OrderPage>}/>
          </Routes>
      </div>
   
  )
}

export default App
