import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './pages/signup'
import Signin from "./pages/signin"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
          <Route path="/" element={<h1>Social</h1>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
