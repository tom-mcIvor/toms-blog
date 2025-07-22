import React from 'react'
import { render, screen, waitFor } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'

// Mock window.matchMedia for responsive testing
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

describe('Responsive Layout Integration Tests', () => {
  beforeEach(() => {
    mockIntersectionObserver(true)
    // Reset window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly on desktop viewport (1024px+)', async () => {
    // Set desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1440,
    })
    mockMatchMedia(false) // Not mobile

    render(<Home />)
    await waitForAnimation(500)

    // Check that all main sections are visible
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()

    // Check that all projects are rendered
    expect(screen.getByText('YeahBook')).toBeInTheDocument()
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument()
    expect(screen.getByText('Property Manager')).toBeInTheDocument()

    // Check that layout classes are applied correctly for desktop
    const aboutSection = screen.getByText('About Me').closest('section')
    expect(aboutSection).toHaveClass('lg:flex-row')
  })

  it('should render correctly on tablet viewport (768px)', async () => {
    // Set tablet viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    mockMatchMedia(false)

    render(<Home />)
    await waitForAnimation(500)

    // Content should still be accessible on tablet
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()

    // Skills should still be displayed in grid
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('should render correctly on mobile viewport (375px)', async () => {
    // Set mobile viewport
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
    mockMatchMedia(true) // Mobile

    render(<Home />)
    await waitForAnimation(500)

    // All content should be accessible on mobile
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()

    // Projects should still be rendered
    expect(screen.getByText('YeahBook')).toBeInTheDocument()
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument()

    // Check that responsive classes are applied
    const aboutSection = screen.getByText('About Me').closest('section')
    expect(aboutSection).toHaveClass('flex-col', 'lg:flex-row')
  })

  it('should handle viewport changes dynamically', async () => {
    const { rerender } = render(<Home />)
    await waitForAnimation(500)

    // Start with desktop
    expect(screen.getByText('About Me')).toBeInTheDocument()

    // Change to mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })
    mockMatchMedia(true)

    // Trigger resize event
    window.dispatchEvent(new Event('resize'))

    rerender(<Home />)
    await waitForAnimation(300)

    // Content should still be accessible
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()
  })

  it('should maintain proper spacing and layout at different breakpoints', async () => {
    const breakpoints = [
      { width: 320, height: 568, name: 'small mobile' },
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1024, height: 768, name: 'desktop' },
      { width: 1440, height: 900, name: 'large desktop' }
    ]

    for (const breakpoint of breakpoints) {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: breakpoint.width,
      })
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: breakpoint.height,
      })

      const { unmount } = render(<Home />)
      await waitForAnimation(300)

      // Check that main sections are always present
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Skills')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()

      // Check that layout maintains proper structure
      const mainSection = screen.getByText('About Me').closest('section')
      expect(mainSection).toHaveClass('w-full', 'flex', 'flex-col')

      unmount()
    }
  })

  it('should handle skill grid responsiveness', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Get skills container
    const skillsContainer = screen.getByText('React').closest('div')?.parentElement
    expect(skillsContainer).toHaveClass('flex', 'flex-wrap', 'gap-3', 'justify-center')

    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    // Skills should still be accessible and properly laid out
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
  })

  it('should handle portfolio section responsiveness', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Check portfolio section structure
    const portfolioSection = screen.getByText('My Portfolio').closest('.portfolio-section')
    expect(portfolioSection).toBeInTheDocument()

    // Test different viewport sizes
    const viewports = [375, 768, 1024, 1440]

    for (const width of viewports) {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      })

      // Portfolio should remain accessible
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
      expect(screen.getByText('YeahBook')).toBeInTheDocument()
      expect(screen.getByText('BadgerMatch')).toBeInTheDocument()
    }
  })

  it('should handle image responsiveness in projects', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Get project images
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)

    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    // Images should still be present and have proper attributes
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('should handle social media links responsiveness', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Get social media links
    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })

    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()

    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    // Links should still be accessible and functional
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')
  })

  it('should handle text readability across different screen sizes', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Check that headings are present
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'My Skills' })).toBeInTheDocument()

    // Test small mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 320,
    })

    // Text should still be readable and accessible
    expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
    expect(screen.getByText(/Throughout my studies, I gained a strong foundation/)).toBeInTheDocument()
  })

  it('should handle carousel responsiveness', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Get all carousels
    const carousels = screen.getAllByTestId('carousel')
    expect(carousels).toHaveLength(7)

    // Test different viewport sizes
    const viewports = [375, 768, 1024]

    for (const width of viewports) {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      })

      // Carousels should still be present
      const updatedCarousels = screen.getAllByTestId('carousel')
      expect(updatedCarousels).toHaveLength(7)
    }
  })

  it('should handle layout overflow and scrolling', async () => {
    render(<Home />)
    await waitForAnimation(500)

    // Test very narrow viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 280,
    })

    // Content should not cause horizontal overflow
    const body = document.body
    expect(body.scrollWidth).toBeLessThanOrEqual(body.clientWidth + 50) // Allow small tolerance

    // All content should still be accessible
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()
  })

  it('should maintain accessibility across different screen sizes', async () => {
    render(<Home />)
    await waitForAnimation(500)

    const viewports = [375, 768, 1024]

    for (const width of viewports) {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      })

      // Check heading hierarchy
      expect(screen.getByRole('heading', { level: 1, name: 'About Me' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2, name: 'My Skills' })).toBeInTheDocument()

      // Check that links have proper attributes
      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toHaveAttribute('aria-label', 'GitHub')

      // Check that images have alt text
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img.getAttribute('alt')).not.toBe('')
      })
    }
  })
})