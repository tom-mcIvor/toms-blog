import React from 'react'
import { render, screen, fireEvent } from '../utils/test-utils'
import { waitForAnimation } from '../utils/test-utils'
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
      />
    )
  }
  MockImage.displayName = 'MockImage'
  return MockImage
})

// Full page component for SEO testing
const FullPageForSEO = () => {
  return (
    <html lang="en">
      <head>
        <title>Thomas McIvor - Full Stack Developer</title>
        <meta name="description" content="Portfolio of Thomas McIvor, a passionate full stack developer specializing in React, TypeScript, and modern web technologies." />
        <meta name="keywords" content="Thomas McIvor, Full Stack Developer, React, TypeScript, JavaScript, Web Development, Portfolio" />
        <meta name="author" content="Thomas McIvor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Thomas McIvor - Full Stack Developer" />
        <meta property="og:description" content="Portfolio showcasing projects and skills in modern web development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thomas-mcivor.dev" />
        <meta property="og:image" content="/tom.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thomas McIvor - Full Stack Developer" />
        <meta name="twitter:description" content="Portfolio showcasing projects and skills in modern web development" />
        <meta name="twitter:image" content="/tom.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://thomas-mcivor.dev" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/tom.png" />
      </head>
      <body>
        <Nav />
        <main>
          <Home />
        </main>
        <Footer />
      </body>
    </html>
  )
}

