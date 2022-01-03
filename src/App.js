import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { AuthProvider } from './AuthProvider/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import AllProduct from './Pages/Dashboard/AllProduct/AllProduct';
import PrivateRoute from '../src/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import DefaultDashboard from './Pages/Dashboard/DefaultDashboard';
import AllOrders from './Pages/Dashboard/AllOrders/AllOrders';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
            
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            
            <Route exact path='/dashboard' element={<DefaultDashboard />}></Route >
            <Route path='AllOrder' element={<AllOrders />} />
            <Route path='MyOrder' element={<MyOrder />} />
            <Route path='addservice' element={<AddProduct />} />
            <Route path='addreview' element={<AddReview />} />
            <Route path='alluser' element={<AllUser />} />
            <Route path='allservice' element={<AllProduct />} />
          </Route>
          <Route path='services/:serviceId' element={<ServiceDetails />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
