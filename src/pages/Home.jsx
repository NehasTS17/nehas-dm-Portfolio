import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Specializations from '../components/Specializations';
import Services from '../components/Services';
import Tools from '../components/Tools';
import CaseStudies from '../components/CaseStudies';
import Campaigns from '../components/Campaigns';
import Approach from '../components/Approach';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Services />    
        <Specializations />
        <Tools />
        <CaseStudies />
        <Campaigns />
        <Approach />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
