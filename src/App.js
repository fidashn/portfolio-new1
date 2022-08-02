import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <About />
     <Projects/>
     <Footer />
    </div>
  );
}

export default App;
