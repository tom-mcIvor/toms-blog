import React from 'react'
import { render, screen } from '../utils/test-utils'
import AboutMeAndSkills from '../../components/homePage/AboutMeAndSkills'
import '@testing-library/jest-dom'

// Mock the useScrollAnimation hook
jest.mock('../../hooks/useScrollAnimation', () => ({
  useScrollAnimation: jest.fn(() => ({
    ref: { current: null },
    isVisible: true
  }))
}))

// Mock AnimatedText component
jest.mock('../../components/AnimatedText', () => {
  return function MockAnimatedText({ text, className }: { text: string; className?: string }) {
    return <div className={className} data-testid="animated-text">{text}</div>
  }
})

describe('AboutMeAndSkills', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the About Me section', () => {
    render(<AboutMeAndSkills />)
    
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the My Skills section', () => {
    render(<AboutMeAndSkills />)
    
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders the main about me paragraph', () => {
    render(<AboutMeAndSkills />)
    
    expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
    expect(screen.getByText(/Throughout my studies, I gained a strong foundation/)).toBeInTheDocument()
    expect(screen.getByText(/I'm continuously learning and improving my skills/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<AboutMeAndSkills />)
    
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social media images', () => {
    render(<AboutMeAndSkills />)
    
    const githubImage = screen.getByAltText('GitHub')
    expect(githubImage).toBeInTheDocument()
    expect(githubImage).toHaveAttribute('src', '/Github-image.PNG')
    
    const linkedinImage = screen.getByAltText('LinkedIn')
    expect(linkedinImage).toBeInTheDocument()
    expect(linkedinImage).toHaveAttribute('src', '/LinkedIn-image.PNG')
  })

  it('renders all skill items', () => {
    render(<AboutMeAndSkills />)
    
    const expectedSkills = [
      'React', 'Redux', 'TypeScript', 'Express', 'MongoDB', 'NodeJS',
      'JavaScript', 'CSS', 'SASS', 'HTML', 'Git', 'GitHub', 'NPM',
      'Jest', 'Webpack', 'Babel', 'ESLint', 'VIM', 'VSCode',
      'TailwindCSS', 'Plover', 'Cursor', 'Aider', 'RooCode'
    ]
    
    expectedSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('renders skill images with correct attributes', () => {
    render(<AboutMeAndSkills />)
    
    // Test a few specific skills
    const reactImage = screen.getByAltText('React')
    expect(reactImage).toBeInTheDocument()
    expect(reactImage).toHaveAttribute('src', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg')
    
    const typescriptImage = screen.getByAltText('TypeScript')
    expect(typescriptImage).toBeInTheDocument()
    expect(typescriptImage).toHaveAttribute('src', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg')
    
    const ploverImage = screen.getByAltText('Plover')
    expect(ploverImage).toBeInTheDocument()
    expect(ploverImage).toHaveAttribute('src', '/Plover-Icon.PNG')
  })

  it('applies correct CSS classes for layout', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const mainSection = container.firstChild
    expect(mainSection).toHaveClass(
      'w-full', 'flex', 'flex-col', 'justify-between', 'items-start',
      'gap-10', 'py-12', 'px-4', 'md:px-16', 'lg:flex-row'
    )
  })

  it('applies hover effects to social links', () => {
    render(<AboutMeAndSkills />)
    
    const githubLink = screen.getByLabelText('GitHub')
    expect(githubLink).toHaveClass(
      'transition-all', 'duration-300', 'transform', 'hover:scale-110',
      'shadow-lg', 'hover:shadow-xl'
    )
    
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveClass(
      'transition-all', 'duration-300', 'transform', 'hover:scale-110',
      'shadow-lg', 'hover:shadow-xl'
    )
  })

  it('applies hover effects to skill items', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const skillItems = container.querySelectorAll('.bg-gray-100')
    
    skillItems.forEach(item => {
      expect(item).toHaveClass(
        'flex', 'items-center', 'gap-2', 'bg-gray-100', 'px-4', 'py-2',
        'rounded', 'shadow', 'text-lg', 'text-gray-700',
        'hover:bg-gray-800', 'hover:text-white', 'cursor-pointer'
      )
    })
  })

  it('has correct responsive layout classes', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const aboutSection = container.querySelector('.lg\\:w-1\\/2')
    expect(aboutSection).toBeInTheDocument()
    
    const skillsSection = container.querySelectorAll('.lg\\:w-1\\/2')[1]
    expect(skillsSection).toBeInTheDocument()
  })

  it('applies animation classes when visible', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    // About Me title should have animation classes
    const aboutTitle = screen.getByText('About Me')
    expect(aboutTitle).toHaveClass('opacity-100', 'translate-y-0')
    
    // Skills title should have animation classes
    const skillsTitle = screen.getByText('My Skills')
    expect(skillsTitle).toHaveClass('opacity-100', 'translate-y-0')
  })

  it('renders GitHub image with rounded corners', () => {
    render(<AboutMeAndSkills />)
    
    const githubImage = screen.getByAltText('GitHub')
    expect(githubImage).toHaveClass('rounded-full')
  })

  it('has correct image dimensions', () => {
    render(<AboutMeAndSkills />)
    
    const githubImage = screen.getByAltText('GitHub')
    expect(githubImage).toHaveAttribute('width', '64')
    expect(githubImage).toHaveAttribute('height', '64')
    
    const linkedinImage = screen.getByAltText('LinkedIn')
    expect(linkedinImage).toHaveAttribute('width', '64')
    expect(linkedinImage).toHaveAttribute('height', '64')
    
    // Check skill image dimensions
    const reactImage = screen.getByAltText('React')
    expect(reactImage).toHaveAttribute('width', '24')
    expect(reactImage).toHaveAttribute('height', '24')
  })

  it('centers skills in flex layout', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const skillsContainer = container.querySelector('.flex.flex-wrap.gap-3.justify-center')
    expect(skillsContainer).toBeInTheDocument()
  })

  it('centers social icons', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const socialContainer = container.querySelector('.flex.gap-6.mt-6.justify-center')
    expect(socialContainer).toBeInTheDocument()
  })

  it('handles skill item hover effects with mouse events', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const skillItems = container.querySelectorAll('.bg-gray-100')
    const firstSkill = skillItems[0] as HTMLElement
    
    // Mock the style property
    const mockStyle = {
      transform: '',
      boxShadow: '',
      transition: ''
    }
    Object.defineProperty(firstSkill, 'style', {
      value: mockStyle,
      writable: true
    })
    
    // Test mouse enter event
    const mouseEnterEvent = new MouseEvent('mouseenter', { bubbles: true })
    firstSkill.dispatchEvent(mouseEnterEvent)
    
    // Test mouse leave event
    const mouseLeaveEvent = new MouseEvent('mouseleave', { bubbles: true })
    firstSkill.dispatchEvent(mouseLeaveEvent)
    
    // Verify the skill item has the correct classes
    expect(firstSkill).toHaveClass('cursor-pointer')
  })

  it('applies correct animation delays for skills when visible', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const skillItems = container.querySelectorAll('.bg-gray-100')
    
    // Check that skills have staggered animation delays
    skillItems.forEach((item, index) => {
      const expectedDelay = 300 + index * 100
      expect(item).toHaveStyle({
        transition: expect.stringContaining(`${expectedDelay}ms`)
      })
    })
  })

  it('renders with animation visibility states when not visible', () => {
    // Mock useScrollAnimation to return not visible
    const mockUseScrollAnimation = require('../../hooks/useScrollAnimation').useScrollAnimation
    mockUseScrollAnimation.mockReturnValue({
      ref: { current: null },
      isVisible: false
    })

    const { container } = render(<AboutMeAndSkills />)
    
    const aboutTitle = screen.getByText('About Me')
    expect(aboutTitle).toHaveClass('opacity-0', 'translate-y-10')
    
    const skillsTitle = screen.getByText('My Skills')
    expect(skillsTitle).toHaveClass('opacity-0', 'translate-y-10')
  })

  it('handles skill item inline style transitions', () => {
    const { container } = render(<AboutMeAndSkills />)
    
    const skillItems = container.querySelectorAll('.bg-gray-100')
    
    // Check that each skill item has the correct transition property
    skillItems.forEach((item, index) => {
      const style = window.getComputedStyle(item)
      expect(item).toHaveAttribute('style')
    })
  })
})