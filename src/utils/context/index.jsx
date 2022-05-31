import { createContext, useState } from 'react';

const localTheme = () => {
  if (sessionStorage.getItem('theme') === null) {
    sessionStorage.setItem('theme', 'light')
  }
  return sessionStorage.getItem('theme');
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localTheme());
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
