import './App.css';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import { Achievements } from './components/Achievements';
import { ShootingStar } from './components/ShootingStar.tsx';
// import {Works} from './components/ProjectCard.js';
import Works from './components/Works';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      {/* <Projects/> */}
      <Works />
      {/* <Achievements/> */}
      <ShootingStar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
