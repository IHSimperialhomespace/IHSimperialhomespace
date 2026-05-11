import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Estimator from './components/Estimator'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyUs />
      <Gallery />
      <Estimator />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
