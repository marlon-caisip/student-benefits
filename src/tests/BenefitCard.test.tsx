import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import BenefitCard from '../components/BenefitCard'
import type { BenefitItem } from '../types'

describe('BenefitCard', () => {
  const mockBenefit: BenefitItem = {
    name: 'GitHub Student Pack',
    desc: 'Get free access to GitHub Pro and other developer tools',
    link: 'https://education.github.com/pack',
    logo: 'https://github.com/logo.png'
  };

  it('renders benefit name', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    expect(screen.getByText('GitHub Student Pack')).toBeInTheDocument()
  })

  it('renders benefit description', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    expect(screen.getByText(/Get free access to GitHub Pro/i)).toBeInTheDocument()
  })

  it('renders Claim Offer button with correct link', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    const link = screen.getByRole('link', { name: /claim offer/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://education.github.com/pack')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders logo when provided', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    const logo = screen.getByAltText('GitHub Student Pack logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', 'https://github.com/logo.png')
  })

  it('hides logo on error', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    const logo = screen.getByAltText('GitHub Student Pack logo') as HTMLImageElement
    
    fireEvent.error(logo)
    
    expect(logo.style.display).toBe('none')
  })

  it('does not render logo when not provided', () => {
    const benefitWithoutLogo: BenefitItem = {
      ...mockBenefit,
      logo: undefined
    }
    render(<BenefitCard benefit={benefitWithoutLogo} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renders warning badge when warning is true', () => {
    const benefitWithWarning: BenefitItem = {
      ...mockBenefit,
      warning: true
    }
    render(<BenefitCard benefit={benefitWithWarning} />)
    expect(screen.getByText(/use at own risk/i)).toBeInTheDocument()
  })

  it('does not render warning badge when warning is false', () => {
    const benefitWithoutWarning: BenefitItem = {
      ...mockBenefit,
      warning: false
    }
    render(<BenefitCard benefit={benefitWithoutWarning} />)
    expect(screen.queryByText(/use at own risk/i)).not.toBeInTheDocument()
  })
})
