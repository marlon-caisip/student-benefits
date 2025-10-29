import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Unlock Your Potential/i)).toBeInTheDocument();
  });

  it('displays all main sections', () => {
    render(<App />);
    // Hero section
    expect(screen.getByText(/Unlock Your Potential/i)).toBeInTheDocument();
    // Benefits section
    expect(screen.getByText(/Developer Tools & Software/i)).toBeInTheDocument();
    // Claiming Guide section
    expect(screen.getByText(/How to Claim Your GitHub Student Pack/i)).toBeInTheDocument();
    // Footer section
    expect(screen.getByText(/Maximize Your Benefits/i)).toBeInTheDocument();
  });
});
