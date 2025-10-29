// src/components/Footer.tsx

export const Footer = () => {
  return (
    <footer className="footer-section">

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
              href="https://github.com/marlon-caisip/student-benefits.git"
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
