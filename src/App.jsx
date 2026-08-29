import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary">
      <Analytics />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Services />
      <WhyWorkWithMe />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
