import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
