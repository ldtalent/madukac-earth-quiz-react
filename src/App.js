import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Quiz from './component/Quiz.js';
import Learn from './component/Learn';
import { createTheme } from '@material-ui/core/styles';
// import ResponsiveAppBar from "./components/NavBar";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const theme = createTheme({
    button: {
      primary: {
        backgroundColor: '#fc4c4e',
      }
    }
   })
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
      </Routes>
      
    
{/* < Home /> */}
</div>
)
}

export default App