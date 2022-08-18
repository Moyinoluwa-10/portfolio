import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
