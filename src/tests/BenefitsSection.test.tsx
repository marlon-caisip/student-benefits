import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BenefitsSection from '../components/BenefitsSection'
import { benefitsData } from '../data/benefitsData'

describe('BenefitsSection', () => {
  it('renders the benefits hub section', () => {
    const { container } = render(<BenefitsSection />)
    const benefitsHub = container.querySelector('#benefits-hub')
    expect(benefitsHub).toBeInTheDocument()
  })

  it('renders all benefit categories', () => {
    render(<BenefitsSection />)
    benefitsData.forEach((category) => {
      expect(screen.getByText(category.category)).toBeInTheDocument()
    })
  })

  it('renders correct number of category sections', () => {
    const { container } = render(<BenefitsSection />)
    const sections = container.querySelectorAll('.section-overlay')
    expect(sections).toHaveLength(benefitsData.length)
  })

  it('each category section has correct CSS class', () => {
    const { container } = render(<BenefitsSection />)
    benefitsData.forEach((category, index) => {
      if (category.sectionClass) {
        const section = container.querySelectorAll('.section-overlay')[index]
        expect(section.classList.contains(category.sectionClass)).toBe(true)
      }
    })
  })

  it('renders benefit cards for each category', () => {
    render(<BenefitsSection />)
    
    benefitsData.forEach((category) => {
      category.items.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
      })
    })
  })

  it('has grid layout for cards', () => {
    const { container } = render(<BenefitsSection />)
    const grids = container.querySelectorAll('.grid')
    expect(grids.length).toBeGreaterThan(0)
    
    grids.forEach((grid) => {
      expect(grid.classList.contains('grid-cols-1')).toBe(true)
      expect(grid.classList.contains('sm:grid-cols-2')).toBe(true)
      expect(grid.classList.contains('lg:grid-cols-3')).toBe(true)
    })
  })

  it('applies reveal animations classes to titles and cards', () => {
    const { container } = render(<BenefitsSection />)
    const titles = container.querySelectorAll('.reveal-title')
    const cards = container.querySelectorAll('.reveal-card')
    
    expect(titles.length).toBe(benefitsData.length)
    expect(cards.length).toBeGreaterThan(0)
  })
})
