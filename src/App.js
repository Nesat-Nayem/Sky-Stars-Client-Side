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
import Orders from './Pages/Dashboard/Orders/Orders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import AllProduct from './Pages/Dashboard/AllProduct/AllProduct';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
<<<<<<< HEAD
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='orderedproducts' element={<Orders />} />
            <Route path='addservice' element={<AddProduct />} />
            <Route path='addreview' element={<AddReview />} />
            <Route path='alluser' element={<AllUser />} />
            <Route path='allservice' element={<AllProduct />} />
          </Route>
=======
>>>>>>> c3c2413833f86f1c3e87fbe6edec122dab461a5f
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
