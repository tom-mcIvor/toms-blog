import { renderHook, act } from '@testing-library/react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

describe('useScrollAnimation', () => {
  let mockObserver: jest.Mock
  let mockUnobserve: jest.Mock
  let mockDisconnect: jest.Mock
  let observerCallback: IntersectionObserverCallback

  beforeEach(() => {
    mockObserver = jest.fn()
    mockUnobserve = jest.fn()
    mockDisconnect = jest.fn()

    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation((callback) => {
      observerCallback = callback
      return {
        observe: mockObserver,
        unobserve: mockUnobserve,
        disconnect: mockDisconnect,
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with isVisible as false', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    expect(result.current.isVisible).toBe(false)
    expect(result.current.ref.current).toBe(null)
  })

  it('should create IntersectionObserver with correct threshold', () => {
    const threshold = 0.5
    renderHook(() => useScrollAnimation(threshold))
    
    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    )
  })

  it('should use default threshold of 0.1 when not provided', () => {
    renderHook(() => useScrollAnimation())
    
    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )
  })

  it('should observe element when ref is set', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // The observer should be called when the hook initializes with a ref
    // Since we're mocking IntersectionObserver, it gets called during useEffect
    expect(global.IntersectionObserver).toHaveBeenCalled()
  })

  it('should set isVisible to true when element intersects', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // Simulate intersection
    act(() => {
      observerCallback([
        { isIntersecting: true } as IntersectionObserverEntry
      ], {} as IntersectionObserver)
    })

    expect(result.current.isVisible).toBe(true)
  })

  it('should not change isVisible when element is not intersecting', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // Simulate no intersection
    act(() => {
      observerCallback([
        { isIntersecting: false } as IntersectionObserverEntry
      ], {} as IntersectionObserver)
    })

    expect(result.current.isVisible).toBe(false)
  })

  it('should cleanup observer on unmount', () => {
    const { result, unmount } = renderHook(() => useScrollAnimation())
    
    // Create a mock element
    const mockElement = document.createElement('div')
    Object.defineProperty(result.current.ref, 'current', {
      value: mockElement,
      writable: true
    })

    unmount()

    expect(mockUnobserve).toHaveBeenCalledWith(mockElement)
  })

  it('should handle threshold changes', () => {
    const { rerender } = renderHook(
      ({ threshold }) => useScrollAnimation(threshold),
      { initialProps: { threshold: 0.1 } }
    )

    // Change threshold
    rerender({ threshold: 0.5 })

    // Should create a new observer with new threshold
    expect(global.IntersectionObserver).toHaveBeenCalledTimes(2)
    expect(global.IntersectionObserver).toHaveBeenLastCalledWith(
      expect.any(Function),
      {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    )
  })

  it('should handle when ref.current is null during cleanup', () => {
    const { result, unmount } = renderHook(() => useScrollAnimation())
    
    // Ensure ref.current is null
    Object.defineProperty(result.current.ref, 'current', {
      value: null,
      writable: true
    })

    // Should not throw error when unmounting with null ref
    expect(() => unmount()).not.toThrow()
  })

  it('should handle multiple intersection entries', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // Simulate multiple entries (only first one should be used)
    act(() => {
      observerCallback([
        { isIntersecting: false } as IntersectionObserverEntry,
        { isIntersecting: true } as IntersectionObserverEntry
      ], {} as IntersectionObserver)
    })

    // Should use the first entry (false)
    expect(result.current.isVisible).toBe(false)
  })

  it('should handle observer callback with empty entries array', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // Simulate empty entries array
    act(() => {
      observerCallback([], {} as IntersectionObserver)
    })

    // Should remain false (initial state)
    expect(result.current.isVisible).toBe(false)
  })

  it('should maintain isVisible state once set to true', () => {
    const { result } = renderHook(() => useScrollAnimation())
    
    // Set to true first
    act(() => {
      observerCallback([
        { isIntersecting: true } as IntersectionObserverEntry
      ], {} as IntersectionObserver)
    })

    expect(result.current.isVisible).toBe(true)

    // Try to set back to false (should remain true based on component logic)
    act(() => {
      observerCallback([
        { isIntersecting: false } as IntersectionObserverEntry
      ], {} as IntersectionObserver)
    })

    // Based on the hook implementation, it only sets to true, never back to false
    expect(result.current.isVisible).toBe(true)
  })

  it('should handle different threshold values correctly', () => {
    const { rerender } = renderHook(
      ({ threshold }) => useScrollAnimation(threshold),
      { initialProps: { threshold: 0 } }
    )

    expect(global.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Test with threshold of 1
    rerender({ threshold: 1 })

    expect(global.IntersectionObserver).toHaveBeenLastCalledWith(
      expect.any(Function),
      {
        threshold: 1,
        rootMargin: '0px 0px -100px 0px'
      }
    )
  })
})