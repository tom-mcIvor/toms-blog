import React from 'react'
import { render, screen, fireEvent, waitFor } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'
import AboutMeAndSkills from '@/components/homePage/AboutMeAndSkills'

describe('AboutMeAndSkills Integration Tests', () => {
  beforeEach(() => {
    mockIntersectionObserver(true)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render AboutMeAndSkills component within Home page', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // Check that AboutMeAndSkills section is rendered
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()

    // Check that the about me content is present
    expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
  })

  it('should display all skills with proper icons and names', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Expected skills from the component
    const expectedSkills = [
      'React', 'Redux', 'TypeScript', 'Express', 'MongoDB', 'NodeJS',
      'JavaScript', 'CSS', 'SASS', 'HTML', 'Git', 'GitHub', 'NPM',
      'Jest', 'Webpack', 'Babel', 'ESLint', 'VIM', 'VSCode',
      'TailwindCSS', 'Plover', 'Cursor', 'Aider', 'RooCode'
    ]

    // Check that all skills are rendered
    expectedSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })

    // Check that skill icons are rendered
    const skillImages = screen.getAllByRole('img')
    const skillIcons = skillImages.filter(img => 
      expectedSkills.some(skill => img.getAttribute('alt') === skill)
    )
    expect(skillIcons).toHaveLength(expectedSkills.length)
  })

  it('should render social media links with proper attributes', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Check GitHub link
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check LinkedIn link
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should handle scroll animations for about and skills sections', async () => {
    const { mockObserver } = mockIntersectionObserver(false)
    
    render(<AboutMeAndSkills />)

    // Verify IntersectionObserver is set up
    expect(mockObserver).toHaveBeenCalled()

    // Initially elements should not be visible (opacity-0)
    const aboutSection = screen.getByText('About Me').closest('div')
    const skillsSection = screen.getByText('My Skills').closest('div')

    expect(aboutSection).toHaveClass('opacity-0')
    expect(skillsSection).toHaveClass('opacity-0')

    // Simulate intersection
    mockIntersectionObserver(true)
    
    await waitForAnimation(300)

    // Elements should become visible
    expect(aboutSection).toHaveClass('opacity-100')
    expect(skillsSection).toHaveClass('opacity-100')
  })

  it('should handle skill hover interactions', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Get a skill element
    const reactSkill = screen.getByText('React').closest('div')
    expect(reactSkill).toBeInTheDocument()

    // Simulate hover
    if (reactSkill) {
      fireEvent.mouseEnter(reactSkill)
      
      // Check that hover styles are applied
      expect(reactSkill.style.transform).toContain('scale(1.05)')
      expect(reactSkill.style.boxShadow).toContain('rgba(0, 0, 0, 0.15)')

      // Simulate mouse leave
      fireEvent.mouseLeave(reactSkill)
      
      // Check that hover styles are removed
      await waitFor(() => {
        expect(reactSkill.style.transform).toContain('scale(1)')
      })
    }
  })

  it('should display proper layout structure and responsive design', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Check main section structure
    const mainSection = screen.getByText('About Me').closest('section')
    expect(mainSection).toHaveClass('w-full', 'flex', 'flex-col', 'lg:flex-row')

    // Check about section
    const aboutDiv = screen.getByText('About Me').closest('div')
    expect(aboutDiv).toHaveClass('lg:w-1/2')

    // Check skills section
    const skillsDiv = screen.getByText('My Skills').closest('div')
    expect(skillsDiv).toHaveClass('lg:w-1/2')
  })

  it('should render complete about me text content', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Check for key phrases in the about me text
    expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
    expect(screen.getByText(/Throughout my studies, I gained a strong foundation/)).toBeInTheDocument()
    expect(screen.getByText(/I'm continuously learning and improving my skills/)).toBeInTheDocument()
    expect(screen.getByText(/YeahBook, a tennis dashboard/)).toBeInTheDocument()
  })

  it('should handle staggered skill animations', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Get all skill elements
    const skillElements = screen.getAllByText(/React|TypeScript|JavaScript/).map(el => el.closest('div'))

    // Each skill should have different animation delays
    skillElements.forEach((skill, index) => {
      if (skill) {
        const style = window.getComputedStyle(skill)
        // Skills should have staggered animation delays
        expect(skill.style.transition).toContain(`${300 + index * 100}ms`)
      }
    })
  })

  it('should integrate properly with Home component layout', async () => {
    render(<Home />)

    await waitForAnimation(500)

    // AboutMeAndSkills should be rendered before portfolio section
    const aboutSection = screen.getByText('About Me')
    const portfolioSection = screen.getByText('My Portfolio')

    // Both should be in the document
    expect(aboutSection).toBeInTheDocument()
    expect(portfolioSection).toBeInTheDocument()

    // AboutMeAndSkills should come before portfolio in DOM order
    const aboutElement = aboutSection.closest('section')
    const portfolioElement = portfolioSection.closest('div')
    
    if (aboutElement && portfolioElement) {
      expect(aboutElement.compareDocumentPosition(portfolioElement)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
    }
  })

  it('should handle accessibility features properly', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Check heading hierarchy
    expect(screen.getByRole('heading', { level: 1, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Skills' })).toBeInTheDocument()

    // Check that social links have proper aria-labels
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('aria-label', 'GitHub')
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('aria-label', 'LinkedIn')

    // Check that all images have alt text
    const images = screen.getAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('should handle different viewport sizes correctly', async () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Content should still be accessible on mobile
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()

    // Reset viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('should handle skill grid layout properly', async () => {
    render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Skills container should have proper flex classes
    const skillsContainer = screen.getByText('React').closest('div')?.parentElement
    expect(skillsContainer).toHaveClass('flex', 'flex-wrap', 'gap-3', 'justify-center')

    // Individual skills should have proper styling
    const reactSkill = screen.getByText('React').closest('div')
    expect(reactSkill).toHaveClass('flex', 'items-center', 'gap-2', 'bg-gray-100')
  })

  it('should handle component unmounting without errors', async () => {
    const { unmount } = render(<AboutMeAndSkills />)

    await waitForAnimation(500)

    // Should unmount without throwing errors
    expect(() => unmount()).not.toThrow()
  })
})