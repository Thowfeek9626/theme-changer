import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ThemeProvider} from "./theme-context";

import Navbar from "./components/navbar";
import About from "./pages/about";
import Blog from "./pages/blog";
import Home from "./pages/home";

import "./styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;