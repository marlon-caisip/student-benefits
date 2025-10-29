const HeroSection = () => {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-hub');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Animated gradient blobs - contained within section */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      <div className="gradient-blob blob-4"></div>
      <div className="gradient-blob blob-5"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="hero-title font-black tracking-tight text-white leading-tight mb-8" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          Unlock Your Potential
        </h1>
        <p className="hero-subtitle text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium mb-12" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 font-bold">.edu</span> email is the key to thousands of dollars in exclusive student benefits
        </p>
        
        {/* Scroll Indicator */}
        <div className="mt-16">
          <button 
            onClick={scrollToBenefits}
            className="animate-bounce cursor-pointer bg-transparent border-none focus:outline-none hover:scale-110 transition-transform"
            aria-label="Scroll to benefits section"
          >
            <svg className="w-8 h-8 mx-auto text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
