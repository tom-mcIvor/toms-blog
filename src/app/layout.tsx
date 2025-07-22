import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tom McIvor - Developer Portfolio',
  description: 'Full-stack developer specializing in React, TypeScript, and Node.js. Explore my projects and skills.',
  icons: {
    icon: '/TM-logo.PNG',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav />
        <div className="m-20">
        {children}
        </div>
      </body>
    </html>
  )
}
