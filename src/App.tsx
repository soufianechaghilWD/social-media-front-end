import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './pages/signup'
import Signin from "./pages/signin"
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
