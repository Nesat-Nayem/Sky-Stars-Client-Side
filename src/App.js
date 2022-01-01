import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Register from './Pages/Login/Register/Register';
import { AuthProvider } from './AuthProvider/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
