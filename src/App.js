import './App.css';

// import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ContactThreed from './components/ContactThreed.js';
import { ShootingStar } from './components/ShootingStar.tsx';
import Works from './components/Works';
import Experience from './components/Experience.js';
import StarsCanvas from './components/canvas/Stars.jsx'


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <Skills />
      <Experience />
      <Works />
      <ShootingStar />
      {/* <Contact /> */}
      <div className="relative z-0">
        <ContactThreed />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
}

export default App;
