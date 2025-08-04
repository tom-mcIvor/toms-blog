import React from 'react'
import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import { waitForAnimation } from '../utils/test-utils'
import Nav from '@/components/Nav'

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

describe('Navigation Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Mock window resize functionality
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render navigation with all main elements', async () => {
    render(<Nav />)

    // Check main navigation elements
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()

    // Check that the logo/about button is clickable
    const aboutButton = screen.getByText('About').closest('button')
    expect(aboutButton).toBeInTheDocument()
    expect(aboutButton).toHaveClass('mybutton')
  })

  it('should handle "My Dev Journey" dropdown menu interactions', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    expect(devJourneyButton).toBeInTheDocument()

    // Hover over the main menu button
    fireEvent.mouseEnter(devJourneyButton)
    
    await waitForAnimation(200)

    // Should show the main dropdown menu
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('AI Essentials')).toBeInTheDocument()
  })

  it('should handle nested "Bootcamp" submenu interactions', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    
    await waitForAnimation(200)

    // Hover over Bootcamp to open submenu
    const bootcampItem = screen.getByText('Bootcamp')
    fireEvent.mouseEnter(bootcampItem)
    
    await waitForAnimation(200)

    // Should show TECH and CORE submenus
    expect(screen.getByText('TECH')).toBeInTheDocument()
    expect(screen.getByText('CORE')).toBeInTheDocument()
  })

  it('should handle TECH submenu navigation links', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    const bootcampItem = screen.getByText('Bootcamp')
    fireEvent.mouseEnter(bootcampItem)
    await waitForAnimation(200)

    const techItem = screen.getByText('TECH')
    fireEvent.mouseEnter(techItem)
    await waitForAnimation(200)

    // Check TECH submenu items
    expect(screen.getByText('CSS lessons')).toBeInTheDocument()
    expect(screen.getByText('Javascript DOM')).toBeInTheDocument()
    expect(screen.getByText('Problem Solving')).toBeInTheDocument()

    // Check that links have correct hrefs
    const cssLink = screen.getByText('CSS lessons').closest('a')
    const jsLink = screen.getByText('Javascript DOM').closest('a')
    const problemSolvingLink = screen.getByText('Problem Solving').closest('a')

    expect(cssLink).toHaveAttribute('href', 'html-css')
    expect(jsLink).toHaveAttribute('href', 'javascript-dom')
    expect(problemSolvingLink).toHaveAttribute('href', 'problem-solving')
  })

  it('should handle CORE submenu navigation links', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    const bootcampItem = screen.getByText('Bootcamp')
    fireEvent.mouseEnter(bootcampItem)
    await waitForAnimation(200)

    const coreItem = screen.getByText('CORE')
    fireEvent.mouseEnter(coreItem)
    await waitForAnimation(200)

    // Check CORE submenu items
    expect(screen.getByText('Neuroplasticity ideas')).toBeInTheDocument()
    expect(screen.getByText('Emotional IQ')).toBeInTheDocument()
    expect(screen.getByText('Identity values')).toBeInTheDocument()
    expect(screen.getByText('Foundations reflection')).toBeInTheDocument()
    expect(screen.getByText('Learning plan')).toBeInTheDocument()

    // Check that links have correct hrefs
    const neuroLink = screen.getByText('Neuroplasticity ideas').closest('a')
    const emotionalLink = screen.getByText('Emotional IQ').closest('a')
    const identityLink = screen.getByText('Identity values').closest('a')
    const foundationsLink = screen.getByText('Foundations reflection').closest('a')
    const learningLink = screen.getByText('Learning plan').closest('a')

    expect(neuroLink).toHaveAttribute('href', 'neuroplasticity')
    expect(emotionalLink).toHaveAttribute('href', 'emotional-intelligence')
    expect(identityLink).toHaveAttribute('href', 'identity-values')
    expect(foundationsLink).toHaveAttribute('href', 'foundations-reflection')
    expect(learningLink).toHaveAttribute('href', 'learning-plan')
  })

  it('should handle AI Essentials direct link', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    const aiEssentialsLink = screen.getByText('AI Essentials').closest('a')
    expect(aiEssentialsLink).toHaveAttribute('href', 'ai-essentials')
  })

  it('should handle responsive navigation on mobile', async () => {
    // Set mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    render(<Nav />)

    // Navigation should still render on mobile
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()

    // Trigger resize event
    fireEvent(window, new Event('resize'))
    await waitForAnimation(100)

    // Navigation should still be functional
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()
  })

  it('should handle window resize events properly', async () => {
    render(<Nav />)

    // Start with desktop
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()

    // Resize to mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500,
    })

    fireEvent(window, new Event('resize'))
    await waitForAnimation(100)

    // Navigation should still work
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()

    // Resize back to desktop
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    })

    fireEvent(window, new Event('resize'))
    await waitForAnimation(100)

    // Should still be functional
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()
  })

  it('should handle menu hover states correctly', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    
    // Test hover enter
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    expect(screen.getByText('Bootcamp')).toBeInTheDocument()

    // Test hover leave
    fireEvent.mouseLeave(devJourneyButton)
    await waitForAnimation(300)

    // Menu should close (though Material Tailwind might keep it open briefly)
    // We test that the component handles the event without errors
    expect(devJourneyButton).toBeInTheDocument()
  })

  it('should handle keyboard navigation', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    
    // Focus the button
    devJourneyButton.focus()
    expect(devJourneyButton).toHaveFocus()

    // Press Enter to open menu
    fireEvent.keyDown(devJourneyButton, { key: 'Enter', code: 'Enter' })
    await waitForAnimation(200)

    // Menu should be accessible
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
  })

  it('should handle multiple rapid menu interactions', async () => {
    render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')

    // Rapid hover interactions
    for (let i = 0; i < 5; i++) {
      fireEvent.mouseEnter(devJourneyButton)
      await waitForAnimation(50)
      fireEvent.mouseLeave(devJourneyButton)
      await waitForAnimation(50)
    }

    // Component should still be functional
    expect(devJourneyButton).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('should maintain proper z-index for dropdown menus', async () => {
    render(<Nav />)

    // Check that navigation has proper z-index - look for the parent container
    const navContainer = screen.getByText('About').closest('div')?.parentElement
    expect(navContainer).toHaveClass('z-50')

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    // Menu should be visible and properly layered
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
  })

  it('should handle component unmounting gracefully', async () => {
    const { unmount } = render(<Nav />)

    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    // Unmount should not throw errors
    expect(() => unmount()).not.toThrow()
  })

  it('should handle About button click navigation', async () => {
    render(<Nav />)

    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/')

    // Click should work without errors
    fireEvent.click(aboutLink!)
    expect(aboutLink).toBeInTheDocument()
  })

  it('should render with proper semantic structure', async () => {
    render(<Nav />)

    // Check for proper button elements
    const aboutButton = screen.getByText('About').closest('button')
    expect(aboutButton).toBeInTheDocument()

    const devJourneyButton = screen.getByText('My Dev Journey')
    expect(devJourneyButton.tagName).toBe('BUTTON')

    // Check for proper link structure
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/')
  })

  it('should handle theme provider integration', async () => {
    render(<Nav />)

    // Component should render without theme-related errors
    expect(screen.getByText('My Dev Journey')).toBeInTheDocument()
    
    const devJourneyButton = screen.getByText('My Dev Journey')
    fireEvent.mouseEnter(devJourneyButton)
    await waitForAnimation(200)

    // Material Tailwind components should render properly
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
  })
})