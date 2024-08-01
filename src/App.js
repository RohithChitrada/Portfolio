import React,{ useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      setIsDarkTheme(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
      return newTheme;
    });
  };
  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };


  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Router>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme}/>
      <Routes>
        <Route path='/' element={<Home isDarkTheme={isDarkTheme} />} />
        <Route path='/about' element={<About isDarkTheme={isDarkTheme}/>} />
        <Route path='/skills' element={<Skills isDarkTheme={isDarkTheme} />} />
        <Route path='/projects' element={<Project isDarkTheme={isDarkTheme} />} />
        <Route path='/contact' element={<Contact isDarkTheme={isDarkTheme} />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
