import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FeaturedProduct from './components/FeaturedProduct';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <FeaturedProduct />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;