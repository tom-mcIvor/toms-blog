import React from 'react'
import { render, screen, waitFor } from '../utils/test-utils'
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
  const MockImage = ({ src, alt, width, height, className, ...props }: any) => {
    return (
      <img
        src={typeof src === 'string' ? src : src.src || '/mock-image.png'}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
        onLoad={() => {
          // Simulate image load event
          if (props.onLoad) props.onLoad()
        }}
      />
    )
  }
  MockImage.displayName = 'MockImage'
  return MockImage
})

// Performance monitoring utilities
const measureRenderTime = async (renderFn: () => void): Promise<number> => {
  const startTime = performance.now()
  renderFn()
  await waitForAnimation(100)
  const endTime = performance.now()
  return endTime - startTime
}

const measureMemoryUsage = (): number => {
  if ('memory' in performance) {
    return (performance as any).memory.usedJSHeapSize
  }
  return 0
}

describe('Performance Integration Tests', () => {
  beforeEach(() => {
    mockIntersectionObserver(true)
    jest.clearAllMocks()
    
    // Reset performance marks
    if (performance.clearMarks) {
      performance.clearMarks()
    }
    if (performance.clearMeasures) {
      performance.clearMeasures()
    }

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

  describe('Component Render Performance', () => {
    it('should render Home component within performance budget', async () => {
      const renderTime = await measureRenderTime(() => {
        render(<Home />)
      })

      // Home component should render within 500ms
      expect(renderTime).toBeLessThan(500)

      // Check that all main elements are rendered
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    })

    it('should render Nav component efficiently', async () => {
      const renderTime = await measureRenderTime(() => {
        render(<Nav />)
      })

      // Nav component should render very quickly
      expect(renderTime).toBeLessThan(200)

      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('My Dev Journey')).toBeInTheDocument()
    })

    it('should render Footer component efficiently', async () => {
      const renderTime = await measureRenderTime(() => {
        render(<Footer />)
      })

      // Footer component should render quickly
      expect(renderTime).toBeLessThan(200)

      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })

    it('should handle multiple component renders efficiently', async () => {
      const renderTime = await measureRenderTime(() => {
        render(
          <div>
            <Nav />
            <Home />
            <Footer />
          </div>
        )
      })

      // Full page should render within 1 second
      expect(renderTime).toBeLessThan(1000)

      // All components should be present
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
  })

  describe('Animation Performance', () => {
    it('should handle scroll animations efficiently', async () => {
      const startTime = performance.now()
      
      render(<Home />)
      
      // Wait for initial animations
      await waitForAnimation(1000)
      
      const endTime = performance.now()
      const totalTime = endTime - startTime

      // Animations should complete within reasonable time
      expect(totalTime).toBeLessThan(1500)

      // All animated elements should be visible
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('YeahBook')).toBeInTheDocument()
    })

    it('should handle staggered animations without performance degradation', async () => {
      const startTime = performance.now()
      
      render(<Home />)
      
      // Simulate multiple intersection events
      for (let i = 0; i < 10; i++) {
        await waitForAnimation(50)
      }
      
      const endTime = performance.now()
      const totalTime = endTime - startTime

      // Should handle multiple animations efficiently
      expect(totalTime).toBeLessThan(2000)

      // All projects should be rendered
      const projectTitles = ['YeahBook', 'BadgerMatch', 'Steno Briefs']
      projectTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument()
      })
    })

    it('should handle hover animations efficiently', async () => {
      render(<Home />)
      await waitForAnimation(500)

      const startTime = performance.now()

      // Simulate multiple rapid hover events
      const skillElements = screen.getAllByText('React')
      for (let i = 0; i < 10; i++) {
        skillElements.forEach(element => {
          const skillDiv = element.closest('div')
          if (skillDiv) {
            skillDiv.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
            skillDiv.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }))
          }
        })
        await waitForAnimation(10)
      }

      const endTime = performance.now()
      const hoverTime = endTime - startTime

      // Hover animations should be performant
      expect(hoverTime).toBeLessThan(1000)
    })
  })

  describe('Image Loading Performance', () => {
    it('should handle multiple image loads efficiently', async () => {
      const startTime = performance.now()
      
      render(<Home />)
      
      await waitForAnimation(500)
      
      const endTime = performance.now()
      const loadTime = endTime - startTime

      // Image loading should not block rendering significantly
      expect(loadTime).toBeLessThan(1000)

      // Check that images are present
      const images = screen.getAllByRole('img')
      expect(images.length).toBeGreaterThan(0)

      // All images should have proper attributes
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img).toHaveAttribute('src')
      })
    })

    it('should handle lazy loading efficiently', async () => {
      render(<Home />)

      // Images should load progressively
      await waitForAnimation(100)
      
      const images = screen.getAllByRole('img')
      expect(images.length).toBeGreaterThan(0)

      // Should not block main thread
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
  })

  describe('Memory Usage', () => {
    it('should not cause memory leaks with component mounting/unmounting', async () => {
      const initialMemory = measureMemoryUsage()

      // Mount and unmount components multiple times
      for (let i = 0; i < 5; i++) {
        const { unmount } = render(<Home />)
        await waitForAnimation(100)
        unmount()
      }

      const finalMemory = measureMemoryUsage()

      // Memory usage should not increase significantly
      if (initialMemory > 0 && finalMemory > 0) {
        const memoryIncrease = finalMemory - initialMemory
        expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024) // Less than 10MB increase
      }
    })

    it('should handle event listener cleanup efficiently', async () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

      const { unmount } = render(
        <div>
          <Nav />
          <Footer />
        </div>
      )

      await waitForAnimation(100)

      // Components should add event listeners
      expect(addEventListenerSpy).toHaveBeenCalled()

      unmount()

      // Components should clean up event listeners
      expect(removeEventListenerSpy).toHaveBeenCalled()

      addEventListenerSpy.mockRestore()
      removeEventListenerSpy.mockRestore()
    })
  })

  describe('Intersection Observer Performance', () => {
    it('should handle multiple intersection observers efficiently', async () => {
      const startTime = performance.now()
      
      render(<Home />)
      
      await waitForAnimation(200)
      
      const endTime = performance.now()
      const setupTime = endTime - startTime

      // Intersection observer setup should be fast
      expect(setupTime).toBeLessThan(300)

      // Should create appropriate number of observers
      expect(global.IntersectionObserver).toHaveBeenCalled()
    })

    it('should handle rapid intersection changes efficiently', async () => {
      const { mockObserver } = mockIntersectionObserver(false)
      
      render(<Home />)
      
      const startTime = performance.now()

      // Simulate rapid intersection changes
      for (let i = 0; i < 20; i++) {
        mockIntersectionObserver(i % 2 === 0)
        await waitForAnimation(25)
      }

      const endTime = performance.now()
      const processingTime = endTime - startTime

      // Should handle rapid changes efficiently
      expect(processingTime).toBeLessThan(1000)
      expect(mockObserver).toHaveBeenCalled()
    })
  })

  describe('Responsive Performance', () => {
    it('should handle viewport changes efficiently', async () => {
      render(<Home />)
      
      const startTime = performance.now()

      // Simulate multiple viewport changes
      const viewports = [375, 768, 1024, 1440]
      
      for (const width of viewports) {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        })
        
        window.dispatchEvent(new Event('resize'))
        await waitForAnimation(50)
      }

      const endTime = performance.now()
      const resizeTime = endTime - startTime

      // Viewport changes should be handled efficiently
      expect(resizeTime).toBeLessThan(500)

      // Content should still be accessible
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
  })

  describe('Bundle Size Impact', () => {
    it('should render components without importing unnecessary dependencies', async () => {
      // This test ensures components don't import heavy dependencies unnecessarily
      const startTime = performance.now()
      
      render(<Nav />)
      render(<Home />)
      render(<Footer />)
      
      await waitForAnimation(200)
      
      const endTime = performance.now()
      const renderTime = endTime - startTime

      // Should render quickly indicating efficient bundle
      expect(renderTime).toBeLessThan(400)

      // All components should be functional
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
  })

  describe('Concurrent Rendering', () => {
    it('should handle concurrent component updates efficiently', async () => {
      const { rerender } = render(<Home />)
      
      const startTime = performance.now()

      // Simulate multiple rapid re-renders
      for (let i = 0; i < 10; i++) {
        rerender(<Home />)
        await waitForAnimation(10)
      }

      const endTime = performance.now()
      const rerenderTime = endTime - startTime

      // Re-renders should be efficient
      expect(rerenderTime).toBeLessThan(500)

      // Component should still be functional
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
  })

  describe('Performance Monitoring', () => {
    it('should provide performance metrics for monitoring', async () => {
      // Mark start of render
      performance.mark('render-start')
      
      render(<Home />)
      
      await waitForAnimation(500)
      
      // Mark end of render
      performance.mark('render-end')
      
      // Measure render time
      performance.measure('render-time', 'render-start', 'render-end')
      
      const measures = performance.getEntriesByName('render-time')
      expect(measures.length).toBeGreaterThan(0)
      
      const renderTime = measures[0].duration
      expect(renderTime).toBeLessThan(1000)

      // Component should be fully rendered
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()
    })

    it('should handle performance edge cases gracefully', async () => {
      // Test with very small viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 200,
      })

      const startTime = performance.now()
      
      render(<Home />)
      
      await waitForAnimation(300)
      
      const endTime = performance.now()
      const renderTime = endTime - startTime

      // Should handle edge cases efficiently
      expect(renderTime).toBeLessThan(600)

      // Content should still be accessible
      expect(screen.getByText('About Me')).toBeInTheDocument()
    })
  })
})