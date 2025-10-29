// src/components/Footer.test.tsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';

// Helper to render with router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {
  it('renders the CTA section title', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Ready to Maximize Your Benefits?')).toBeInTheDocument();
  });

  it('renders the CTA section subtitle', () => {
    renderWithRouter(<Footer />);
    expect(
      screen.getByText(/Discover step-by-step guides and tutorials to get the most value from your GitHub Student Developer Pack/i)
    ).toBeInTheDocument();
  });

  it('renders the "Explore Maximize Guides" link button', () => {
    renderWithRouter(<Footer />);
    const ctaButton = screen.getByText('Explore Maximize Guides →');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest('a')).toHaveAttribute('href', '/maximize');
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

  it('renders GitHub repository link', () => {
    renderWithRouter(<Footer />);
    const githubLink = screen.getByRole('link', {
      name: /view github repository/i,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/marlon-caisip/student-benefits.git');
  });

  it('renders footer credits', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${currentYear} Student Benefits Hub.*Made with.*for students`, 'i'))
    ).toBeInTheDocument();
  });

  it('renders contact panel with liquid-glass-strong class', () => {
    const { container } = renderWithRouter(<Footer />);
    const panel = container.querySelector('.contact-panel.liquid-glass-strong');
    expect(panel).toBeInTheDocument();
  });

  it('has footer-section class on footer element', () => {
    const { container } = renderWithRouter(<Footer />);
    const footer = container.querySelector('footer.footer-section');
    expect(footer).toBeInTheDocument();
  });
});
