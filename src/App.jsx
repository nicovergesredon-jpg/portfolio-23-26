import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import About from './components/About';
import Timeline from './components/Timeline';
import LeadershipRoles from './components/LeadershipRoles';
import Projects from './components/Projects';
import ImpactStats from './components/ImpactStats';
import InteractiveMap from './components/InteractiveMap';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Learnings from './components/Learnings';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navbar />
      <Hero />
      <Education />
      <About />
      <Timeline />
      <LeadershipRoles />
      <Projects />
      <ImpactStats />
      <InteractiveMap />
      <Skills />
      <Tools />
      <Learnings />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}
