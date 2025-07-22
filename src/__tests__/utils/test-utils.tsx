import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Custom render function that includes providers if needed
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }

// Mock data for testing
export const mockTechStack = [
  {
    name: 'React',
    imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'TypeScript',
    imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }
]

export const mockImages = [
  { src: '/test-image-1.png', alt: 'Test Image 1' },
  { src: '/test-image-2.png', alt: 'Test Image 2' }
]

export const mockProjectProps = {
  title: 'Test Project',
  githubUrl: 'https://github.com/test/project',
  description: [
    'This is a test project description.',
    '• Feature 1: Test feature',
    '• Feature 2: Another test feature'
  ],
  images: mockImages,
  animationDirection: 'left' as const,
  delay: 0,
  techStack: mockTechStack
}

// Helper function to mock IntersectionObserver with custom behavior
export const mockIntersectionObserver = (isIntersecting = true) => {
  const mockObserver = jest.fn()
  const mockUnobserve = jest.fn()
  const mockDisconnect = jest.fn()

  // Mock the constructor
  global.IntersectionObserver = jest.fn().mockImplementation((callback: IntersectionObserverCallback) => {
    // Simulate intersection immediately
    setTimeout(() => {
      callback([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver)
    }, 0)
    
    return {
      observe: mockObserver,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
    }
  })

  return { mockObserver, mockUnobserve, mockDisconnect }
}

// Helper to wait for animations/timeouts
export const waitForAnimation = (delay = 100) =>
  new Promise(resolve => setTimeout(resolve, delay))

// This file contains utility functions for testing
// No tests are defined here, so we add a dummy test to prevent Jest errors
describe('test-utils', () => {
  it('should export utility functions', () => {
    expect(typeof mockIntersectionObserver).toBe('function')
    expect(typeof waitForAnimation).toBe('function')
  })
})