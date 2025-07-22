import React from 'react'
import { render, screen } from '../utils/test-utils'
import AnimatedProject from '../../components/AnimatedProject'
import { mockProjectProps } from '../utils/test-utils'
import '@testing-library/jest-dom'

// Mock the useScrollAnimation hook
jest.mock('../../hooks/useScrollAnimation', () => ({
  useScrollAnimation: jest.fn(() => ({
    ref: { current: null },
    isVisible: true
  }))
}))

describe('AnimatedProject', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders project title as a link', () => {
    render(<AnimatedProject {...mockProjectProps} />)
    
    const titleLink = screen.getByRole('link', { name: mockProjectProps.title })
    expect(titleLink).toBeInTheDocument()
    expect(titleLink).toHaveAttribute('href', mockProjectProps.githubUrl)
    expect(titleLink).toHaveAttribute('target', '_blank')
    expect(titleLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders all description paragraphs', () => {
    render(<AnimatedProject {...mockProjectProps} />)
    
    mockProjectProps.description.forEach((paragraph) => {
      if (paragraph.startsWith('•')) {
        // For bullet points, check for the text without the bullet
        expect(screen.getByText(paragraph.substring(2))).toBeInTheDocument()
      } else {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      }
    })
  })

  it('renders bullet points with bullet icon', () => {
    const propsWithBullets = {
      ...mockProjectProps,
      description: ['Regular text', '• Bullet point 1', '• Bullet point 2']
    }
    
    render(<AnimatedProject {...propsWithBullets} />)
    
    const bulletImages = screen.getAllByAltText('bullet point')
    expect(bulletImages).toHaveLength(2)
    
    bulletImages.forEach(img => {
      expect(img).toHaveAttribute('src', '/bullet-point.svg')
    })
  })

  it('renders carousel with all images', () => {
    render(<AnimatedProject {...mockProjectProps} />)
    
    const carousel = screen.getByTestId('carousel')
    expect(carousel).toBeInTheDocument()
    
    mockProjectProps.images.forEach((image) => {
      const img = screen.getByAltText(image.alt)
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', image.src)
    })
  })

  it('renders tech stack icons when provided', () => {
    render(<AnimatedProject {...mockProjectProps} />)
    
    mockProjectProps.techStack?.forEach((tech) => {
      const techIcon = screen.getByAltText(tech.name)
      expect(techIcon).toBeInTheDocument()
      expect(techIcon).toHaveAttribute('src', tech.imageSrc)
    })
  })

  it('does not render tech stack section when not provided', () => {
    const propsWithoutTechStack = {
      ...mockProjectProps,
      techStack: undefined
    }
    
    const { container } = render(<AnimatedProject {...propsWithoutTechStack} />)
    
    // Check that no tech stack container exists
    const techStackContainer = container.querySelector('.flex.justify-center.items-center.gap-3.mt-4')
    expect(techStackContainer).not.toBeInTheDocument()
  })

  it('applies correct animation direction classes', () => {
    const { container, rerender } = render(
      <AnimatedProject {...mockProjectProps} animationDirection="left" />
    )
    
    // Should have left animation classes when visible
    expect(container.firstChild).toHaveClass('opacity-100', 'translate-x-0')
    
    // Test right animation
    rerender(<AnimatedProject {...mockProjectProps} animationDirection="right" />)
    expect(container.firstChild).toHaveClass('opacity-100', 'translate-x-0')
  })

  it('applies correct delay styles', () => {
    const delay = 500
    const { container } = render(
      <AnimatedProject {...mockProjectProps} delay={delay} />
    )
    
    expect(container.firstChild).toHaveStyle(`transition-delay: ${delay}ms`)
  })

  it('handles images with custom dimensions', () => {
    const customImages = [
      { src: '/custom.png', alt: 'Custom Image', width: 300, height: 200 }
    ]
    
    render(<AnimatedProject {...mockProjectProps} images={customImages} />)
    
    const img = screen.getByAltText('Custom Image')
    expect(img).toHaveAttribute('width', '300')
    expect(img).toHaveAttribute('height', '200')
  })

  it('uses default image dimensions when not specified', () => {
    const defaultImages = [
      { src: '/default.png', alt: 'Default Image' }
    ]
    
    render(<AnimatedProject {...mockProjectProps} images={defaultImages} />)
    
    const img = screen.getByAltText('Default Image')
    expect(img).toHaveAttribute('width', '500')
    expect(img).toHaveAttribute('height', '500')
  })

  it('applies special contrast classes for specific tech stack items', () => {
    const techStackWithSpecialItems = [
      { name: 'Handlebars', imageSrc: '/handlebars.svg' },
      { name: 'Express', imageSrc: '/express.svg' },
      { name: 'React', imageSrc: '/react.svg' }
    ]
    
    const { container } = render(
      <AnimatedProject {...mockProjectProps} techStack={techStackWithSpecialItems} />
    )
    
    const techIcons = container.querySelectorAll('.w-10.h-10.rounded-lg')
    
    // Handlebars should have handlebars-contrast class
    expect(techIcons[0]).toHaveClass('handlebars-contrast')
    
    // Express should have express-contrast class
    expect(techIcons[1]).toHaveClass('express-contrast')
    
    // React should not have special classes
    expect(techIcons[2]).not.toHaveClass('handlebars-contrast')
    expect(techIcons[2]).not.toHaveClass('express-contrast')
  })

  it('renders tech stack with hover effects', () => {
    const { container } = render(<AnimatedProject {...mockProjectProps} />)
    
    const techIcons = container.querySelectorAll('.w-10.h-10.rounded-lg')
    
    techIcons.forEach(icon => {
      expect(icon).toHaveClass('transition-all', 'duration-500', 'hover:scale-110')
    })
  })

  it('sets title attribute for tech stack items', () => {
    render(<AnimatedProject {...mockProjectProps} />)
    
    const { container } = render(<AnimatedProject {...mockProjectProps} />)
    const techIcons = container.querySelectorAll('.w-10.h-10.rounded-lg')
    
    mockProjectProps.techStack?.forEach((tech, index) => {
      expect(techIcons[index]).toHaveAttribute('title', tech.name)
    })
  })

  it('renders tech stack with icon instead of imageSrc', () => {
    const techStackWithIcon = [
      { name: 'Custom Icon', icon: <span data-testid="custom-icon">Icon</span> }
    ]
    
    render(<AnimatedProject {...mockProjectProps} techStack={techStackWithIcon} />)
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('applies correct animation classes when not visible', () => {
    // Mock useScrollAnimation to return not visible
    const mockUseScrollAnimation = require('../../hooks/useScrollAnimation').useScrollAnimation
    mockUseScrollAnimation.mockReturnValue({
      ref: { current: null },
      isVisible: false
    })

    const { container } = render(<AnimatedProject {...mockProjectProps} animationDirection="right" />)
    
    expect(container.firstChild).toHaveClass('opacity-0', 'translate-x-20')
  })

  it('applies correct animation classes when not visible with left direction', () => {
    // Mock useScrollAnimation to return not visible
    const mockUseScrollAnimation = require('../../hooks/useScrollAnimation').useScrollAnimation
    mockUseScrollAnimation.mockReturnValue({
      ref: { current: null },
      isVisible: false
    })

    const { container } = render(<AnimatedProject {...mockProjectProps} animationDirection="left" />)
    
    expect(container.firstChild).toHaveClass('opacity-0', '-translate-x-20')
  })

  it('applies correct transition delays for description paragraphs', () => {
    const { container } = render(<AnimatedProject {...mockProjectProps} delay={100} />)
    
    const descriptionDivs = container.querySelectorAll('.mb-5')
    
    descriptionDivs.forEach((div, index) => {
      const expectedDelay = 100 + 200 + index * 100
      expect(div).toHaveStyle(`transition-delay: ${expectedDelay}ms`)
    })
  })

  it('applies correct transition delay for carousel container', () => {
    const { container } = render(<AnimatedProject {...mockProjectProps} delay={200} />)
    
    const carouselContainer = container.querySelector('.project-carousel-container')
    expect(carouselContainer).toHaveStyle('transition-delay: 700ms') // delay + 500ms
  })

  it('applies correct transition delay for tech stack when visible', () => {
    const { container } = render(<AnimatedProject {...mockProjectProps} delay={300} />)
    
    const techStackContainer = container.querySelector('.flex.justify-center.items-center.gap-3')
    expect(techStackContainer).toHaveStyle('transition-delay: 900ms') // delay + 600ms
  })

  it('applies tech stack background color when provided', () => {
    const techStackWithColor = [
      { name: 'Colored Tech', imageSrc: '/test.svg', color: '#ff0000' }
    ]
    
    const { container } = render(<AnimatedProject {...mockProjectProps} techStack={techStackWithColor} />)
    
    const techIcon = container.querySelector('.w-10.h-10.rounded-lg')
    expect(techIcon).toHaveStyle('background-color: #ff0000')
  })

  it('handles tech stack without special contrast classes', () => {
    const normalTechStack = [
      { name: 'React', imageSrc: '/react.svg' },
      { name: 'Vue', imageSrc: '/vue.svg' }
    ]
    
    const { container } = render(<AnimatedProject {...mockProjectProps} techStack={normalTechStack} />)
    
    const techIcons = container.querySelectorAll('.w-10.h-10.rounded-lg')
    
    techIcons.forEach(icon => {
      expect(icon).not.toHaveClass('handlebars-contrast')
      expect(icon).not.toHaveClass('express-contrast')
    })
  })
})