import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

const Portfolio = () => {
console.log("Portfolio component rendered");
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <p>Hello! I am a web developer specializing in React and front-end technologies.</p>
      <h2>Projects</h2>
      <ul>
        <li>✅ Portfolio Website</li>
        <li>✅ React E-commerce Site</li>
        <li>✅ API Integration Projects</li>
      </ul>
      {/* <Link to="/test" className="nav-link">Go to Test Page</Link> */}
    </div>
  );
};


function App() {
    console.log("App component rendered");
  return (
    <Portfolio />
  );
}

export default App;
