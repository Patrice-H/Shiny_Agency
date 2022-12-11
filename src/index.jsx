import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/context';
import { SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Freelances from './pages/Freelances';
import Results from './pages/Results';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/survey/:questionPage" element={<Survey />}></Route>
            <Route path="/freelances" element={<Freelances />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/profile/:profileId" element={<Profile />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
