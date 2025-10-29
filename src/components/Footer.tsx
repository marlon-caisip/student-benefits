// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { maximizeGuides } from '../data/maximizeGuidesData';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const Footer = () => {
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
    return null;
  };

  return (
    <footer className="footer-section">
      {/* Maximize Guides Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="section-overlay section-multicolor relative rounded-3xl p-8 md:p-12">
          <div className="relative z-10">
            <div className="section-header text-center">
              <h2 className="section-title reveal-title font-black text-white mb-4">Maximize Your Benefits</h2>
              <p className="section-subtitle reveal-title text-gray-400 max-w-2xl mx-auto mb-12">
            Learn how to get the most value from your GitHub Student Developer Pack
          </p>
        </div>

        <div className="maximize-grid">
          {maximizeGuides.map((guide) => {
            const guideLink = getGuideLink(guide.id);
            return (
              <div key={guide.id} className={`maximize-card liquid-glass-strong reveal-card rounded-2xl overflow-hidden color-${guide.colorClass || 'purple'}`}>
                <div className="maximize-icon">{getIcon(guide.icon || 'Star')}</div>
                <h3 className="maximize-title">{guide.title}</h3>
                <p className="maximize-description">{guide.description}</p>
                <div className="maximize-meta">
                  <span className="difficulty-badge">{guide.difficulty}</span>
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
                  <button className="claim-btn w-full py-3 px-6 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 relative z-10" aria-label={`Read guide: ${guide.title}`}>
                    Coming Soon
                  </button>
                )}
              </div>
            );
          })}
        </div>
          </div>
        </div>
      </div>

      {/* Contact Panel */}
      <div className="contact-panel-wrapper relative">
        {/* Animated gradient blobs */}
        <div className="gradient-blob blob-contact-1"></div>
        <div className="gradient-blob blob-contact-2"></div>
        <div className="gradient-blob blob-contact-3"></div>
        <div className="gradient-blob blob-contact-4"></div>
        <div className="gradient-blob blob-contact-5"></div>
        <div className="gradient-blob blob-contact-6"></div>
        
        <div className="contact-panel liquid-glass-strong relative z-10">
        <div className="contact-content">
          <h3 className="contact-title">Need Help?</h3>
          <p className="contact-text">
            Have questions about claiming your benefits? Suggestions? Reach out to me!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marlon.caisip@cbsua.edu.ph"
              className="claim-btn inline-flex py-3 px-8 rounded-xl font-semibold text-sm tracking-wide items-center justify-center gap-2 relative z-10"
              aria-label="Send email to marlon.caisip@cbsua.edu.ph"
            >
              marlon.caisip@cbsua.edu.ph
            </a>
            
            {/* Vertical separator for desktop, hidden on mobile */}
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            
            <a
              href="https://github.com/yourusername/edu-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="claim-btn inline-flex py-3 px-8 rounded-xl font-semibold text-sm tracking-wide items-center justify-center gap-2 relative z-10"
              aria-label="View GitHub repository"
            >
              GitHub Repository
            </a>
          </div>
          
          {/* Separator line */}
          <div className="w-full max-w-md mx-auto my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Disclaimer */}
          <p className="text-gray-400 text-sm max-w-md mx-auto text-center leading-relaxed">
            <span className="text-gray-500">Note:</span> I've included some freely available tools and resources that may be helpful for students without verified email addresses.
          </p>
        </div>
        <div className="footer-credits">
          <p className="footer-text">
            {new Date().getFullYear()} Student Benefits Hub. Made with ❤️ for students.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};
