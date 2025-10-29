// src/tests/accessibility.test.tsx

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import BenefitCard from '../components/BenefitCard';
import BenefitsSection from '../components/BenefitsSection';
import ClaimingGuide from '../components/ClaimingGuide';
import { Footer } from '../components/Footer';

// Helper to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Accessibility Tests', () => {
  describe('HeroSection Accessibility', () => {
    it('has main heading with proper hierarchy', () => {
      const { container } = render(<HeroSection />);
      const h1 = container.querySelector('h1');
      expect(h1).toBeInTheDocument();
      expect(h1?.textContent).toContain('Unlock Your Potential');
    });

    it('has scroll CTA button with descriptive aria-label', () => {
      const { container } = render(<HeroSection />);
      const button = container.querySelector('button[aria-label*="Scroll"]');
      expect(button).toBeInTheDocument();
    });

    it('gradient blobs are decorative (no alt text needed)', () => {
      const { container } = render(<HeroSection />);
      const blobs = container.querySelectorAll('.gradient-blob');
      expect(blobs.length).toBe(5);
      // Decorative elements should not have role="img" or alt attributes
      blobs.forEach((blob) => {
        expect(blob.getAttribute('role')).toBeNull();
      });
    });
  });

  describe('BenefitCard Accessibility', () => {
    const sampleBenefit = {
      logo: '/logo.png',
      name: 'Sample Benefit',
      desc: 'Test description',
      link: 'https://example.com',
      warning: false,
    };

    it('has alt text for benefit logo image', () => {
      const { container } = render(<BenefitCard benefit={sampleBenefit} />);
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('alt');
      expect(img?.getAttribute('alt')).toContain('Sample Benefit');
    });

    it('CTA link is accessible and functional', () => {
      const { container } = render(<BenefitCard benefit={sampleBenefit} />);
      const link = container.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link?.getAttribute('href')).toBe('https://example.com');
      expect(link?.textContent).toContain('Claim');
    });

    it('CTA link opens in new tab with security attributes', () => {
      const { container } = render(<BenefitCard benefit={sampleBenefit} />);
      const link = container.querySelector('a[target="_blank"]');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('BenefitsSection Accessibility', () => {
    it('has section headings with proper hierarchy', () => {
      const { container } = render(<BenefitsSection />);
      const h2Elements = container.querySelectorAll('h2');
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it('has section with accessible ID for navigation', () => {
      const { container } = render(<BenefitsSection />);
      const section = container.querySelector('#benefits-hub');
      expect(section).toBeInTheDocument();
    });
  });

  describe('ClaimingGuide Accessibility', () => {
    it('has main heading for guide', () => {
      const { container } = render(<ClaimingGuide />);
      const h2 = container.querySelector('h2');
      expect(h2).toBeInTheDocument();
      expect(h2?.textContent).toContain('How to Claim');
    });

    it('step buttons have aria-expanded attribute', () => {
      const { container } = render(<ClaimingGuide />);
      const buttons = container.querySelectorAll('button[aria-expanded]');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('external link has proper security attributes', () => {
      const { container } = render(<ClaimingGuide />);
      const externalLink = container.querySelector('a[target="_blank"]');
      expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('external link is accessible and opens in new tab', () => {
      const { container } = render(<ClaimingGuide />);
      const externalLink = container.querySelector('a[target="_blank"]');
      expect(externalLink).toBeInTheDocument();
      expect(externalLink?.textContent).toBeTruthy();
    });
  });

  describe('Footer Accessibility', () => {
    it('has semantic footer element', () => {
      const { container } = renderWithRouter(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    it('contact email link has descriptive aria-label', () => {
      const { container } = renderWithRouter(<Footer />);
      const emailLink = container.querySelector('a[href^="mailto:"]');
      expect(emailLink).toHaveAttribute('aria-label');
      expect(emailLink?.getAttribute('aria-label')).toContain('email');
    });

    it('all guide buttons have aria-labels', () => {
      const { container } = renderWithRouter(<Footer />);
      const buttons = container.querySelectorAll('.claim-btn');
      expect(buttons.length).toBeGreaterThan(0);
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-label');
      });
    });

    it('has proper heading hierarchy in maximize section', () => {
      const { container} = renderWithRouter(<Footer />);
      const h2 = container.querySelector('h2');
      const h3Elements = container.querySelectorAll('h3');
      expect(h2).toBeInTheDocument();
      expect(h3Elements.length).toBeGreaterThan(0);
    });
  });

  describe('Keyboard Navigation Support', () => {
    it('HeroSection CTA button is focusable', () => {
      const { container } = render(<HeroSection />);
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
      expect(button?.getAttribute('tabindex')).not.toBe('-1');
    });

    it('BenefitCard CTA links are focusable', () => {
      const sampleBenefit = {
        logo: '/logo.png',
        name: 'Sample',
        desc: 'Test',
        link: 'https://example.com',
        warning: false,
      };
      const { container } = render(<BenefitCard benefit={sampleBenefit} />);
      const link = container.querySelector('a');
      expect(link).toBeInTheDocument();
      expect(link?.getAttribute('tabindex')).not.toBe('-1');
    });

    it('ClaimingGuide step buttons are focusable', () => {
      const { container } = render(<ClaimingGuide />);
      const buttons = container.querySelectorAll('button');
      buttons.forEach((button) => {
        expect(button.getAttribute('tabindex')).not.toBe('-1');
      });
    });

    it('Footer email link is focusable', () => {
      const { container } = renderWithRouter(<Footer />);
      const emailLink = container.querySelector('a[href^="mailto:"]');
      expect(emailLink).toBeInTheDocument();
      expect(emailLink?.getAttribute('tabindex')).not.toBe('-1');
    });
  });

  describe('Color Contrast and Visual Accessibility', () => {
    it('all cards have background styling for readability', () => {
      const { container } = render(<BenefitsSection />);
      const cards = container.querySelectorAll('.benefit-card');
      cards.forEach((card) => {
        expect(card.classList.contains('liquid-glass-strong')).toBe(true);
      });
    });

    it('benefit cards render with proper structure', () => {
      const benefitWithWarning = {
        logo: '/logo.png',
        name: 'Test',
        desc: 'Test description',
        link: 'https://example.com',
        warning: true,
      };
      const { container } = render(<BenefitCard benefit={benefitWithWarning} />);
      const card = container.querySelector('.benefit-card');
      expect(card).toBeInTheDocument();
    });
  });
});
