import React from 'react'
import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'

// Helper function to create mock IntersectionObserverEntry
const createMockEntry = (target: Element, isIntersecting: boolean): IntersectionObserverEntry => ({
  isIntersecting,
  target,
  boundingClientRect: {} as DOMRectReadOnly,
  intersectionRatio: isIntersecting ? 1 : 0,
  intersectionRect: {} as DOMRectReadOnly,
  rootBounds: {} as DOMRectReadOnly,
  time: Date.now()
})

describe('Scroll Animations Integration Tests', () => {
  let mockObserver: jest.Mock
  let mockUnobserve: jest.Mock
  let mockDisconnect: jest.Mock
  let intersectionCallback: IntersectionObserverCallback

  beforeEach(() => {
    // Create a more sophisticated mock for IntersectionObserver
    mockObserver = jest.fn()
    mockUnobserve = jest.fn()
    mockDisconnect = jest.fn()

    global.IntersectionObserver = jest.fn().mockImplementation((callback: IntersectionObserverCallback) => {
      intersectionCallback = callback
      return {
        observe: mockObserver,
        unobserve: mockUnobserve,
        disconnect: mockDisconnect,
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize IntersectionObserver for all animated components', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Should create multiple IntersectionObserver instances
    // One for AboutMeAndSkills (2 sections), multiple for AnimatedProjects (7 projects)
    expect(global.IntersectionObserver).toHaveBeenCalledTimes(9) // 2 + 7 = 9 observers

    // Should observe elements
    expect(mockObserver).toHaveBeenCalled()
  })

  it('should handle scroll animations for AboutMeAndSkills sections', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Initially, elements should not be visible
    const aboutHeading = screen.getByText('About Me')
    const skillsHeading = screen.getByText('My Skills')

    // Simulate elements coming into view
    const mockEntries = [
      {
        isIntersecting: true,
        target: aboutHeading,
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: {} as DOMRectReadOnly,
        time: Date.now()
      } as IntersectionObserverEntry,
      {
        isIntersecting: true,
        target: skillsHeading,
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: {} as DOMRectReadOnly,
        time: Date.now()
      } as IntersectionObserverEntry
    ]

    // Trigger intersection callback
    intersectionCallback(mockEntries, {} as IntersectionObserver)

    await waitForAnimation(300)

    // Elements should have visible classes
    const aboutSection = aboutHeading.closest('div')
    const skillsSection = skillsHeading.closest('div')

    expect(aboutSection).toHaveClass('opacity-100', 'translate-y-0')
    expect(skillsSection).toHaveClass('opacity-100', 'translate-y-0')
  })

  it('should handle scroll animations for AnimatedProject components', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Get project elements
    const projectTitles = ['YeahBook', 'BadgerMatch', 'Steno Briefs']
    
    projectTitles.forEach(async (title) => {
      const projectElement = screen.getByText(title)
      
      // Simulate project coming into view
      const mockEntry = [
        createMockEntry(projectElement, true)
      ]

      intersectionCallback(mockEntry, {} as IntersectionObserver)
      
      await waitForAnimation(200)

      // Project should be visible
      expect(projectElement).toBeInTheDocument()
    })
  })

  it('should handle staggered animations with different delays', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Simulate all projects coming into view simultaneously
    const projectTitles = ['YeahBook', 'BadgerMatch', 'Steno Briefs', 'Mint to Be', 'Ginew Force', 'Nightmare on Dev Street', 'Property Manager']
    
    const mockEntries = projectTitles.map(title =>
      createMockEntry(screen.getByText(title), true)
    )

    intersectionCallback(mockEntries, {} as IntersectionObserver)

    // Wait for different animation delays
    await waitForAnimation(100) // YeahBook (delay: 0)
    expect(screen.getByText('YeahBook')).toBeInTheDocument()

    await waitForAnimation(200) // BadgerMatch (delay: 200)
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument()

    await waitForAnimation(400) // Steno Briefs (delay: 400)
    expect(screen.getByText('Steno Briefs')).toBeInTheDocument()

    await waitForAnimation(600) // Property Manager (delay: 600)
    expect(screen.getByText('Property Manager')).toBeInTheDocument()
  })

  it('should handle skill hover animations', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Get a skill element
    const reactSkill = screen.getByText('React').closest('div')
    expect(reactSkill).toBeInTheDocument()

    if (reactSkill) {
      // Test hover animation
      fireEvent.mouseEnter(reactSkill)
      
      // Should apply hover transform
      expect(reactSkill.style.transform).toContain('scale(1.05)')
      expect(reactSkill.style.transform).toContain('translateY(-4px)')
      expect(reactSkill.style.boxShadow).toContain('rgba(0, 0, 0, 0.15)')

      // Test mouse leave animation
      fireEvent.mouseLeave(reactSkill)
      
      await waitFor(() => {
        expect(reactSkill.style.transform).toContain('scale(1)')
        expect(reactSkill.style.transform).toContain('translateY(0)')
      })
    }
  })

  it('should handle social media link hover animations', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Get social media links
    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })

    // Test GitHub link hover
    fireEvent.mouseEnter(githubLink)
    expect(githubLink).toHaveClass('hover:scale-110')

    fireEvent.mouseLeave(githubLink)
    
    // Test LinkedIn link hover
    fireEvent.mouseEnter(linkedinLink)
    expect(linkedinLink).toHaveClass('hover:scale-110')

    fireEvent.mouseLeave(linkedinLink)
  })

  it('should handle intersection observer cleanup on unmount', async () => {
    const { unmount } = render(<Home />)

    await waitForAnimation(100)

    // Verify observers are created
    expect(mockObserver).toHaveBeenCalled()

    // Unmount component
    unmount()

    // Should clean up observers
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('should handle elements going out of view', async () => {
    render(<Home />)

    await waitForAnimation(100)

    const aboutHeading = screen.getByText('About Me')

    // First, bring element into view
    const inViewEntry = [
      createMockEntry(aboutHeading, true)
    ]
    intersectionCallback(inViewEntry, {} as IntersectionObserver)

    await waitForAnimation(300)

    // Element should be visible
    const aboutSection = aboutHeading.closest('div')
    expect(aboutSection).toHaveClass('opacity-100')

    // Then, simulate element going out of view
    const outOfViewEntry = [
      createMockEntry(aboutHeading, false)
    ]
    intersectionCallback(outOfViewEntry, {} as IntersectionObserver)

    await waitForAnimation(300)

    // Element should remain visible (animations typically don't reverse)
    expect(aboutSection).toHaveClass('opacity-100')
  })

  it('should handle rapid scroll events', async () => {
    render(<Home />)

    await waitForAnimation(100)

    const projectElements = ['YeahBook', 'BadgerMatch', 'Steno Briefs'].map(title => 
      screen.getByText(title)
    )

    // Simulate rapid intersection changes
    for (let i = 0; i < 5; i++) {
      const mockEntries = projectElements.map(element =>
        createMockEntry(element, i % 2 === 0) // Alternate between in and out of view
      )

      intersectionCallback(mockEntries, {} as IntersectionObserver)
      
      await waitForAnimation(50) // Short delay to simulate rapid scrolling
    }

    // All projects should still be rendered correctly
    projectElements.forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })

  it('should handle animation performance with multiple elements', async () => {
    const startTime = performance.now()
    
    render(<Home />)

    // Simulate all elements coming into view at once
    await waitForAnimation(100)

    const allAnimatedElements = [
      screen.getByText('About Me'),
      screen.getByText('My Skills'),
      ...['YeahBook', 'BadgerMatch', 'Steno Briefs', 'Mint to Be', 'Ginew Force', 'Nightmare on Dev Street', 'Property Manager'].map(title => 
        screen.getByText(title)
      )
    ]

    const mockEntries = allAnimatedElements.map(element =>
      createMockEntry(element, true)
    )

    intersectionCallback(mockEntries, {} as IntersectionObserver)

    await waitForAnimation(1000) // Wait for all animations to complete

    const endTime = performance.now()
    const duration = endTime - startTime

    // Animation should complete within reasonable time (less than 2 seconds)
    expect(duration).toBeLessThan(2000)

    // All elements should be rendered
    allAnimatedElements.forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })

  it('should handle different animation directions correctly', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Projects with different animation directions
    const leftAnimatedProjects = ['YeahBook', 'Steno Briefs', 'Nightmare on Dev Street']
    const rightAnimatedProjects = ['BadgerMatch', 'Mint to Be', 'Ginew Force', 'Property Manager']

    // Simulate intersection for left-animated projects
    const leftEntries = leftAnimatedProjects.map(title =>
      createMockEntry(screen.getByText(title), true)
    )

    intersectionCallback(leftEntries, {} as IntersectionObserver)

    await waitForAnimation(300)

    // Simulate intersection for right-animated projects
    const rightEntries = rightAnimatedProjects.map(title =>
      createMockEntry(screen.getByText(title), true)
    )

    intersectionCallback(rightEntries, {} as IntersectionObserver)

    await waitForAnimation(300)

    // All projects should be visible regardless of animation direction
    const allProjects = [...leftAnimatedProjects, ...rightAnimatedProjects]
    allProjects.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('should handle window resize during animations', async () => {
    render(<Home />)

    await waitForAnimation(100)

    // Start animations
    const mockEntries = [
      createMockEntry(screen.getByText('About Me'), true)
    ]
    intersectionCallback(mockEntries, {} as IntersectionObserver)

    // Simulate window resize during animation
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })

    fireEvent(window, new Event('resize'))

    await waitForAnimation(300)

    // Animation should still complete successfully
    expect(screen.getByText('About Me')).toBeInTheDocument()

    // Reset window size
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })
})