import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import UserLogin from './components/UserLogin';
import HomePage from './components/HomePage';
import UserRegister from './components/UserRegister';
import AdminLogin from './components/AdminLogin';
import AdminRegister from './components/AdminRegister';
import AdminHomePage from './components/AdminHomePage';
import Error from './components/Error';
import Security from './components/Security';
import UserHomePage from './components/UserHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/userlogin' element={<UserLogin/>}></Route>
          <Route path='/userregister' element={<UserRegister/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/adminregister' element={<AdminRegister/>} />
          <Route path='/userhomepage/*' element={<UserHomePage/>} />
          <Route path='/adminhomepage/*' element={<Security Child={AdminHomePage}/>}/>
          <Route path='/*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
