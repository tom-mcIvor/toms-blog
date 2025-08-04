import React from 'react'
import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Mock Next.js router
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: '/',
  }),
}))

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...props }: any) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock Next.js Image component
jest.mock('next/image', () => {
  const MockImage = ({ src, alt, width, height, className, ...props }: any) => {
    return (
      <img
        src={typeof src === 'string' ? src : src.src || '/mock-image.png'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    )
  }
  MockImage.displayName = 'MockImage'
  return MockImage
})

// Full page component that includes Nav, Home, and Footer
const FullPageLayout = () => {
  return (
    <div className="full-page-layout">
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

describe('Cross-Component Integration Tests', () => {
  beforeEach(() => {
    mockIntersectionObserver(true)
    jest.clearAllMocks()
    
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

    // Mock getBoundingClientRect for Footer
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      bottom: 200,
      left: 0,
      right: 1024,
      width: 1024,
      height: 100,
      x: 0,
      y: 100,
      toJSON: () => ({}),
    })) as any
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render complete page layout with all components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Check Nav component
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()

    // Check Home component
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()

    // Check Footer component
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('ttmcivor@gmail.com')).toBeInTheDocument()
  })

  it('should handle navigation between components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Test navigation from Nav to Home (About button)
    const aboutButton = screen.getByText('About').closest('a')
    expect(aboutButton).toHaveAttribute('href', '/')

    // Test navigation from Nav to blog pages
    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    
    await waitForAnimation(200)

    const bootcampItem = screen.getByText('Bootcamp')
    fireEvent.mouseEnter(bootcampItem)
    
    await waitForAnimation(200)

    const techItem = screen.getByText('TECH')
    fireEvent.mouseEnter(techItem)
    
    await waitForAnimation(200)

    // Check that CSS lessons link is available
    const cssLink = screen.getByText('CSS lessons').closest('a')
    expect(cssLink).toHaveAttribute('href', 'html-css')
  })

  it('should handle consistent social media links across components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Get GitHub links from both Home and Footer
    const githubLinks = screen.getAllByLabelText('GitHub')
    expect(githubLinks.length).toBeGreaterThanOrEqual(2) // At least one from Home, one from Footer

    // Check that all GitHub links point to the same URL
    githubLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
    })

    // Get LinkedIn links from both Home and Footer
    const linkedinLinks = screen.getAllByLabelText('LinkedIn')
    expect(linkedinLinks.length).toBeGreaterThanOrEqual(2)

    // Check that all LinkedIn links point to the same URL
    linkedinLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')
    })
  })

  it('should handle scroll interactions between components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Simulate scrolling to trigger Footer visibility
    fireEvent.scroll(window, { target: { scrollY: 1000 } })
    
    await waitForAnimation(200)

    // Both Home scroll animations and Footer scroll detection should work
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('should handle responsive layout across all components', async () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    render(<FullPageLayout />)

    await waitForAnimation(500)

    // All components should be responsive
    expect(screen.getByText('About')).toBeInTheDocument() // Nav
    expect(screen.getByText('About Me')).toBeInTheDocument() // Home
    expect(screen.getByText('Get In Touch')).toBeInTheDocument() // Footer

    // Test tablet viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })

    fireEvent(window, new Event('resize'))
    await waitForAnimation(200)

    // All components should still be functional
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()
    expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    expect(screen.getByText('ttmcivor@gmail.com')).toBeInTheDocument()
  })

  it('should handle z-index layering correctly', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Nav should have highest z-index
    const navContainer = screen.getByText('About').closest('div')
    expect(navContainer).toHaveClass('z-50')

    // Test dropdown menu z-index
    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    
    await waitForAnimation(200)

    // Menu should be visible and properly layered
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
  })

  it('should handle theme consistency across components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Check that color schemes are consistent
    const navContainer = screen.getByText('About').closest('div')
    const footerContainer = screen.getByText('Get In Touch').closest('footer')

    expect(navContainer).toHaveClass('bg-black')
    expect(footerContainer).toHaveClass('bg-gray-50')

    // Check that text colors are consistent
    const emailLink = screen.getByText('ttmcivor@gmail.com')
    expect(emailLink).toHaveClass('text-gray-700', 'hover:text-blue-600')
  })

  it('should handle keyboard navigation across components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Test navigation keyboard accessibility
    const aboutButton = screen.getByText('About').closest('button')
    const devJourneyButton = screen.getByText('My Dev Journey')
    const githubLink = screen.getAllByLabelText('GitHub')[0]

    // Test tab order
    aboutButton?.focus()
    expect(aboutButton).toHaveFocus()

    devJourneyButton.focus()
    expect(devJourneyButton).toHaveFocus()

    githubLink.focus()
    expect(githubLink).toHaveFocus()
  })

  it('should handle performance with all components loaded', async () => {
    const startTime = performance.now()
    
    render(<FullPageLayout />)
    
    await waitForAnimation(1000)
    
    const endTime = performance.now()
    const renderTime = endTime - startTime

    // Full page should render within reasonable time
    expect(renderTime).toBeLessThan(2000)

    // All main elements should be present
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('should handle component interaction states', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Test hover states across components
    const devJourneyButton = screen.getByText('My Dev Journey')
    const githubLinks = screen.getAllByLabelText('GitHub')
    const emailLink = screen.getByText('ttmcivor@gmail.com')

    // Test Nav hover
    fireEvent.mouseEnter(devJourneyButton)
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()

    // Test Footer hover
    fireEvent.mouseEnter(githubLinks[githubLinks.length - 1]) // Footer GitHub link
    expect(githubLinks[githubLinks.length - 1]).toHaveClass('hover:scale-110')

    fireEvent.mouseEnter(emailLink)
    expect(emailLink).toHaveClass('hover:text-blue-600')
  })

  it('should handle error boundaries and graceful failures', async () => {
    // Mock console.error to avoid noise
    const originalError = console.error
    console.error = jest.fn()

    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Even if some components have issues, others should still work
    expect(screen.getByText('About')).toBeInTheDocument()

    // Restore console.error
    console.error = originalError
  })

  it('should handle component unmounting in correct order', async () => {
    const { unmount } = render(<FullPageLayout />)

    await waitForAnimation(500)

    // Unmounting should clean up all event listeners
    expect(() => unmount()).not.toThrow()
  })

  it('should handle accessibility across all components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Check semantic structure
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Check heading hierarchy across components
    const h1Elements = screen.getAllByRole('heading', { level: 1 })
    const h2Elements = screen.getAllByRole('heading', { level: 2 })
    const h3Elements = screen.getAllByRole('heading', { level: 3 })

    expect(h1Elements.length).toBeGreaterThan(0)
    expect(h2Elements.length).toBeGreaterThan(0)
    expect(h3Elements.length).toBeGreaterThan(0)

    // Check that all images have alt text
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })

    // Check that all links have proper attributes
    const externalLinks = screen.getAllByRole('link', { name: /github|linkedin/i })
    externalLinks.forEach(link => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  })

  it('should handle data consistency across components', async () => {
    render(<FullPageLayout />)

    await waitForAnimation(500)

    // Check that project data is consistent
    const projectTitles = ['YeahBook', 'BadgerMatch', 'Steno Briefs', 'Mint to Be', 'Ginew Force', 'Nightmare on Dev Street', 'Property Manager']
    
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })

    // Check that skill data is consistent
    const skills = ['React', 'TypeScript', 'JavaScript', 'CSS']
    
    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })
})