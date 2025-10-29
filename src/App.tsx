import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ClaimingGuide from './components/guides/ClaimingGuide';
import { Footer } from './components/Footer';
import DigitalOceanGuide from './components/guides/DigitalOceanGuide';
import AIChatbotGuide from './components/guides/AIChatbotGuide';
import MaximizePage from './pages/MaximizePage';
import MaximizeSection from './components/MaximizeSection';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="app">
      <HeroSection />
      <BenefitsSection />
      <ClaimingGuide />
      <MaximizeSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maximize" element={<MaximizePage />} />
        <Route path="/guides/digitalocean" element={<DigitalOceanGuide />} />
        <Route path="/guides/digitalocean-ai-chatbot" element={<AIChatbotGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
