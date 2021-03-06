import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/userdata" element={<HomePage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
