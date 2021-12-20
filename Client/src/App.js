import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import './App.css';

function App() {
  
 
  return (
    
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;