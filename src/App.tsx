import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
