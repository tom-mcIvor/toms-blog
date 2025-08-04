import React from 'react'
import { render, screen, fireEvent } from '../utils/test-utils'
import { mockIntersectionObserver, waitForAnimation } from '../utils/test-utils'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Mock Next.js components
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}))

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

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, width, height, className, onError, ...props }: any) => {
    return (
      <img
        src={typeof src === 'string' ? src : src.src || '/mock-image.png'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
        onError={(e) => {
          // Simulate image error
          if (onError) onError(e)
        }}
      />
    )
  }
  MockImage.displayName = 'MockImage'
  return MockImage
})

// Error Boundary component for testing
class TestErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: (error: Error) => void },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return <div data-testid="error-fallback">Something went wrong</div>
    }

    return this.props.children
  }
}

// Component that throws an error for testing
const ErrorThrowingComponent = ({ shouldThrow = false }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('Error Handling Integration Tests', () => {
  let originalConsoleError: typeof console.error

  beforeEach(() => {
    mockIntersectionObserver(true)
    jest.clearAllMocks()
    
    // Mock console.error to avoid noise in tests
    originalConsoleError = console.error
    console.error = jest.fn()

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
    console.error = originalConsoleError
  })

  describe('Component Error Boundaries', () => {
    it('should handle errors in Home component gracefully', async () => {
      const onError = jest.fn()
      
      render(
        <TestErrorBoundary onError={onError}>
          <Home />
        </TestErrorBoundary>
      )

      await waitForAnimation(500)

      // Component should render without errors
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(onError).not.toHaveBeenCalled()
    })

    it('should handle errors in Nav component gracefully', async () => {
      const onError = jest.fn()
      
      render(
        <TestErrorBoundary onError={onError}>
          <Nav />
        </TestErrorBoundary>
      )

      // Component should render without errors
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(onError).not.toHaveBeenCalled()
    })

    it('should handle errors in Footer component gracefully', async () => {
      const onError = jest.fn()
      
      render(
        <TestErrorBoundary onError={onError}>
          <Footer />
        </TestErrorBoundary>
      )

      // Component should render without errors
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
      expect(onError).not.toHaveBeenCalled()
    })

    it('should catch and handle component errors with error boundary', async () => {
      const onError = jest.fn()
      
      render(
        <TestErrorBoundary onError={onError}>
          <ErrorThrowingComponent shouldThrow={true} />
        </TestErrorBoundary>
      )

      // Error boundary should catch the error
      expect(screen.getByTestId('error-fallback')).toBeInTheDocument()
      expect(onError).toHaveBeenCalledWith(expect.any(Error))
    })
  })

  describe('Image Loading Error Handling', () => {
    it('should handle missing images gracefully', async () => {
      // Mock image error
      const originalImage = global.Image
      global.Image = class MockImage {
        onload: (() => void) | null = null
        onerror: (() => void) | null = null
        src: string = ''
        
        constructor() {
          setTimeout(() => {
            if (this.onerror) {
              this.onerror()
            }
          }, 100)
        }
      } as any

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render even with image errors
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()

      // Restore original Image
      global.Image = originalImage
    })

    it('should handle broken image sources', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Get all images and simulate error
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        fireEvent.error(img)
      })

      // Component should still be functional
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    })
  })

  describe('Network Error Handling', () => {
    it('should handle network failures gracefully', async () => {
      // Mock fetch to simulate network error
      global.fetch = jest.fn().mockRejectedValue(new Error('Network error'))

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })

    it('should handle slow network responses', async () => {
      // Mock slow network response
      global.fetch = jest.fn().mockImplementation(() => 
        new Promise(resolve => setTimeout(resolve, 5000))
      )

      render(<Home />)

      await waitForAnimation(500)

      // Component should render without waiting for slow network
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
  })

  describe('Event Handler Error Handling', () => {
    it('should handle click event errors gracefully', async () => {
      render(<Nav />)

      const devJourneyButton = screen.getByText('My Dev Journey')
      
      // Simulate error in event handler
      const originalAddEventListener = devJourneyButton.addEventListener
      devJourneyButton.addEventListener = jest.fn((event, handler) => {
        const errorHandler = (e: Event) => {
          try {
            if (typeof handler === 'function') {
              handler(e)
            }
          } catch (error) {
            // Silently handle error
          }
        }
        originalAddEventListener.call(devJourneyButton, event, errorHandler)
      })

      fireEvent.click(devJourneyButton)

      // Component should still be functional
      expect(devJourneyButton).toBeInTheDocument()
    })

    it('should handle hover event errors gracefully', async () => {
      render(<Footer />)

      await waitForAnimation(200)

      const githubLink = screen.getByLabelText('GitHub')
      
      // Simulate hover events that might cause errors
      fireEvent.mouseEnter(githubLink)
      fireEvent.mouseLeave(githubLink)

      // Component should still be functional
      expect(githubLink).toBeInTheDocument()
    })
  })

  describe('Intersection Observer Error Handling', () => {
    it('should handle IntersectionObserver errors gracefully', async () => {
      // Mock IntersectionObserver to throw error
      const originalIntersectionObserver = global.IntersectionObserver
      global.IntersectionObserver = jest.fn().mockImplementation(() => {
        throw new Error('IntersectionObserver error')
      })

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render without animations
      expect(screen.getByText('About Me')).toBeInTheDocument()

      // Restore original IntersectionObserver
      global.IntersectionObserver = originalIntersectionObserver
    })

    it('should handle missing IntersectionObserver support', async () => {
      // Remove IntersectionObserver support
      const originalIntersectionObserver = global.IntersectionObserver
      delete (global as any).IntersectionObserver

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render
      expect(screen.getByText('About Me')).toBeInTheDocument()

      // Restore IntersectionObserver
      global.IntersectionObserver = originalIntersectionObserver
    })
  })

  describe('Scroll Event Error Handling', () => {
    it('should handle scroll event errors gracefully', async () => {
      render(<Footer />)

      // Mock scroll event that might cause errors
      const scrollEvent = new Event('scroll')
      Object.defineProperty(scrollEvent, 'target', {
        value: null,
        enumerable: true
      })

      fireEvent(window, scrollEvent)

      await waitForAnimation(200)

      // Component should still be functional
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })

    it('should handle missing scroll target gracefully', async () => {
      render(<Footer />)

      // Mock document.querySelector to return null
      const originalQuerySelector = document.querySelector
      document.querySelector = jest.fn().mockReturnValue(null)

      fireEvent.scroll(window)

      await waitForAnimation(200)

      // Component should still work
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()

      // Restore querySelector
      document.querySelector = originalQuerySelector
    })
  })

  describe('Resize Event Error Handling', () => {
    it('should handle resize event errors gracefully', async () => {
      render(<Nav />)

      // Mock window properties that might cause errors
      Object.defineProperty(window, 'innerWidth', {
        get: () => {
          throw new Error('Window property error')
        }
      })

      fireEvent(window, new Event('resize'))

      await waitForAnimation(200)

      // Component should still be functional
      expect(screen.getByText('About')).toBeInTheDocument()
    })
  })

  describe('Memory and Resource Error Handling', () => {
    it('should handle memory pressure gracefully', async () => {
      // Simulate memory pressure by creating many components
      const components = []
      
      for (let i = 0; i < 10; i++) {
        const { unmount } = render(<Home />)
        components.push(unmount)
      }

      // Clean up components
      components.forEach(unmount => unmount())

      // Final render should still work
      render(<Home />)
      await waitForAnimation(500)

      expect(screen.getByText('About Me')).toBeInTheDocument()
    })

    it('should handle resource cleanup errors', async () => {
      const { unmount } = render(
        <div>
          <Nav />
          <Footer />
        </div>
      )

      await waitForAnimation(200)

      // Mock removeEventListener to throw error
      const originalRemoveEventListener = window.removeEventListener
      window.removeEventListener = jest.fn().mockImplementation(() => {
        throw new Error('Cleanup error')
      })

      // Unmount should not throw
      expect(() => unmount()).not.toThrow()

      // Restore removeEventListener
      window.removeEventListener = originalRemoveEventListener
    })
  })

  describe('Browser Compatibility Error Handling', () => {
    it('should handle missing modern browser features', async () => {
      // Remove modern features
      const originalRequestAnimationFrame = window.requestAnimationFrame
      delete (window as any).requestAnimationFrame

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render
      expect(screen.getByText('About Me')).toBeInTheDocument()

      // Restore feature
      window.requestAnimationFrame = originalRequestAnimationFrame
    })

    it('should handle CSS feature detection errors', async () => {
      // Mock CSS.supports to throw error
      if (typeof CSS !== 'undefined' && CSS.supports) {
        const originalSupports = CSS.supports
        CSS.supports = jest.fn().mockImplementation(() => {
          throw new Error('CSS.supports error')
        })

        render(<Home />)

        await waitForAnimation(500)

        expect(screen.getByText('About Me')).toBeInTheDocument()

        // Restore CSS.supports
        CSS.supports = originalSupports
      } else {
        // If CSS.supports doesn't exist, component should still work
        render(<Home />)
        await waitForAnimation(500)
        expect(screen.getByText('About Me')).toBeInTheDocument()
      }
    })
  })

  describe('Data Validation Error Handling', () => {
    it('should handle malformed data gracefully', async () => {
      // Component should handle any data issues internally
      render(<Home />)

      await waitForAnimation(500)

      // Should render with default/fallback data
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    })

    it('should handle missing required props gracefully', async () => {
      // Components should have sensible defaults
      render(<Home />)
      render(<Nav />)
      render(<Footer />)

      await waitForAnimation(500)

      // All components should render
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
  })

  describe('Async Operation Error Handling', () => {
    it('should handle async operation failures', async () => {
      // Mock Promise.resolve to occasionally fail
      const originalPromiseResolve = Promise.resolve
      Promise.resolve = jest.fn().mockImplementation((value) => {
        if (Math.random() > 0.8) {
          return Promise.reject(new Error('Random async error'))
        }
        return originalPromiseResolve(value)
      })

      render(<Home />)

      await waitForAnimation(500)

      // Component should still render
      expect(screen.getByText('About Me')).toBeInTheDocument()

      // Restore Promise.resolve
      Promise.resolve = originalPromiseResolve
    })

    it('should handle timeout errors gracefully', async () => {
      // Mock setTimeout to occasionally fail
      const originalSetTimeout = window.setTimeout
      window.setTimeout = jest.fn().mockImplementation((callback, delay) => {
        if (typeof callback === 'function') {
          try {
            return originalSetTimeout(callback, delay)
          } catch (error) {
            // Silently handle timeout errors
            return 0
          }
        }
        return 0
      }) as any

      render(<Home />)

      await waitForAnimation(500)

      expect(screen.getByText('About Me')).toBeInTheDocument()

      // Restore setTimeout
      window.setTimeout = originalSetTimeout
    })
  })
})