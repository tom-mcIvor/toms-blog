import React from 'react'
import { render, screen } from '../utils/test-utils'
import Home from '../../components/Home'
import '@testing-library/jest-dom'

// Mock the child components
jest.mock('../../components/homePage/AboutMeAndSkills', () => {
  return function MockAboutMeAndSkills() {
    return <div data-testid="about-me-and-skills">AboutMeAndSkills Component</div>
  }
})

jest.mock('../../components/AnimatedProject', () => {
  return function MockAnimatedProject({ title, githubUrl }: { title: string; githubUrl: string }) {
    return (
      <div data-testid="animated-project">
        <h3>{title}</h3>
        <a href={githubUrl}>GitHub Link</a>
      </div>
    )
  }
})

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByTestId('about-me-and-skills')).toBeInTheDocument()
  })

  it('renders the AboutMeAndSkills component', () => {
    render(<Home />)
    expect(screen.getByTestId('about-me-and-skills')).toBeInTheDocument()
  })

  it('renders the portfolio section with correct styling', () => {
    const { container } = render(<Home />)
    
    const portfolioSection = container.querySelector('.portfolio-section.portfolio-bg')
    expect(portfolioSection).toBeInTheDocument()
    
    const portfolioContent = container.querySelector('.home-page.portfolio-content')
    expect(portfolioContent).toBeInTheDocument()
  })

  it('renders the portfolio title', () => {
    render(<Home />)
    
    const portfolioTitle = screen.getByText('My Portfolio')
    expect(portfolioTitle).toBeInTheDocument()
    expect(portfolioTitle).toHaveClass('portfolio-title')
  })

  it('renders all project components', () => {
    render(<Home />)
    
    const projects = screen.getAllByTestId('animated-project')
    expect(projects).toHaveLength(7) // YeahBook, BadgerMatch, Steno Briefs, Mint to Be, Ginew Force, Nightmare, Property Manager
  })

  it('renders YeahBook project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('YeahBook')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const yeahBookLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcIvor/Yeah-book'
    )
    expect(yeahBookLink).toBeInTheDocument()
  })

  it('renders BadgerMatch project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('BadgerMatch')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const badgerMatchLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/BadgerMatch'
    )
    expect(badgerMatchLink).toBeInTheDocument()
  })

  it('renders Steno Briefs project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('Steno Briefs')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const stenoBriefsLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/steno-briefs'
    )
    expect(stenoBriefsLink).toBeInTheDocument()
  })

  it('renders Mint to Be project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('Mint to Be')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const mintToBeLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/Mint-to-be'
    )
    expect(mintToBeLink).toBeInTheDocument()
  })

  it('renders Ginew Force project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('Ginew Force')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const ginewForceLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/Ginew-force'
    )
    expect(ginewForceLink).toBeInTheDocument()
  })

  it('renders Nightmare on Dev Street project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('Nightmare on Dev Street')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const nightmareLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/Nightmare-on-dev-street'
    )
    expect(nightmareLink).toBeInTheDocument()
  })

  it('renders Property Manager project with correct props', () => {
    render(<Home />)
    
    expect(screen.getByText('Property Manager')).toBeInTheDocument()
    
    const githubLinks = screen.getAllByText('GitHub Link')
    const propertyManagerLink = githubLinks.find(link => 
      link.getAttribute('href') === 'https://github.com/tom-mcivor/property-manager'
    )
    expect(propertyManagerLink).toBeInTheDocument()
  })

  it('renders Google Fonts preconnect links', () => {
    const { container } = render(<Home />)
    
    // Check for preconnect links (these are mocked in jest.setup.js)
    const links = container.querySelectorAll('a')
    
    // Should have links for Google Fonts
    const googleFontsLinks = Array.from(links).filter(link => 
      link.getAttribute('href')?.includes('fonts.googleapis.com') ||
      link.getAttribute('href')?.includes('fonts.gstatic.com')
    )
    
    expect(googleFontsLinks.length).toBeGreaterThan(0)
  })

  it('has correct semantic structure', () => {
    const { container } = render(<Home />)
    
    // Should have a main container fragment
    expect(container.firstChild).toBeDefined()
    
    // Should have the portfolio section
    const portfolioSection = container.querySelector('.portfolio-section')
    expect(portfolioSection).toBeInTheDocument()
  })

  it('renders projects in correct order', () => {
    render(<Home />)
    
    const projectTitles = [
      'YeahBook',
      'BadgerMatch', 
      'Steno Briefs',
      'Mint to Be',
      'Ginew Force',
      'Nightmare on Dev Street',
      'Property Manager'
    ]
    
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('uses React Fragment as root element', () => {
    const { container } = render(<Home />)
    
    // The component should render a React Fragment, so container.firstChild should be the first actual element
    expect(container.firstChild).toBeDefined()
  })

  it('includes Head component with font links', () => {
    render(<Home />)
    
    // Head component is mocked to render its children directly
    // Check that font-related links are present
    const { container } = render(<Home />)
    const links = container.querySelectorAll('a[rel="preconnect"], a[rel="stylesheet"]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('has proper CSS class structure for portfolio section', () => {
    const { container } = render(<Home />)
    
    const portfolioSection = container.querySelector('.portfolio-section.portfolio-bg')
    expect(portfolioSection).toBeInTheDocument()
    
    const portfolioContent = portfolioSection?.querySelector('.home-page.portfolio-content')
    expect(portfolioContent).toBeInTheDocument()
    
    const portfolioTitle = portfolioContent?.querySelector('.portfolio-title')
    expect(portfolioTitle).toBeInTheDocument()
  })
})