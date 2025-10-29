// src/pages/MaximizePage.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MaximizePage from '../pages/MaximizePage';
import { maximizeGuides } from '../data/maximizeGuidesData';

// Helper to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('MaximizePage Component', () => {
  it('renders the hero section title', () => {
    renderWithRouter(<MaximizePage />);
    expect(screen.getByText('Maximize Your Benefits')).toBeInTheDocument();
  });

  it('renders the hero section subtitle', () => {
    renderWithRouter(<MaximizePage />);
    expect(
      screen.getByText(/Learn how to get the most value from your GitHub Student Developer Pack/i)
    ).toBeInTheDocument();
  });

  it('renders all maximize guide cards', () => {
    renderWithRouter(<MaximizePage />);
    maximizeGuides.forEach((guide) => {
      expect(screen.getByText(guide.title)).toBeInTheDocument();
    });
  });

  it('renders guide descriptions', () => {
    renderWithRouter(<MaximizePage />);
    maximizeGuides.forEach((guide) => {
      expect(screen.getByText(guide.description)).toBeInTheDocument();
    });
  });

  it('renders guide difficulty badges', () => {
    renderWithRouter(<MaximizePage />);
    maximizeGuides.forEach((guide) => {
      const badges = screen.getAllByText(guide.difficulty);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('renders guide category badges', () => {
    renderWithRouter(<MaximizePage />);
    maximizeGuides.forEach((guide) => {
      const badges = screen.getAllByText(guide.category);
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  it('renders guide icons', () => {
    renderWithRouter(<MaximizePage />);
    // Verify SVG icons are rendered
    const iconElements = document.querySelectorAll('.maximize-icon svg');
    expect(iconElements.length).toBe(maximizeGuides.length);
    // Each icon should have proper lucide class
    iconElements.forEach((icon) => {
      expect(icon.classList.contains('lucide')).toBe(true);
    });
  });

  it('renders "Coming Soon" buttons and guide links', () => {
    renderWithRouter(<MaximizePage />);
    // Should have "Coming Soon" for guides without pages
    const comingSoonButtons = screen.getAllByText('Coming Soon');
    expect(comingSoonButtons.length).toBeGreaterThan(0);
    // Should have "Read Guide" for guides with available pages
    const readGuideLinks = screen.getAllByText('Read Guide →');
    expect(readGuideLinks.length).toBeGreaterThan(0);
  });

  it('renders maximize cards with liquid-glass-strong class', () => {
    const { container } = renderWithRouter(<MaximizePage />);
    const cards = container.querySelectorAll('.maximize-card.liquid-glass-strong');
    expect(cards).toHaveLength(maximizeGuides.length);
  });

  it('has correct aria-label for guide buttons', () => {
    renderWithRouter(<MaximizePage />);
    // Check for buttons and links
    maximizeGuides.forEach((guide) => {
      const elements = screen.getAllByLabelText(`Read guide: ${guide.title}`);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders maximize grid container', () => {
    const { container } = renderWithRouter(<MaximizePage />);
    const grid = container.querySelector('.maximize-grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders guide cards with correct IDs', () => {
    const { container } = renderWithRouter(<MaximizePage />);
    maximizeGuides.forEach((guide) => {
      const card = container.querySelector(`#guide-${guide.id}`);
      expect(card).toBeInTheDocument();
    });
  });

  it('renders the Footer component', () => {
    renderWithRouter(<MaximizePage />);
    // Check for Footer's contact panel
    expect(screen.getByText('Need Help?')).toBeInTheDocument();
  });

  it('has Back to Benefits Hub link', () => {
    renderWithRouter(<MaximizePage />);
    const backLink = screen.getByText('← Back to Benefits Hub');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });
});
