import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
import GoToTop from "./Components/GoToTop";
import DarkMode from "./Components/DarkMode";

const App = () => {
  const [isFakeDark, setIsFakeDark] = useState(true);

  const toggleMode = (e) => {
    e.preventDefault();
    setIsFakeDark(!isFakeDark);
  };

  useEffect(
    function () {
      document.documentElement.classList.toggle("theme-dark");
    },
    [isFakeDark]
  );

  return (
    <>
      <Router>
        <NavBar />
        <DarkMode toggleMode={(e) => toggleMode(e)} />
        <Routes>
          <Route path="/" element={<Home isFakeDark={isFakeDark} />} />
          <Route path="/about" element={<About isFakeDark={isFakeDark} />} />
          <Route path="/menu" element={<Menu isFakeDark={isFakeDark} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <GoToTop />
        <Footer isFakeDark={isFakeDark} />
      </Router>
    </>
  );
};

export default App;
