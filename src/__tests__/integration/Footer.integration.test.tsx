import React from 'react'
import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import { waitForAnimation } from '../utils/test-utils'
import Footer from '@/components/Footer'

// Mock Next.js Image component
jest.mock('next/image', () => {
  const MockImage = ({ src, alt, width, height, className, ...props }: any) => {
    return (
      <img
        src={src}
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

describe('Footer Integration Tests', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    })
    
    // Reset window dimensions
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })

    // Mock getBoundingClientRect
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

  it('should render footer with all main elements', async () => {
    render(<Footer />)

    // Check main footer elements
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('ttmcivor@gmail.com')).toBeInTheDocument()
    
    // Check social media links
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    
    // Check copyright with current year
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Thomas McIvor. All rights reserved.`)).toBeInTheDocument()
  })

  it('should handle email link functionality', async () => {
    render(<Footer />)

    const emailLink = screen.getByText('ttmcivor@gmail.com')
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:ttmcivor@gmail.com')
    
    // Test hover effect
    fireEvent.mouseEnter(emailLink)
    expect(emailLink).toHaveClass('hover:text-blue-600')
    
    fireEvent.mouseLeave(emailLink)
    expect(emailLink).toHaveClass('text-gray-700')
  })

  it('should handle GitHub social link correctly', async () => {
    render(<Footer />)

    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check GitHub image
    const githubImage = screen.getByAltText('GitHub')
    expect(githubImage).toHaveAttribute('src', '/Github-image.PNG')
    expect(githubImage).toHaveAttribute('width', '48')
    expect(githubImage).toHaveAttribute('height', '48')
    expect(githubImage).toHaveClass('rounded-full')
  })

  it('should handle LinkedIn social link correctly', async () => {
    render(<Footer />)

    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check LinkedIn image
    const linkedinImage = screen.getByAltText('LinkedIn')
    expect(linkedinImage).toHaveAttribute('src', '/LinkedIn-image.PNG')
    expect(linkedinImage).toHaveAttribute('width', '48')
    expect(linkedinImage).toHaveAttribute('height', '48')
    expect(linkedinImage).toHaveClass('rounded-full')
  })

  it('should handle social link hover animations', async () => {
    render(<Footer />)

    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')

    // Test GitHub hover
    fireEvent.mouseEnter(githubLink)
    expect(githubLink).toHaveClass('hover:scale-110', 'hover:shadow-xl')
    
    fireEvent.mouseLeave(githubLink)
    expect(githubLink).toHaveClass('shadow-lg')

    // Test LinkedIn hover
    fireEvent.mouseEnter(linkedinLink)
    expect(linkedinLink).toHaveClass('hover:scale-110', 'hover:shadow-xl')
    
    fireEvent.mouseLeave(linkedinLink)
    expect(linkedinLink).toHaveClass('shadow-lg')
  })

  it('should handle scroll-based visibility animation', async () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    
    // Initially, footer should be rendered
    expect(footer).toBeInTheDocument()

    // Mock footer being in view
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      top: 500,
      bottom: 600,
      left: 0,
      right: 1024,
      width: 1024,
      height: 100,
      x: 0,
      y: 500,
      toJSON: () => ({}),
    })) as any

    // Trigger scroll event
    fireEvent.scroll(window)
    
    await waitForAnimation(100)

    // Footer should have animation class
    expect(footer).toHaveClass('animate-in')
  })

  it('should handle scroll events when footer is out of view', async () => {
    render(<Footer />)

    // Mock footer being out of view
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      top: 1000,
      bottom: 1100,
      left: 0,
      right: 1024,
      width: 1024,
      height: 100,
      x: 0,
      y: 1000,
      toJSON: () => ({}),
    })) as any

    // Trigger scroll event
    fireEvent.scroll(window)
    
    await waitForAnimation(100)

    const footer = screen.getByRole('contentinfo')
    // Footer should not have animation class when out of view
    expect(footer).not.toHaveClass('animate-in')
  })

  it('should handle responsive layout on mobile', async () => {
    // Set mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('px-4', 'md:px-16')

    // Check that content is properly structured for mobile
    const contentContainer = footer.querySelector('.footer-content')
    expect(contentContainer).toHaveClass('flex-col', 'md:flex-row')
    expect(contentContainer).toHaveClass('space-y-4', 'md:space-y-0')
  })

  it('should handle responsive layout on desktop', async () => {
    // Set desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1440,
    })

    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('px-4', 'md:px-16')

    // Check that content is properly structured for desktop
    const contentContainer = footer.querySelector('.footer-content')
    expect(contentContainer).toHaveClass('md:flex-row', 'md:space-x-8')
  })

  it('should handle multiple rapid scroll events', async () => {
    render(<Footer />)

    // Simulate rapid scrolling
    for (let i = 0; i < 10; i++) {
      fireEvent.scroll(window)
      await waitForAnimation(10)
    }

    // Footer should still be functional
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('should clean up scroll event listeners on unmount', async () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    
    const { unmount } = render(<Footer />)
    
    // Unmount component
    unmount()
    
    // Should have cleaned up scroll listener
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    
    removeEventListenerSpy.mockRestore()
  })

  it('should handle accessibility features correctly', async () => {
    render(<Footer />)

    // Check semantic structure
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    // Check heading structure
    const heading = screen.getByRole('heading', { name: 'Get In Touch' })
    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('H3')

    // Check link accessibility
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    
    expect(githubLink).toHaveAttribute('aria-label', 'GitHub')
    expect(linkedinLink).toHaveAttribute('aria-label', 'LinkedIn')

    // Check images have proper alt text
    const githubImage = screen.getByAltText('GitHub')
    const linkedinImage = screen.getByAltText('LinkedIn')
    
    expect(githubImage).toHaveAttribute('alt', 'GitHub')
    expect(linkedinImage).toHaveAttribute('alt', 'LinkedIn')
  })

  it('should handle keyboard navigation for social links', async () => {
    render(<Footer />)

    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')

    // Test tab navigation
    githubLink.focus()
    expect(githubLink).toHaveFocus()

    // Test Enter key
    fireEvent.keyDown(githubLink, { key: 'Enter', code: 'Enter' })
    expect(githubLink).toBeInTheDocument()

    // Test Space key
    fireEvent.keyDown(linkedinLink, { key: ' ', code: 'Space' })
    expect(linkedinLink).toBeInTheDocument()
  })

  it('should handle edge cases with scroll detection', async () => {
    render(<Footer />)

    // Test when footer element is not found
    const originalQuerySelector = document.querySelector
    document.querySelector = jest.fn().mockReturnValue(null)

    fireEvent.scroll(window)
    await waitForAnimation(100)

    // Should not throw errors
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()

    // Restore original querySelector
    document.querySelector = originalQuerySelector
  })

  it('should handle window resize during scroll detection', async () => {
    render(<Footer />)

    // Change window height
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1200,
    })

    fireEvent.scroll(window)
    await waitForAnimation(100)

    // Footer should still work correctly
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('should render with proper CSS classes and styling', async () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass(
      'w-full',
      'bg-gray-50',
      'border-t',
      'border-gray-200',
      'py-12',
      'footer-container'
    )

    // Check title styling
    const title = screen.getByText('Get In Touch')
    expect(title).toHaveClass('text-2xl', 'font-bold', 'text-gray-800', 'footer-title')

    // Check email styling
    const emailLink = screen.getByText('ttmcivor@gmail.com')
    expect(emailLink).toHaveClass('text-gray-700', 'hover:text-blue-600', 'transition-colors')

    // Check social links styling
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveClass('transition-all', 'duration-300', 'transform', 'hover:scale-110')
  })

  it('should handle copyright year dynamically', async () => {
    // Mock different year by spying on Date constructor
    const originalDate = global.Date
    const mockDate = jest.fn().mockImplementation(() => ({
      getFullYear: () => 2025
    }))
    global.Date = mockDate as any

    render(<Footer />)

    expect(screen.getByText('© 2025 Thomas McIvor. All rights reserved.')).toBeInTheDocument()

    // Restore original Date
    global.Date = originalDate
  })
})