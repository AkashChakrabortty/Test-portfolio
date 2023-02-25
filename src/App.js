import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import KnowMeMore from './components/KnowMeMore';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='parent-div'>
        <Navbar />
        <div className='parent-wrapper'>
          <Banner />
          <KnowMeMore />
          <Skills />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default App;
