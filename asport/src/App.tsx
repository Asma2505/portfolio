import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer"
import Home from './components/Home';


const App: React.FC = () => {
  useEffect(() => {
    const preventRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    const preventDevTools = (e: KeyboardEvent) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventRightClick);
    window.addEventListener("keydown", preventDevTools);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
      window.removeEventListener("keydown", preventDevTools);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
