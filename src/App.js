import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Quiz from './component/Quiz';
import Learn from './component/Learn';

function App() {
  
  return (
    <div className="App">  
      <Routes component="span">
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
      </Routes>
</div>
)
}

export default App