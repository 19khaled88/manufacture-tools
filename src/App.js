import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Auth/Register'
import RequiredAuth from './components/Auth/RequiredAuth'
import AddProduct from './components/Dashboard/AddProduct'
import Dashboard1 from './components/Dashboard/Dashboard1'
import Users from './components/Dashboard/Users'
import ManageOrders from './components/Dashboard/ManageOrders'
import ManageProduct from './components/Dashboard/ManageProduct'
// import Dashboard from './components/Dashboard/Dashboard'
import MyOrders from './components/Dashboard/MyOrders'
import MyProfile from './components/Dashboard/MyProfile'
import MyReviews from './components/Dashboard/MyReviews'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'
import Purchase from './components/Order/Purchase'
import { Navbar } from './components/Shared/Navbar/Navbar'
import 'react-toastify/dist/ReactToastify.css'
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
            <Route index element={<MyProfile></MyProfile>} />
            <Route path="myreview" element={<MyReviews></MyReviews>} />
            <Route path="addproduct" element={<AddProduct></AddProduct>} />
            <Route path="myorders" element={<MyOrders></MyOrders>} />
            <Route path="manageOrder" element={<ManageOrders></ManageOrders>} />
            <Route path="users" element={<Users></Users>} />
            <Route
              path="manageProduct"
              element={<ManageProduct></ManageProduct>}
            />
          </Route>
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<Notfound></Notfound>} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
