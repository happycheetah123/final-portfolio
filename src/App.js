import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/NavBar";
import About from "./components/About";
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';


// TODO: CREATE JSON FILE AND IMPORT

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <h1>I’m Happy Cheetah — a visual designer who integrates a passion for solving problems and creating art into design, with intention of creating accessible products for everyone.</h1>
      </header>
      <body>
        <About></About>
        <ProjectCard></ProjectCard>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;