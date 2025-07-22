import '@testing-library/jest-dom'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>
  },
}))

// Mock Next.js Head component
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => {
    return <>{children}</>
  },
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock window.ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}

// Mock Material Tailwind components
jest.mock('@material-tailwind/react', () => ({
  Carousel: ({ children, className }) => <div className={className} data-testid="carousel">{children}</div>,
  Typography: ({ children, as: Component = 'div', ...props }) => <Component {...props}>{children}</Component>,
  Menu: ({ children, allowHover, placement, open, handler, offset, ...props }) => <div {...props} data-testid="menu">{children}</div>,
  MenuHandler: ({ children, className, ...props }) => <div className={className} {...props} data-testid="menu-handler">{children}</div>,
  MenuList: ({ children, ...props }) => <div {...props} data-testid="menu-list">{children}</div>,
  MenuItem: ({ children, className, ...props }) => <div className={className} {...props} data-testid="menu-item">{children}</div>,
  Button: ({ children, className, style, ...props }) => <button className={className} style={style} {...props}>{children}</button>,
  Collapse: ({ children, open = true, ...props }) => <div {...props} data-testid="collapse">{children}</div>,
  ThemeProvider: ({ children, value, ...props }) => <div {...props}>{children}</div>,
}))

// Mock Heroicons
jest.mock('@heroicons/react/24/solid', () => ({
  ChevronUpIcon: (props) => <svg {...props} data-testid="chevron-up-icon" />,
  ChevronDownIcon: (props) => <svg {...props} data-testid="chevron-down-icon" />,
  ChevronRightIcon: (props) => <svg {...props} data-testid="chevron-right-icon" />,
}))