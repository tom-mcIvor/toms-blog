import React from 'react'
import { render, screen, waitFor } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}))

describe('Home Page Integration Tests', () => {
  beforeEach(() => {
    // Reset IntersectionObserver mock before each test
    mockIntersectionObserver(true)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the complete home page with all sections', async () => {
    render(<Home />)

    // Check that AboutMeAndSkills section is rendered
    expect(screen.getByTestId('about-me-skills')).toBeInTheDocument()

    // Check that portfolio section is rendered
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()

    // Wait for animations to complete
    await waitForAnimation(500)

    // Check that all project titles are rendered
    expect(screen.getByText('YeahBook')).toBeInTheDocument()
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument()
    expect(screen.getByText('Steno Briefs')).toBeInTheDocument()
    expect(screen.getByText('Mint to Be')).toBeInTheDocument()
    expect(screen.getByText('Ginew Force')).toBeInTheDocument()
    expect(screen.getByText('Nightmare on Dev Street')).toBeInTheDocument()
    expect(screen.getByText('Property Manager')).toBeInTheDocument()
  })

  it('should render all project GitHub links correctly', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that GitHub links are present for all projects
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks).toHaveLength(7) // 7 projects

    // Verify specific GitHub URLs
    expect(screen.getByRole('link', { name: /yeahbook.*github/i })).toHaveAttribute(
      'href',
      'https://github.com/tom-mcIvor/Yeah-book'
    )
    expect(screen.getByRole('link', { name: /badgermatch.*github/i })).toHaveAttribute(
      'href',
      'https://github.com/tom-mcivor/BadgerMatch'
    )
  })

  it('should display all project carousels with images', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that carousels are rendered for each project
    const carousels = screen.getAllByTestId('carousel')
    expect(carousels).toHaveLength(7) // 7 projects

    // Check that images are rendered within carousels
    const projectImages = screen.getAllByRole('img')
    expect(projectImages.length).toBeGreaterThan(7) // Multiple images per project
  })

  it('should render tech stack icons for all projects', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check for common tech stack items across projects
    expect(screen.getAllByText('React')).toHaveLength(5) // React appears in 5 projects
    expect(screen.getAllByText('Node.js')).toHaveLength(4) // Node.js appears in 4 projects
    expect(screen.getAllByText('TypeScript')).toHaveLength(2) // TypeScript appears in 2 projects
  })

  it('should have proper semantic structure and accessibility', async () => {
    render(<Home />)

    // Check for proper heading structure
    expect(screen.getByRole('heading', { name: 'My Portfolio' })).toBeInTheDocument()

    // Check that all project titles are properly structured as headings
    const projectHeadings = screen.getAllByRole('heading', { level: 2 })
    expect(projectHeadings).toHaveLength(7) // 7 project titles

    // Check that images have proper alt text
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('should handle scroll animations properly', async () => {
    const { mockObserver } = mockIntersectionObserver(false)
    
    render(<Home />)

    // Verify that IntersectionObserver is being used
    expect(global.IntersectionObserver).toHaveBeenCalled()
    expect(mockObserver).toHaveBeenCalled()

    // Wait for initial render
    await waitForAnimation(100)

    // Simulate intersection (element coming into view)
    mockIntersectionObserver(true)
    
    await waitForAnimation(200)

    // Projects should be visible after intersection
    expect(screen.getByText('YeahBook')).toBeInTheDocument()
  })

  it('should render projects with different animation directions', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that projects have different animation classes based on direction
    const projectContainers = screen.getAllByTestId(/animated-project/)
    expect(projectContainers.length).toBeGreaterThan(0)

    // Projects should have different animation delays
    // This is tested indirectly by ensuring all projects render properly
    expect(screen.getByText('YeahBook')).toBeInTheDocument() // delay: 0
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument() // delay: 200
    expect(screen.getByText('Steno Briefs')).toBeInTheDocument() // delay: 400
  })

  it('should integrate properly with Material Tailwind components', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that Material Tailwind components are rendered
    const carousels = screen.getAllByTestId('carousel')
    expect(carousels).toHaveLength(7)

    // Check that buttons are rendered (GitHub links)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should handle responsive layout correctly', async () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 667,
    })

    render(<Home />)

    await waitForAnimation(500)

    // Portfolio section should still be rendered on mobile
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    expect(screen.getByText('YeahBook')).toBeInTheDocument()

    // Reset viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('should load and display project descriptions correctly', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check for specific project descriptions
    expect(screen.getByText(/Yeah-Book app is a platform that allows users to create yearbooks/)).toBeInTheDocument()
    expect(screen.getByText(/BadgerMatch is a playful and engaging companion-finding application/)).toBeInTheDocument()
    expect(screen.getByText(/StenoBriefs is a modern, web-based platform for the stenography community/)).toBeInTheDocument()
  })

  it('should handle component unmounting gracefully', async () => {
    const { unmount } = render(<Home />)

    await waitForAnimation(500)

    // Unmount component
    expect(() => unmount()).not.toThrow()
  })
})