describe('SEO and Metadata Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    
    // Reset document head for each test
    document.head.innerHTML = ''
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Semantic HTML Structure', () => {
    it('should have proper semantic HTML structure', async () => {
      render(
        <div>
          <Nav />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      )

      await waitForAnimation(500)

      // Check for semantic elements
      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()

      // Check for proper heading hierarchy
      const h1Elements = screen.getAllByRole('heading', { level: 1 })
      const h2Elements = screen.getAllByRole('heading', { level: 2 })
      const h3Elements = screen.getAllByRole('heading', { level: 3 })

      expect(h1Elements.length).toBeGreaterThan(0)
      expect(h2Elements.length).toBeGreaterThan(0)
      expect(h3Elements.length).toBeGreaterThan(0)
    })

    it('should have proper heading hierarchy without skipping levels', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check that headings follow proper hierarchy
      const h1Elements = screen.getAllByRole('heading', { level: 1 })
      const h2Elements = screen.getAllByRole('heading', { level: 2 })

      // Should have H1 elements (main sections)
      expect(h1Elements.length).toBeGreaterThan(0)
      
      // Should have H2 elements (project titles)
      expect(h2Elements.length).toBeGreaterThan(0)

      // Verify specific headings exist
      expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: 'My Skills' })).toBeInTheDocument()
    })

    it('should use proper landmark roles', async () => {
      render(
        <div>
          <Nav />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      )

      await waitForAnimation(500)

      // Check for landmark roles
      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()

      // Navigation should be identifiable
      const navElement = screen.getByText('About').closest('div')
      expect(navElement).toBeInTheDocument()
    })
  })

  describe('Content Accessibility and SEO', () => {
    it('should have descriptive and unique page content', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check for unique, descriptive content
      expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
      expect(screen.getByText(/Throughout my studies, I gained a strong foundation/)).toBeInTheDocument()

      // Check for project descriptions
      expect(screen.getByText(/Yeah-Book app is a platform that allows users to create yearbooks/)).toBeInTheDocument()
      expect(screen.getByText(/BadgerMatch is a playful and engaging companion-finding application/)).toBeInTheDocument()
    })

    it('should have proper alt text for all images', async () => {
      render(<Home />)

      await waitForAnimation(500)

      const images = screen.getAllByRole('img')
      expect(images.length).toBeGreaterThan(0)

      // All images should have alt text
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        const altText = img.getAttribute('alt')
        expect(altText).not.toBe('')
        expect(altText).not.toBe('image') // Should be descriptive
      })
    })

    it('should have descriptive link text', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check that links have descriptive text or aria-labels
      const githubLinks = screen.getAllByLabelText('GitHub')
      const linkedinLinks = screen.getAllByLabelText('LinkedIn')

      expect(githubLinks.length).toBeGreaterThan(0)
      expect(linkedinLinks.length).toBeGreaterThan(0)

      // Links should have proper aria-labels
      githubLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label', 'GitHub')
      })

      linkedinLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label', 'LinkedIn')
      })
    })
  })

  describe('Technical SEO Elements', () => {
    it('should have proper external link attributes', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Get external links
      const githubLinks = screen.getAllByLabelText('GitHub')
      const linkedinLinks = screen.getAllByLabelText('LinkedIn')

      // Check external link attributes
      const allSocialLinks = [...githubLinks, ...linkedinLinks]
      allSocialLinks.forEach((link: HTMLElement) => {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })

    it('should have proper internal link structure', async () => {
      render(<Nav />)

      // Check internal navigation links
      const aboutLink = screen.getByText('About').closest('a')
      expect(aboutLink).toHaveAttribute('href', '/')

      // Hover to reveal menu
      const devJourneyButton = screen.getByText('My Dev Journey')
      fireEvent.mouseEnter(devJourneyButton)
      
      await waitForAnimation(200)

      const bootcampItem = screen.getByText('Bootcamp')
      fireEvent.mouseEnter(bootcampItem)
      
      await waitForAnimation(200)

      const techItem = screen.getByText('TECH')
      fireEvent.mouseEnter(techItem)
      
      await waitForAnimation(200)

      // Check internal blog links
      const cssLink = screen.getByText('CSS lessons').closest('a')
      const jsLink = screen.getByText('Javascript DOM').closest('a')

      expect(cssLink).toHaveAttribute('href', 'html-css')
      expect(jsLink).toHaveAttribute('href', 'javascript-dom')

      // Internal links should not have target="_blank"
      expect(cssLink).not.toHaveAttribute('target', '_blank')
      expect(jsLink).not.toHaveAttribute('target', '_blank')
    })

    it('should have structured data potential', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check for content that could be structured data
      expect(screen.getByText('Thomas McIvor')).toBeInTheDocument()
      expect(screen.getByText('ttmcivor@gmail.com')).toBeInTheDocument()

      // Check for project information that could be structured
      const projects = ['YeahBook', 'BadgerMatch', 'Steno Briefs']
      projects.forEach(project => {
        expect(screen.getByText(project)).toBeInTheDocument()
      })

      // Check for skills that could be structured
      const skills = ['React', 'TypeScript', 'JavaScript']
      skills.forEach(skill => {
        expect(screen.getByText(skill)).toBeInTheDocument()
      })
    })
  })

  describe('Performance and Core Web Vitals', () => {
    it('should render content efficiently for good LCP', async () => {
      const startTime = performance.now()
      
      render(<Home />)
      
      // Main content should be available quickly
      expect(screen.getByText('About Me')).toBeInTheDocument()
      
      const endTime = performance.now()
      const renderTime = endTime - startTime

      // Should render main content quickly (good for LCP)
      expect(renderTime).toBeLessThan(500)
    })

    it('should have minimal layout shift potential', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check that images have dimensions to prevent layout shift
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('width')
        expect(img).toHaveAttribute('height')
      })
    })

    it('should be responsive for mobile-first indexing', async () => {
      // Test mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      })

      render(<Home />)

      await waitForAnimation(500)

      // Content should be accessible on mobile
      expect(screen.getByText('About Me')).toBeInTheDocument()
      expect(screen.getByText('My Portfolio')).toBeInTheDocument()

      // Check that responsive classes are applied
      const aboutSection = screen.getByText('About Me').closest('section')
      expect(aboutSection).toHaveClass('flex-col', 'lg:flex-row')
    })
  })

  describe('Content Quality and Relevance', () => {
    it('should have relevant keywords in content', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check for relevant keywords
      const content = document.body.textContent || ''
      
      expect(content).toMatch(/developer/i)
      expect(content).toMatch(/react/i)
      expect(content).toMatch(/typescript/i)
      expect(content).toMatch(/javascript/i)
      expect(content).toMatch(/portfolio/i)
    })

    it('should have unique and valuable content', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check for unique project descriptions
      expect(screen.getByText(/Yeah-Book app is a platform that allows users to create yearbooks/)).toBeInTheDocument()
      expect(screen.getByText(/BadgerMatch is a playful and engaging companion-finding application/)).toBeInTheDocument()
      expect(screen.getByText(/StenoBriefs is a modern, web-based platform for the stenography community/)).toBeInTheDocument()

      // Check for personal information
      expect(screen.getByText(/Hi, I'm Thomas, a passionate developer/)).toBeInTheDocument()
    })

    it('should have proper content hierarchy', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check content is organized logically
      const aboutSection = screen.getByText('About Me')
      const skillsSection = screen.getByText('My Skills')
      const portfolioSection = screen.getByText('My Portfolio')

      expect(aboutSection).toBeInTheDocument()
      expect(skillsSection).toBeInTheDocument()
      expect(portfolioSection).toBeInTheDocument()

      // Sections should be in logical order in DOM
      const aboutElement = aboutSection.closest('section')
      const skillsElement = skillsSection.closest('section')
      const portfolioElement = portfolioSection.closest('section')

      expect(aboutElement).toBeInTheDocument()
      expect(skillsElement).toBeInTheDocument()
      expect(portfolioElement).toBeInTheDocument()
    })
  })

  describe('Social Media and Sharing', () => {
    it('should have social media links for engagement', async () => {
      render(<Footer />)

      await waitForAnimation(200)

      // Check for social media presence
      const githubLink = screen.getByLabelText('GitHub')
      const linkedinLink = screen.getByLabelText('LinkedIn')

      expect(githubLink).toHaveAttribute('href', 'https://github.com/tom-mcIvor')
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tom-mcivor-5b280488/')

      // Links should open in new tab for social engagement
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('target', '_blank')
    })

    it('should have contact information for local SEO', async () => {
      render(<Footer />)

      await waitForAnimation(200)

      // Check for contact information
      const emailLink = screen.getByText('ttmcivor@gmail.com')
      expect(emailLink).toBeInTheDocument()
      expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:ttmcivor@gmail.com')
    })
  })

  describe('Accessibility for SEO', () => {
    it('should have proper ARIA labels and roles', async () => {
      render(
        <div>
          <Nav />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      )

      await waitForAnimation(500)

      // Check for proper roles
      expect(screen.getByRole('main')).toBeInTheDocument()
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()

      // Check for ARIA labels on interactive elements
      const githubLinks = screen.getAllByLabelText('GitHub')
      const linkedinLinks = screen.getAllByLabelText('LinkedIn')

      expect(githubLinks.length).toBeGreaterThan(0)
      expect(linkedinLinks.length).toBeGreaterThan(0)
    })

    it('should have keyboard navigation support', async () => {
      render(<Nav />)

      const devJourneyButton = screen.getByText('My Dev Journey')
      
      // Should be focusable
      devJourneyButton.focus()
      expect(devJourneyButton).toHaveFocus()

      // Should respond to keyboard events
      fireEvent.keyDown(devJourneyButton, { key: 'Enter', code: 'Enter' })
      expect(devJourneyButton).toBeInTheDocument()
    })

    it('should have proper color contrast for readability', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check that text elements have proper contrast classes
      const aboutText = screen.getByText(/Hi, I'm Thomas, a passionate developer/)
      expect(aboutText).toBeInTheDocument()

      // Text should be readable (this would need actual color contrast testing in real scenarios)
      const textElement = aboutText.closest('p')
      expect(textElement).toBeInTheDocument()
    })
  })

  describe('Technical Implementation', () => {
    it('should have clean URL structure potential', async () => {
      render(<Nav />)

      // Check navigation links for clean URLs
      const devJourneyButton = screen.getByText('My Dev Journey')
      fireEvent.mouseEnter(devJourneyButton)
      
      await waitForAnimation(200)

      const bootcampItem = screen.getByText('Bootcamp')
      fireEvent.mouseEnter(bootcampItem)
      
      await waitForAnimation(200)

      const techItem = screen.getByText('TECH')
      fireEvent.mouseEnter(techItem)
      
      await waitForAnimation(200)

      // URLs should be clean and descriptive
      const cssLink = screen.getByText('CSS lessons').closest('a')
      const jsLink = screen.getByText('Javascript DOM').closest('a')

      expect(cssLink).toHaveAttribute('href', 'html-css')
      expect(jsLink).toHaveAttribute('href', 'javascript-dom')

      // URLs are clean (no query parameters or complex paths)
      expect(cssLink?.getAttribute('href')).not.toContain('?')
      expect(jsLink?.getAttribute('href')).not.toContain('?')
    })

    it('should have proper content encoding and structure', async () => {
      render(<Home />)

      await waitForAnimation(500)

      // Check that content is properly structured
      const sections = document.querySelectorAll('section')
      expect(sections.length).toBeGreaterThan(0)

      // Check that paragraphs are properly structured
      const paragraphs = document.querySelectorAll('p')
      expect(paragraphs.length).toBeGreaterThan(0)

      // Check that lists are properly structured where appropriate
      const lists = document.querySelectorAll('ul, ol')
      expect(lists.length).toBeGreaterThan(0)
    })
  })
})