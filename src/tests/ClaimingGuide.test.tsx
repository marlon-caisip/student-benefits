import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ClaimingGuide from '../components/guides/ClaimingGuide'
import { claimingGuideSteps } from '../data/claimingGuideData'

describe('ClaimingGuide', () => {
  it('renders main heading', () => {
    render(<ClaimingGuide />)
    expect(screen.getByText(/How to Claim Your GitHub Student Pack/i)).toBeInTheDocument()
  })

  it('renders all guide steps', () => {
    render(<ClaimingGuide />)
    claimingGuideSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument()
    })
  })

  it('renders step numbers correctly', () => {
    render(<ClaimingGuide />)
    claimingGuideSteps.forEach((_, index) => {
      expect(screen.getByText((index + 1).toString())).toBeInTheDocument()
    })
  })

  it('steps are initially collapsed', () => {
    render(<ClaimingGuide />)
    // Check that aria-expanded is false for the first step button
    const firstStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[0].title, 'i') })
    expect(firstStepButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands step when clicked', () => {
    render(<ClaimingGuide />)
    const firstStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[0].title, 'i') })
    
    fireEvent.click(firstStepButton)
    
    expect(screen.getByText(claimingGuideSteps[0].description)).toBeInTheDocument()
  })

  it('collapses step when clicked again', () => {
    render(<ClaimingGuide />)
    const firstStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[0].title, 'i') })
    
    // Expand
    fireEvent.click(firstStepButton)
    expect(firstStepButton).toHaveAttribute('aria-expanded', 'true')
    
    // Collapse
    fireEvent.click(firstStepButton)
    expect(firstStepButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('displays tips when step is expanded', () => {
    render(<ClaimingGuide />)
    const firstStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[0].title, 'i') })
    
    fireEvent.click(firstStepButton)
    
    if (claimingGuideSteps[0].tips) {
      // Check that the step is expanded via aria-expanded
      expect(firstStepButton).toHaveAttribute('aria-expanded', 'true')
      
      // Check that all tips text exists (all steps render tips, so we expect multiple)
      const allProTips = screen.getAllByText(/Pro Tips:/i)
      expect(allProTips.length).toBeGreaterThanOrEqual(1)
      
      claimingGuideSteps[0].tips.forEach((tip) => {
        expect(screen.getByText(tip)).toBeInTheDocument()
      })
    }
  })

  it('renders official GitHub Education link', () => {
    render(<ClaimingGuide />)
    const link = screen.getByRole('link', { name: /Start Your Application/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://education.github.com/pack')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('only one step can be expanded at a time', () => {
    render(<ClaimingGuide />)
    const firstStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[0].title, 'i') })
    const secondStepButton = screen.getByRole('button', { name: new RegExp(claimingGuideSteps[1].title, 'i') })
    
    // Expand first step
    fireEvent.click(firstStepButton)
    expect(firstStepButton).toHaveAttribute('aria-expanded', 'true')
    
    // Expand second step
    fireEvent.click(secondStepButton)
    expect(secondStepButton).toHaveAttribute('aria-expanded', 'true')
    
    // First step should now be collapsed
    expect(firstStepButton).toHaveAttribute('aria-expanded', 'false')
  })
})
