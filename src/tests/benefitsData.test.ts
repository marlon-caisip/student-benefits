import { describe, it, expect } from 'vitest'
import { benefitsData } from '../data/benefitsData'
import type { BenefitCategory } from '../types'

describe('benefitsData', () => {
  it('exports a non-empty array', () => {
    expect(benefitsData).toBeDefined()
    expect(Array.isArray(benefitsData)).toBe(true)
    expect(benefitsData.length).toBeGreaterThan(0)
  })

  it('each category has required fields', () => {
    benefitsData.forEach((category: BenefitCategory) => {
      expect(category).toHaveProperty('category')
      expect(category).toHaveProperty('items')
      expect(typeof category.category).toBe('string')
      expect(Array.isArray(category.items)).toBe(true)
      expect(category.items.length).toBeGreaterThan(0)
    })
  })

  it('each benefit item has required fields', () => {
    benefitsData.forEach((category) => {
      category.items.forEach((item) => {
        expect(item).toHaveProperty('name')
        expect(item).toHaveProperty('desc')
        expect(item).toHaveProperty('link')
        expect(typeof item.name).toBe('string')
        expect(typeof item.desc).toBe('string')
        expect(typeof item.link).toBe('string')
        
        // Optional fields
        if (item.logo) {
          expect(typeof item.logo).toBe('string')
        }
        if (item.warning !== undefined) {
          expect(typeof item.warning).toBe('boolean')
        }
      })
    })
  })

  it('has expected categories', () => {
    const categories = benefitsData.map(cat => cat.category)
    expect(categories).toContain('Developer Tools & Software')
    expect(categories).toContain('AI & Machine Learning Tools')
    expect(categories).toContain('Cloud Services & Hosting')
  })
})
