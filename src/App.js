import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/NavBar";
import About from "./components/About";
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import projectData from "./assets/project-data.json";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <h1>Hello there! I’m Happy Cheetah, a visual designer who integrates a 
          passion for solving problems and creating art into design, 
          with intention of creating accessible products for everyone.
        </h1>
      </header>
      <body>
        <About></About>
        <h2 className='sectionHeader'>Projects</h2>
        <div className='ProjectData'>
                  {projectData.map((item, index) => (
                    <ProjectCard name={item.name} image={item.image} link={item.link} description={item.description}></ProjectCard>
                  ))}
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;