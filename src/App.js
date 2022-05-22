import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Local server is working, but when hosted on github it will display 404 when refreshing.
          Also typing https://zhiwang20.github.io/project will display not found */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
          {/* local server will not work, but it will be working when hosted on github
          type https://zhiwang20.github.io/#/project will work*/}
          <Route path="#/" element={<Home />} />
          <Route path="#/project" element={<Projects />} />
          <Route path="#/about" element={<About />} />
          <Route path="#/resume" element={<Resume />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          {/* when page not found */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
