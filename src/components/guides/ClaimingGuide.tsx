import { useState, useRef, useEffect } from 'react';
import { claimingGuideSteps } from '../../data/claimingGuideData';

const ClaimingGuide = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedStep === index) {
          // Opening animation
          ref.style.maxHeight = `${ref.scrollHeight}px`;
          ref.style.opacity = '1';
        } else {
          // Closing animation
          ref.style.maxHeight = '0';
          ref.style.opacity = '0';
        }
      }
    });
  }, [expandedStep]);

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-overlay section-monochrome relative rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="relative z-10">
            <h2 className="section-title font-black text-white mb-6 text-center">
            How to Claim Your GitHub Student Pack
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Follow these simple steps to unlock thousands your free developer tools and resources.
          </p>

          <div className="space-y-4">
            {claimingGuideSteps.map((step, index) => (
              <div key={index} className="liquid-glass-strong rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  aria-expanded={expandedStep === index}
                  aria-controls={`step-${index}-content`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-gray-400 accordion-chevron ${expandedStep === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <div 
                  ref={(el) => { contentRefs.current[index] = el; }}
                  className="accordion-content overflow-hidden"
                  style={{
                    maxHeight: expandedStep === index ? '1000px' : '0',
                    opacity: expandedStep === index ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 mb-4 ml-12">{step.description}</p>
                    {step.tips && step.tips.length > 0 && (
                      <div className="ml-12 bg-white/5 border border-white/10 rounded-lg p-4">
                        <p className="text-gray-300 font-semibold text-sm mb-2">💡 Pro Tips:</p>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-gray-300 flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105"
            >
              Start Your Application
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Official GitHub Education Guide
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimingGuide;
