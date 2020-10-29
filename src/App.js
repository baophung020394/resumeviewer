import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function App() {
  const [resumeData, setResumeData] = useState([])
  useEffect( async () => {
    await axios
      .get('http://localhost:3000/resumeData.json')
      .then(resultResume => {
        setResumeData(resultResume.data)
      })
      .catch(err => {
        console.log(err);
      });
    
  }, [])


  return (
    <div className="App">
      <Header data={resumeData} />
      <About data={resumeData} />
      <Resume data={resumeData} />
      <Portfolio data={resumeData} />
      <Testimonials data={resumeData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
