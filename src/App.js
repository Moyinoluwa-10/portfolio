import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Education />
      <Contact />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
