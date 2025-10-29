// src/pages/MaximizePage.tsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { maximizeGuides } from '../data/maximizeGuidesData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Footer } from '../components/Footer';

const MaximizePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to get icon component dynamically
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as LucideIcon;
    if (IconComponent) {
      return <IconComponent className="w-8 h-8" />;
    }
    return null;
  };

  // Check if guide has an available page
  const getGuideLink = (guideId: string) => {
    if (guideId === 'digitalocean-hosting') {
      return '/guides/digitalocean';
    }
    if (guideId === 'digitalocean-ai-chatbot') {
      return '/guides/digitalocean-ai-chatbot';
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-black" style={{ isolation: 'isolate' }}>
      {/* Hero Section */}
      <section className="relative bg-black py-20 overflow-hidden" style={{ zIndex: 1 }}>
        {/* Animated gradient blobs - contained within section */}
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-blob blob-4"></div>
        <div className="gradient-blob blob-5"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="hero-title font-black text-white mb-6">
              Maximize Your Benefits
            </h1>
            <p className="hero-subtitle text-gray-400 max-w-3xl mx-auto mb-8">
              Learn how to get the most value from your GitHub Student Developer Pack with our comprehensive guides and tutorials
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Benefits Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Maximize Guides Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20" style={{ isolation: 'isolate', position: 'relative' }}>
        <div className="section-overlay section-multicolor relative rounded-3xl p-8 md:p-12">
          <div className="relative z-10">
            <div className="maximize-grid">
              {maximizeGuides.map((guide) => {
                const guideLink = getGuideLink(guide.id);
                return (
                  <div 
                    key={guide.id} 
                    id={`guide-${guide.id}`}
                    className={`maximize-card liquid-glass-strong reveal-card rounded-2xl overflow-hidden color-${guide.colorClass || 'purple'}`}
                  >
                    <div className="maximize-icon">{getIcon(guide.icon || 'Star')}</div>
                    <h3 className="maximize-title">{guide.title}</h3>
                    <p className="maximize-description">{guide.description}</p>
                    <div className="maximize-meta">
                      <span className="difficulty-badge" data-difficulty={guide.difficulty.toLowerCase()}>{guide.difficulty}</span>
                      <span className="category-badge">{guide.category}</span>
                    </div>
                    {guideLink ? (
                      <Link 
                        to={guideLink}
                        className="claim-btn w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 relative z-10"
                        aria-label={`Read guide: ${guide.title}`}
                      >
                        Read Guide →
                      </Link>
                    ) : (
                      <button 
                        className="claim-btn w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 relative z-10" 
                        aria-label={`Read guide: ${guide.title}`}
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MaximizePage;
