import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import Error404 from './pages/Error404';

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/survey/:questionPage" element={<Survey />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
