'use client'
import React, { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 800 100"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={isVisible ? "1" : "0"}>
              <animate
                attributeName="stop-opacity"
                values="0;1"
                dur="2s"
                begin={`${delay / 1000}s`}
                fill="freeze"
              />
            </stop>
            <stop offset="50%" stopColor="#3b82f6" stopOpacity={isVisible ? "1" : "0"}>
              <animate
                attributeName="stop-opacity"
                values="0;1"
                dur="2s"
                begin={`${(delay + 500) / 1000}s`}
                fill="freeze"
              />
            </stop>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity={isVisible ? "1" : "0"}>
              <animate
                attributeName="stop-opacity"
                values="0;1"
                dur="2s"
                begin={`${(delay + 1000) / 1000}s`}
                fill="freeze"
              />
            </stop>
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48"
          fontWeight="900"
          fill="url(#textGradient)"
          filter="url(#glow)"
          className="font-black"
        >
          {text}
          <animate
            attributeName="opacity"
            values="0;1"
            dur="2s"
            begin={`${delay / 1000}s`}
            fill="freeze"
          />
        </text>
        
        {/* Animated underline */}
        <line
          x1="20%"
          y1="70%"
          x2="80%"
          y2="70%"
          stroke="url(#textGradient)"
          strokeWidth="3"
          strokeDasharray="400"
          strokeDashoffset="400"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="400;0"
            dur="1.5s"
            begin={`${(delay + 1500) / 1000}s`}
            fill="freeze"
          />
        </line>
      </svg>
    </div>
  )
}