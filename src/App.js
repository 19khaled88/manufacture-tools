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
import RequiredAdmin from './components/Auth/requiredAdmin'
import Blogs from './components/Blog/Blogs'
import useAdmin from './components/CustorHook/useAdmin'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from './components/DB/firebase.init'
import AdminProductUpdate from './components/Dashboard/AdminProductUpdate'
import Payment from './components/Dashboard/Payment'
const queryClient = new QueryClient()

function App() {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/blog" element={<Blogs></Blogs>} />

          <Route
            path="/purchase"
            element={
              <RequiredAuth>
                <Purchase></Purchase>
              </RequiredAuth>
            }
          />
          {admin && (
            <Route
              path="/adminProductUpdate"
              element={<AdminProductUpdate></AdminProductUpdate>}
            />
          )}
          <Route path="/payment" element={<Payment></Payment>} />
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
            <Route
              path="addproduct"
              element={
                <RequiredAdmin>
                  <AddProduct></AddProduct>
                </RequiredAdmin>
              }
            />
            <Route path="myorders" element={<MyOrders></MyOrders>} />
            <Route
              path="manageOrder"
              element={
                <RequiredAdmin>
                  <ManageOrders></ManageOrders>
                </RequiredAdmin>
              }
            />
            <Route
              path="users"
              element={
                <RequiredAdmin>
                  <Users></Users>
                </RequiredAdmin>
              }
            />
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
