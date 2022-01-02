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


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* <Route path="*" element={<NotFound />}> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
