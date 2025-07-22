import React from 'react'
import { render, screen, waitFor, act } from '../utils/test-utils'
import AnimatedText from '../../components/AnimatedText'
import '@testing-library/jest-dom'

// Mock timers for testing animations
jest.useFakeTimers()

describe('AnimatedText', () => {
  beforeEach(() => {
    jest.clearAllTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
    jest.useFakeTimers()
  })

  it('renders text content correctly', () => {
    render(<AnimatedText text="Hello World" />)
    
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <AnimatedText text="Test" className="custom-class" />
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('starts with opacity-0 and translate-y-8 classes', () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    expect(container.firstChild).toHaveClass('opacity-0', 'translate-y-8')
  })

  it('becomes visible after delay', async () => {
    const { container } = render(<AnimatedText text="Test" delay={1000} />)
    
    // Initially should be invisible
    expect(container.firstChild).toHaveClass('opacity-0', 'translate-y-8')
    
    // Fast-forward time and wrap in act
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    
    await waitFor(() => {
      expect(container.firstChild).toHaveClass('opacity-100', 'translate-y-0')
    })
  })

  it('becomes visible immediately with no delay', async () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    // Fast-forward time and wrap in act
    act(() => {
      jest.advanceTimersByTime(0)
    })
    
    await waitFor(() => {
      expect(container.firstChild).toHaveClass('opacity-100', 'translate-y-0')
    })
  })

  it('renders SVG with correct viewBox', () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 800 100')
  })

  it('contains gradient definition', () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    const gradient = container.querySelector('#textGradient')
    expect(gradient).toBeInTheDocument()
  })

  it('contains glow filter definition', () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    const filter = container.querySelector('#glow')
    expect(filter).toBeInTheDocument()
  })

  it('text element has correct attributes', () => {
    const { container } = render(<AnimatedText text="Test Text" />)
    
    const textElement = container.querySelector('text')
    expect(textElement).toHaveAttribute('x', '50%')
    expect(textElement).toHaveAttribute('y', '50%')
    expect(textElement).toHaveAttribute('text-anchor', 'middle')
    expect(textElement).toHaveAttribute('font-size', '48')
    expect(textElement).toHaveAttribute('font-weight', '900')
    expect(textElement).toHaveAttribute('fill', 'url(#textGradient)')
    expect(textElement).toHaveAttribute('filter', 'url(#glow)')
  })

  it('contains animated underline', () => {
    const { container } = render(<AnimatedText text="Test" />)
    
    const line = container.querySelector('line')
    expect(line).toBeInTheDocument()
    expect(line).toHaveAttribute('x1', '20%')
    expect(line).toHaveAttribute('y1', '70%')
    expect(line).toHaveAttribute('x2', '80%')
    expect(line).toHaveAttribute('y2', '70%')
    expect(line).toHaveAttribute('stroke', 'url(#textGradient)')
    expect(line).toHaveAttribute('stroke-width', '3')
  })

  it('has correct animation timing for text opacity', () => {
    const { container } = render(<AnimatedText text="Test" delay={500} />)
    
    const textAnimation = container.querySelector('text animate[attributeName="opacity"]')
    expect(textAnimation).toHaveAttribute('begin', '0.5s')
    expect(textAnimation).toHaveAttribute('dur', '2s')
    expect(textAnimation).toHaveAttribute('values', '0;1')
  })

  it('has correct animation timing for underline', () => {
    const { container } = render(<AnimatedText text="Test" delay={500} />)
    
    const lineAnimation = container.querySelector('line animate')
    expect(lineAnimation).toHaveAttribute('begin', '2s') // delay + 1500ms
    expect(lineAnimation).toHaveAttribute('dur', '1.5s')
    expect(lineAnimation).toHaveAttribute('values', '400;0')
  })

  it('gradient stops have correct animation timing', () => {
    const { container } = render(<AnimatedText text="Test" delay={1000} />)
    
    const stops = container.querySelectorAll('stop animate')
    
    // First stop
    expect(stops[0]).toHaveAttribute('begin', '1s')
    
    // Second stop
    expect(stops[1]).toHaveAttribute('begin', '1.5s')
    
    // Third stop
    expect(stops[2]).toHaveAttribute('begin', '2s')
  })

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')
    
    const { unmount } = render(<AnimatedText text="Test" delay={1000} />)
    
    unmount()
    
    expect(clearTimeoutSpy).toHaveBeenCalled()
    
    clearTimeoutSpy.mockRestore()
  })
})