import { MotionConfig } from 'framer-motion';
import ScrollProgress from './components/animation/ScrollProgress';
import CustomCursor from './components/animation/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Rankings from './components/sections/Rankings';
import Sports from './components/sections/Sports';
import Community from './components/sections/Community';
import VirtualTour from './components/sections/VirtualTour';
import StudentVoices from './components/sections/StudentVoices';
import Reviews from './components/sections/Reviews';
import Enquire from './components/sections/Enquire';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    // reducedMotion="user" makes every framer-motion transform respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Rankings />
        <Sports />
        <Community />
        <VirtualTour />
        <StudentVoices />
        <Reviews />
        <Enquire />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
