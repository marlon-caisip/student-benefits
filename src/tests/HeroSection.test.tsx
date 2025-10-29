import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from '../components/HeroSection'

describe('HeroSection', () => {
  it('renders main heading', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Unlock Your Potential/i)).toBeInTheDocument()
  })

  it('renders subtitle with .edu highlight', () => {
    render(<HeroSection />)
    expect(screen.getByText(/email is the key to thousands/i)).toBeInTheDocument()
    const eduSpan = screen.getByText('.edu')
    expect(eduSpan).toBeInTheDocument()
  })

  it('renders all gradient blobs', () => {
    const { container } = render(<HeroSection />)
    const blobs = container.querySelectorAll('.gradient-blob')
    expect(blobs).toHaveLength(5)
    expect(container.querySelector('.blob-1')).toBeInTheDocument()
    expect(container.querySelector('.blob-2')).toBeInTheDocument()
    expect(container.querySelector('.blob-3')).toBeInTheDocument()
    expect(container.querySelector('.blob-4')).toBeInTheDocument()
    expect(container.querySelector('.blob-5')).toBeInTheDocument()
  })

  it('renders scroll CTA button', () => {
    render(<HeroSection />)
    const button = screen.getByRole('button', { name: /scroll to benefits/i })
    expect(button).toBeInTheDocument()
  })

  it('scroll button triggers smooth scroll when clicked', () => {
    // Create a mock element for benefits-hub
    const mockBenefitsSection = document.createElement('div')
    mockBenefitsSection.id = 'benefits-hub'
    mockBenefitsSection.scrollIntoView = vi.fn()
    document.body.appendChild(mockBenefitsSection)

    render(<HeroSection />)
    const button = screen.getByRole('button', { name: /scroll to benefits/i })
    
    fireEvent.click(button)
    
    expect(mockBenefitsSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
    
    // Cleanup
    document.body.removeChild(mockBenefitsSection)
  })
})
