import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ClaimingGuide from './components/ClaimingGuide';
import { Footer } from './components/Footer';
import DigitalOceanGuide from './components/DigitalOceanGuide';

function HomePage() {
  return (
    <div className="app">
      <HeroSection />
      <BenefitsSection />
      <ClaimingGuide />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guides/digitalocean" element={<DigitalOceanGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
