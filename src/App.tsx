import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InfoScreen from './pages/info-screen/info-screen';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>;
         <Route path="/user-info" element={<InfoScreen/>}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
