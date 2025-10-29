// src/components/Footer.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { maximizeGuides } from '../data/maximizeGuidesData';

// Helper to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {
  it('renders the Maximize section title', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Maximize Your Benefits')).toBeInTheDocument();
  });

  it('renders the Maximize section subtitle', () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText(/Learn how to get the most value from your GitHub Student Developer Pack/i)
    ).toBeInTheDocument();
  });

  it('renders all maximize guide cards', () => {
    renderWithRouter(<Footer />);
    maximizeGuides.forEach((guide) => {
      expect(screen.getByText(guide.title)).toBeInTheDocument();
    });
  });

  it('renders guide descriptions', () => {
    renderWithRouter(<Footer />);
    maximizeGuides.forEach((guide) => {
      expect(screen.getByText(guide.description)).toBeInTheDocument();
    });
  });

  it('renders guide difficulty badges', () => {
    renderWithRouter(<Footer />);
    maximizeGuides.forEach((guide) => {
      const badges = screen.getAllByText(guide.difficulty);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('renders guide category badges', () => {
    renderWithRouter(<Footer />);
    maximizeGuides.forEach((guide) => {
      const badges = screen.getAllByText(guide.category);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('renders guide icons', () => {
    renderWithRouter(<Footer />);
    // Verify SVG icons are rendered
    const iconElements = document.querySelectorAll('.maximize-icon svg');
    expect(iconElements.length).toBe(maximizeGuides.length);
    // Each icon should have proper lucide class
    iconElements.forEach((icon) => {
      expect(icon.classList.contains('lucide')).toBe(true);
    });
  });

  it('renders "Coming Soon" buttons and guide links', () => {
    renderWithRouter(<Footer />);
    // Should have "Coming Soon" for guides without pages
    const comingSoonButtons = screen.getAllByText('Coming Soon');
    expect(comingSoonButtons.length).toBeGreaterThan(0);
    // Should have "Read Guide" for DigitalOcean
    const readGuideLink = screen.getByText('Read Guide →');
    expect(readGuideLink).toBeInTheDocument();
  });

  it('renders contact panel with title', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Need Help?')).toBeInTheDocument();
  });

  it('renders contact panel description', () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText(/Have questions about claiming your benefits/i)
    ).toBeInTheDocument();
  });

  it('renders contact email link with correct href', () => {
    renderWithRouter(<Footer />);
    const emailLink = screen.getByRole('link', {
      name: /send email to marlon.caisip@cbsua.edu.ph/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:marlon.caisip@cbsua.edu.ph');
  });

  it('renders contact email text', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('marlon.caisip@cbsua.edu.ph')).toBeInTheDocument();
  });

  it('renders footer credits', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${currentYear} Student Benefits Hub.*Made with.*for students`, 'i'))
    ).toBeInTheDocument();
  });

  it('renders maximize cards with liquid-glass-strong class', () => {
    const { container } = renderWithRouter(<Footer />);
    const cards = container.querySelectorAll('.maximize-card.liquid-glass-strong');
    expect(cards).toHaveLength(maximizeGuides.length);
  });

  it('renders contact panel with liquid-glass-strong class', () => {
    const { container } = renderWithRouter(<Footer />);
    const panel = container.querySelector('.contact-panel.liquid-glass-strong');
    expect(panel).toBeInTheDocument();
  });

  it('has correct aria-label for guide buttons', () => {
    renderWithRouter(<Footer />);
    // Check for buttons and links
    maximizeGuides.forEach((guide) => {
      const elements = screen.getAllByLabelText(`Read guide: ${guide.title}`);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders maximize grid container', () => {
    const { container } = renderWithRouter(<Footer />);
    const grid = container.querySelector('.maximize-grid');
    expect(grid).toBeInTheDocument();
  });

  it('has footer-section class on footer element', () => {
    const { container } = renderWithRouter(<Footer />);
    const footer = container.querySelector('footer.footer-section');
    expect(footer).toBeInTheDocument();
  });
});
