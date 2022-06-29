import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
// import ScrollToTop from './components/ScrollToTop';
// import ScrollToBtm from './components/ScrollToBtm';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <About />
     <Projects/>
     {/* <ScrollToTop /> */}
     {/* <ScrollToBtm /> */}
     <Footer />
    </div>
  );
}

export default App;
