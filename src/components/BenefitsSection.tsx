import { useEffect } from 'react';
import { benefitsData } from '../data/benefitsData';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  useEffect(() => {
    // GSAP animations setup - placeholder for now
    // ScrollTrigger animations will be registered here when GSAP is available
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).gsap) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gsap = (window as any).gsap;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ScrollTrigger = (window as any).ScrollTrigger;
      
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate section titles
        const titles = document.querySelectorAll('.reveal-title');
        titles.forEach((title: Element) => {
          gsap.fromTo(title,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out'
            }
          );
        });

        // Animate cards
        const cards = document.querySelectorAll('.reveal-card');
        cards.forEach((card: Element, idx: number) => {
          gsap.fromTo(card,
            { opacity: 0, y: 32 },
            {
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
              },
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: (idx % 3) * 0.08,
              ease: 'power2.out'
            }
          );
        });
      }
    }
  }, []);

  return (
    <main id="benefits-hub" className="relative bg-black min-h-screen py-32" style={{ isolation: 'isolate' }}>
      <div className="max-w-7xl mx-auto px-6 space-y-40">
        {benefitsData.map((category, sectionIndex) => (
          <section
            key={sectionIndex}
            className={`section-overlay ${category.sectionClass} relative rounded-3xl p-10 md:p-16`}
          >
            <div className="relative z-10">
              <h2 className="section-title font-black text-white mb-12 reveal-title">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="reveal-card h-full" data-card-index={itemIndex}>
                    <BenefitCard benefit={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default BenefitsSection;
