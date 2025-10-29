// src/__tests__/AIChatbotGuide.test.tsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AIChatbotGuide from '../components/guides/AIChatbotGuide';

// Helper function to render component with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('AIChatbotGuide', () => {
  it('should render without errors', () => {
    renderWithRouter(<AIChatbotGuide />);
  });

  it('should display the main heading', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build a Simple AI Chatbot/i);
  });

  it('should render all 7 main sections', () => {
    renderWithRouter(<AIChatbotGuide />);
    const sections = screen.getAllByRole('heading', { level: 2 });
    expect(sections.length).toBeGreaterThanOrEqual(7);
  });

  it('should include Prerequisites section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/Prerequisites & Setup/i)).toBeInTheDocument();
  });

  it('should include AI Persona section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/AI Persona & Prompt Engineering/i)).toBeInTheDocument();
  });

  it('should include Getting DigitalOcean AI Access section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/Getting DigitalOcean AI Access/i)).toBeInTheDocument();
  });

  it('should include Building the HTML Interface section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/Building the HTML Interface/i)).toBeInTheDocument();
  });

  it('should include Styling with CSS section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/Styling with CSS/i)).toBeInTheDocument();
  });

  it('should include JavaScript Implementation section', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/JavaScript Implementation/i)).toBeInTheDocument();
  });

  it('should have a back link to maximize guides', () => {
    renderWithRouter(<AIChatbotGuide />);
    const backLink = screen.getByRole('link', { name: /back to maximize guides/i });
    expect(backLink).toHaveAttribute('href', '/maximize#guide-digitalocean-ai-chatbot');
  });

  it('should display HTML code example', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/<!DOCTYPE html>/i)).toBeInTheDocument();
  });

  it('should display JavaScript code example with API_KEY constant', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/const API_KEY = 'YOUR_MODEL_ACCESS_KEY'/i)).toBeInTheDocument();
  });

  it('should display CSS code example', () => {
    renderWithRouter(<AIChatbotGuide />);
    expect(screen.getByText(/\.chat-container/i)).toBeInTheDocument();
  });

  it('should display API endpoint in code examples', () => {
    renderWithRouter(<AIChatbotGuide />);
    const apiEndpoints = screen.getAllByText(/https:\/\/inference\.do-ai\.run\/v1/i);
    expect(apiEndpoints.length).toBeGreaterThan(0);
  });

  it('should have proper heading hierarchy', () => {
    renderWithRouter(<AIChatbotGuide />);
    const h1 = screen.getAllByRole('heading', { level: 1 });
    const h2 = screen.getAllByRole('heading', { level: 2 });
    const h3 = screen.getAllByRole('heading', { level: 3 });
    
    expect(h1.length).toBeGreaterThan(0);
    expect(h2.length).toBeGreaterThan(0);
    expect(h3.length).toBeGreaterThan(0);
  });

  it('should have accessible external links with target blank', () => {
    renderWithRouter(<AIChatbotGuide />);
    const externalLinks = screen.getAllByRole('link');
    const digitalOceanLinks = externalLinks.filter(link => 
      link.getAttribute('href')?.includes('digitalocean.com')
    );
    
    digitalOceanLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should have accessible external links to GitHub Education', () => {
    renderWithRouter(<AIChatbotGuide />);
    const externalLinks = screen.getAllByRole('link');
    const githubLinks = externalLinks.filter(link => 
      link.getAttribute('href')?.includes('github.com') || 
      link.getAttribute('href')?.includes('education.github.com')
    );
    
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should scroll to top on component mount', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');
    renderWithRouter(<AIChatbotGuide />);
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
    scrollToSpy.mockRestore();
  });
});
