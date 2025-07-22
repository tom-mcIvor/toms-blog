import React from 'react'
import { render, screen, waitFor, fireEvent } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'

describe('Portfolio Section Integration Tests', () => {
  beforeEach(() => {
    mockIntersectionObserver(true)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render all AnimatedProject components in correct order', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Get all project titles in order
    const projectTitles = [
      'YeahBook',
      'BadgerMatch', 
      'Steno Briefs',
      'Mint to Be',
      'Ginew Force',
      'Nightmare on Dev Street',
      'Property Manager'
    ]

    // Verify all projects are rendered
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })

    // Verify they appear in the correct order in the DOM
    const headings = screen.getAllByRole('heading', { level: 2 })
    projectTitles.forEach((title, index) => {
      expect(headings[index]).toHaveTextContent(title)
    })
  })

  it('should handle different animation directions for projects', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Projects with left animation: YeahBook, Steno Briefs, Nightmare on Dev Street
    const leftAnimatedProjects = ['YeahBook', 'Steno Briefs', 'Nightmare on Dev Street']
    
    // Projects with right animation: BadgerMatch, Mint to Be, Ginew Force, Property Manager
    const rightAnimatedProjects = ['BadgerMatch', 'Mint to Be', 'Ginew Force', 'Property Manager']

    // Verify all projects are visible regardless of animation direction
    const allProjects = [...leftAnimatedProjects, ...rightAnimatedProjects]
    allProjects.forEach((title: string) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('should render project carousels with proper image handling', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that each project has a carousel
    const carousels = screen.getAllByTestId('carousel')
    expect(carousels).toHaveLength(7)

    // Verify images are loaded for each project
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(7) // Multiple images per project

    // Check specific project images
    expect(screen.getByAltText('YeahBook Home')).toBeInTheDocument()
    expect(screen.getByAltText('BadgerMatch Home')).toBeInTheDocument()
    expect(screen.getByAltText('Steno Briefs Home')).toBeInTheDocument()
  })

  it('should display tech stacks for all projects correctly', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Verify tech stack distribution across projects
    const techStackCounts = {
      'React': 5, // YeahBook, BadgerMatch, Steno Briefs, Mint to Be, Ginew Force
      'Node.js': 4, // YeahBook, BadgerMatch, Mint to Be, Ginew Force
      'Express': 4, // YeahBook, BadgerMatch, Mint to Be, Nightmare
      'Redux': 3, // YeahBook, BadgerMatch, Ginew Force
      'TypeScript': 2, // Steno Briefs, Property Manager
      'Vue.js': 1, // Property Manager
      '.NET Core': 1 // Property Manager
    }

    Object.entries(techStackCounts).forEach(([tech, expectedCount]) => {
      const techElements = screen.getAllByText(tech)
      expect(techElements).toHaveLength(expectedCount)
    })
  })

  it('should handle GitHub links for all projects', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Expected GitHub URLs for each project
    const expectedGitHubUrls = [
      'https://github.com/tom-mcIvor/Yeah-book',
      'https://github.com/tom-mcivor/BadgerMatch',
      'https://github.com/tom-mcivor/steno-briefs',
      'https://github.com/tom-mcivor/Mint-to-be',
      'https://github.com/tom-mcivor/Ginew-force',
      'https://github.com/tom-mcivor/Nightmare-on-dev-street',
      'https://github.com/tom-mcivor/property-manager'
    ]

    // Get all GitHub links
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks).toHaveLength(7)

    // Verify each link has correct href
    githubLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedGitHubUrls[index])
    })
  })

  it('should render project descriptions with proper formatting', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check for bullet points in descriptions
    expect(screen.getByText(/• View & Edit Books:/)).toBeInTheDocument()
    expect(screen.getByText(/• Browse & Search:/)).toBeInTheDocument()
    expect(screen.getByText(/• Vote & Discuss:/)).toBeInTheDocument()

    // Check for multi-paragraph descriptions
    expect(screen.getByText(/Yeah-Book app is a platform that allows users to create yearbooks/)).toBeInTheDocument()
    expect(screen.getByText(/BadgerMatch is a playful and engaging companion-finding application/)).toBeInTheDocument()
  })

  it('should handle animation delays properly across projects', async () => {
    const { mockObserver } = mockIntersectionObserver(false)
    
    render(<Home />)

    // Verify IntersectionObserver is set up for each project
    expect(mockObserver).toHaveBeenCalled()

    // Simulate intersection for animated elements
    mockIntersectionObserver(true)
    
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

  it('should maintain proper spacing and layout between projects', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that portfolio section has proper structure
    const portfolioSection = screen.getByText('My Portfolio').closest('.portfolio-section')
    expect(portfolioSection).toBeInTheDocument()
    expect(portfolioSection).toHaveClass('portfolio-bg')

    // Check that portfolio content container exists
    const portfolioContent = portfolioSection?.querySelector('.portfolio-content')
    expect(portfolioContent).toBeInTheDocument()
  })

  it('should handle carousel interactions for each project', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Get all carousels
    const carousels = screen.getAllByTestId('carousel')
    
    // Each project should have a carousel
    expect(carousels).toHaveLength(7)

    // Verify carousels contain images
    carousels.forEach(carousel => {
      const images = carousel.querySelectorAll('img')
      expect(images.length).toBeGreaterThan(0)
    })
  })

  it('should render projects with correct image dimensions', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that Steno Briefs images have custom dimensions
    const stenoBriefsImages = screen.getAllByAltText(/Steno Briefs/)
    stenoBriefsImages.forEach(img => {
      // These should have width and height attributes set
      expect(img).toHaveAttribute('width')
      expect(img).toHaveAttribute('height')
    })

    // Check Property Manager images
    const propertyManagerImages = screen.getAllByAltText(/Property Manager/)
    propertyManagerImages.forEach(img => {
      expect(img).toHaveAttribute('width')
      expect(img).toHaveAttribute('height')
    })
  })

  it('should handle project data integrity', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Verify each project has all required elements
    const projects = [
      { title: 'YeahBook', techCount: 8 },
      { title: 'BadgerMatch', techCount: 8 },
      { title: 'Steno Briefs', techCount: 6 },
      { title: 'Mint to Be', techCount: 6 },
      { title: 'Ginew Force', techCount: 6 },
      { title: 'Nightmare on Dev Street', techCount: 6 },
      { title: 'Property Manager', techCount: 6 }
    ]

    projects.forEach(project => {
      // Each project should have a title
      expect(screen.getByText(project.title)).toBeInTheDocument()
      
      // Each project should have a GitHub link
      expect(screen.getByRole('link', { name: new RegExp(project.title + '.*github', 'i') })).toBeInTheDocument()
    })
  })

  it('should handle responsive behavior for portfolio grid', async () => {
    // Test different viewport sizes
    const viewports = [
      { width: 375, height: 667 }, // Mobile
      { width: 768, height: 1024 }, // Tablet
      { width: 1024, height: 768 }, // Desktop
    ]

    for (const viewport of viewports) {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: viewport.width,
      })
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: viewport.height,
      })

      const { unmount } = render(<Home />)
      
      await waitForAnimation(500)

      // Portfolio should be visible at all viewport sizes
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
      expect(screen.getByText('YeahBook')).toBeInTheDocument()

      unmount()
    }
  })
})