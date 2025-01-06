import './App.css';

// import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShootingStar } from './components/ShootingStar.tsx';
import Works from './components/Works';
import Experience from './components/Experience.js';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <Skills />
      <Experience/>
      <Works />
      <ShootingStar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
