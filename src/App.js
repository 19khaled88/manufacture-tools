import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Auth/Register'
import RequiredAuth from './components/Auth/RequiredAuth'
import AddProduct from './components/Dashboard/AddProduct'
// import Dashboard from './components/Dashboard/Dashboard'

import MyOrders from './components/Dashboard/MyOrders'
import MyProfile from './components/Dashboard/MyProfile'
import MyReviews from './components/Dashboard/MyReviews'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'
import Purchase from './components/Order/Purchase'
import { Navbar } from './components/Shared/Navbar/Navbar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Dashboard1 from './components/Dashboard/Dashboard1'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/purchase"
            element={
              <RequiredAuth>
                <Purchase></Purchase>
              </RequiredAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequiredAuth>
                {/* <Dashboard></Dashboard> */}
                <Dashboard1></Dashboard1>
              </RequiredAuth>
            }
          >
            <Route path="myreview" element={<MyReviews></MyReviews>} />
            <Route path="addproduct" element={<AddProduct></AddProduct>} />
            <Route path="myorders" element={<MyOrders></MyOrders>} />
            <Route index element={<MyProfile></MyProfile>} />
          </Route>
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<Notfound></Notfound>} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
