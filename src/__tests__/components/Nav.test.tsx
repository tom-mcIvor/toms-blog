import React from 'react'
import { render, screen, fireEvent } from '../utils/test-utils'
import Nav from '../../components/Nav'
import '@testing-library/jest-dom'

// Mock window.addEventListener and removeEventListener
const mockAddEventListener = jest.fn()
const mockRemoveEventListener = jest.fn()

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
})

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
})

// Mock window.innerWidth
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
})

describe('Nav', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset window width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('renders the main navigation container', () => {
    const { container } = render(<Nav />)
    
    const navContainer = container.querySelector('.flex.items-center.justify-between')
    expect(navContainer).toBeInTheDocument()
    expect(navContainer).toHaveClass(
      'text-blue-gray-900', 'w-full', 'sticky', 'top-0', 'bg-black',
      'shadow-md', 'transition', 'duration-400', 'h-20', 'z-50'
    )
  })

  it('renders the About button with correct styling', () => {
    render(<Nav />)
    
    const aboutButton = screen.getByText('About')
    expect(aboutButton).toBeInTheDocument()
    
    const buttonContainer = aboutButton.closest('.mybutton')
    expect(buttonContainer).toBeInTheDocument()
  })

  it('renders the About button as a link to home', () => {
    const { container } = render(<Nav />)
    
    const homeLink = container.querySelector('a[href="/"]')
    expect(homeLink).toBeInTheDocument()
  })

  it('renders the My Dev Journey menu button', () => {
    render(<Nav />)
    
    const devJourneyButton = screen.getByText('My Dev Journey')
    expect(devJourneyButton).toBeInTheDocument()
  })

  it('renders navigation list items', () => {
    render(<Nav />)
    
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Blocks')).toBeInTheDocument()
    expect(screen.getByText('Docs')).toBeInTheDocument()
  })

  it('renders Bootcamp submenu items', () => {
    render(<Nav />)
    
    expect(screen.getByText('Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('TECH')).toBeInTheDocument()
    expect(screen.getByText('CORE')).toBeInTheDocument()
  })

  it('renders TECH submenu links', () => {
    render(<Nav />)
    
    const cssLessonsLink = screen.getByText('CSS lessons')
    expect(cssLessonsLink).toBeInTheDocument()
    expect(cssLessonsLink.closest('a')).toHaveAttribute('href', '/html-css')
    
    const javascriptDomLink = screen.getByText('Javascript DOM')
    expect(javascriptDomLink).toBeInTheDocument()
    expect(javascriptDomLink.closest('a')).toHaveAttribute('href', '/javascript-dom')
    
    const problemSolvingLink = screen.getByText('Problem Solving')
    expect(problemSolvingLink).toBeInTheDocument()
    expect(problemSolvingLink.closest('a')).toHaveAttribute('href', '/problem-solving')
  })

  it('renders CORE submenu links', () => {
    render(<Nav />)
    
    const neuroplasticityLink = screen.getByText('Neuroplasticity ideas')
    expect(neuroplasticityLink).toBeInTheDocument()
    expect(neuroplasticityLink.closest('a')).toHaveAttribute('href', '/neuroplasticity')
    
    const emotionalIqLink = screen.getByText('Emotional IQ')
    expect(emotionalIqLink).toBeInTheDocument()
    expect(emotionalIqLink.closest('a')).toHaveAttribute('href', '/emotional-intelligence')
    
    const identityValuesLink = screen.getByText('Identity values')
    expect(identityValuesLink).toBeInTheDocument()
    expect(identityValuesLink.closest('a')).toHaveAttribute('href', '/identity-values')
    
    const foundationsReflectionLink = screen.getByText('Foundations reflection')
    expect(foundationsReflectionLink).toBeInTheDocument()
    expect(foundationsReflectionLink.closest('a')).toHaveAttribute('href', '/foundations-reflection')
    
    const learningPlanLink = screen.getByText('Learning plan')
    expect(learningPlanLink).toBeInTheDocument()
    expect(learningPlanLink.closest('a')).toHaveAttribute('href', '/learning-plan')
  })

  it('renders AI Essentials link', () => {
    render(<Nav />)
    
    const aiEssentialsLink = screen.getByText('AI Essentials')
    expect(aiEssentialsLink).toBeInTheDocument()
    expect(aiEssentialsLink.closest('a')).toHaveAttribute('href', '/ai-essentials')
  })

  it('renders chevron icons', () => {
    render(<Nav />)
    
    const chevronRightIcons = screen.getAllByTestId('chevron-right-icon')
    expect(chevronRightIcons.length).toBeGreaterThan(0)
  })

  it('sets up window resize event listener', () => {
    render(<Nav />)
    
    expect(mockAddEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('cleans up window resize event listener on unmount', () => {
    const { unmount } = render(<Nav />)
    
    unmount()
    
    expect(mockRemoveEventListener).toHaveBeenCalledWith('resize', expect.any(Function))
  })

  it('handles window resize correctly', () => {
    render(<Nav />)
    
    // Get the resize handler
    const resizeHandler = mockAddEventListener.mock.calls.find(
      call => call[0] === 'resize'
    )?.[1]
    
    expect(resizeHandler).toBeDefined()
    
    // Simulate window resize to small screen
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    })
    
    // Call the resize handler
    if (resizeHandler) {
      resizeHandler()
    }
  })

  it('applies correct hover effects to navigation items', () => {
    render(<Nav />)
    
    const navItems = screen.getAllByText(/Pages|Account|Blocks|Docs/)
    
    navItems.forEach(item => {
      const link = item.closest('a')
      expect(link).toHaveClass('hover:text-blue-500', 'transition-colors')
    })
  })

  it('applies correct hover effects to menu items', () => {
    render(<Nav />)
    
    const menuItems = [
      'CSS lessons', 'Javascript DOM', 'Problem Solving',
      'Neuroplasticity ideas', 'Emotional IQ', 'Identity values',
      'Foundations reflection', 'Learning plan', 'AI Essentials'
    ]
    
    menuItems.forEach(itemText => {
      const item = screen.getByText(itemText)
      expect(item).toHaveClass('hover:text-blue-500', 'transition-colors')
    })
  })

  it('renders ThemeProvider with custom theme', () => {
    render(<Nav />)
    
    // ThemeProvider should be rendered (mocked in jest.setup.js)
    const themeProvider = screen.getByTestId('menu')
    expect(themeProvider).toBeInTheDocument()
  })

  it('renders Menu components with correct test ids', () => {
    render(<Nav />)
    
    const menus = screen.getAllByTestId('menu')
    expect(menus.length).toBeGreaterThan(0)
    
    const menuHandlers = screen.getAllByTestId('menu-handler')
    expect(menuHandlers.length).toBeGreaterThan(0)
    
    const menuLists = screen.getAllByTestId('menu-list')
    expect(menuLists.length).toBeGreaterThan(0)
    
    const menuItems = screen.getAllByTestId('menu-item')
    expect(menuItems.length).toBeGreaterThan(0)
  })

  it('renders Collapse component', () => {
    render(<Nav />)
    
    // The Collapse component should be present in the DOM
    // Since it's mocked, we can check if the NavList content is rendered
    expect(screen.getByText('Pages')).toBeInTheDocument()
  })

  it('has correct button styling for My Dev Journey', () => {
    render(<Nav />)
    
    const devJourneyButton = screen.getByText('My Dev Journey')
    expect(devJourneyButton).toHaveClass('normal-case')
    
    // Check inline styles
    expect(devJourneyButton).toHaveStyle({
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontSize: '16px',
      fontWeight: '500'
    })
  })

  it('has correct styling for AI Essentials menu item', () => {
    render(<Nav />)
    
    const aiEssentialsItem = screen.getByText('AI Essentials')
    expect(aiEssentialsItem).toHaveStyle({
      border: 'none !important',
      outline: 'none !important',
      boxShadow: 'none !important',
      borderWidth: '0 !important',
      borderStyle: 'none !important',
      borderColor: 'transparent !important'
    })
  })
})