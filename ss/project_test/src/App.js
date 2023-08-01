import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;