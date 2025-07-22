'use client'
import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AIEssentials() {
  const titleAnimation = useScrollAnimation(0.1)
  const overviewAnimation = useScrollAnimation(0.1)
  const week1Animation = useScrollAnimation(0.1)
  const week2Animation = useScrollAnimation(0.1)
  const week3Animation = useScrollAnimation(0.1)
  const week4Animation = useScrollAnimation(0.1)
  const week5Animation = useScrollAnimation(0.1)
  const week6Animation = useScrollAnimation(0.1)
  const exercisesAnimation = useScrollAnimation(0.1)
  const outcomesAnimation = useScrollAnimation(0.1)

  return (
    <div className="min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div
          ref={titleAnimation.ref}
          className={`transition-all duration-1000 ease-out ${
            titleAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl font-black mb-8 text-center">
            AI Coding Essentials Course
          </h1>
        </div>
        
        <div
          ref={overviewAnimation.ref}
          className={`mb-8 transition-all duration-1000 ease-out ${
            overviewAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            I completed AI Coding Essentials, a comprehensive 6-week professional development course designed to bridge the gap between traditional software development and AI integration. Building upon my foundational bootcamp training, this practical, hands-on course equipped me with essential AI skills for modern development workflows and building AI-augmented applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className={`bg-blue-50 p-4 rounded-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg ${
              overviewAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <h4 className="font-bold text-blue-800 mb-2">Duration</h4>
              <p className="text-blue-700">6 weeks with weekly content releases</p>
            </div>
            <div className={`bg-green-50 p-4 rounded-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg ${
              overviewAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <h4 className="font-bold text-green-800 mb-2">Methodology</h4>
              <p className="text-green-700">Self-Regulated Learning (SRL) with weekly Q&A sessions</p>
            </div>
            <div className={`bg-purple-50 p-4 rounded-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg ${
              overviewAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '600ms' }}>
              <h4 className="font-bold text-purple-800 mb-2">Language Focus</h4>
              <p className="text-purple-700">Python-focused (with AI assistance for those new to Python)</p>
            </div>
            <div className={`bg-orange-50 p-4 rounded-lg transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg ${
              overviewAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '800ms' }}>
              <h4 className="font-bold text-orange-800 mb-2">Format</h4>
              <p className="text-orange-700">Video lectures, hands-on exercises, and practical projects</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            ref={week1Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out ${
              week1Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 1: AI-Powered Coding
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mastered AI coding assistants and IDE integrations</li>
              <li>• Learned effective prompting techniques for developers</li>
              <li>• Optimized development workflows with AI pair programming</li>
              <li>• Practiced code generation, explanation, and refactoring with AI assistance</li>
            </ul>
          </div>

          <div
            ref={week2Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out delay-100 ${
              week2Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 2: Abstraction Libraries and APIs
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Explored LLM abstraction libraries and design patterns</li>
              <li>• Implemented prompt engineering best practices</li>
              <li>• Learned model selection, evaluation, and cost optimization strategies</li>
              <li>• Built API integration patterns with observability and monitoring</li>
            </ul>
          </div>

          <div
            ref={week3Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${
              week3Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 3: Evaluation, Workflow & Observability
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Developed evaluation frameworks for AI components</li>
              <li>• Created automated testing systems for AI applications</li>
              <li>• Implemented A/B testing and performance metrics</li>
              <li>• Learned deployment strategies and cost management</li>
            </ul>
          </div>

          <div
            ref={week4Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out delay-300 ${
              week4Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 4: Retrieval Augmented Generation (RAG)
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Built RAG architectures with vector databases and embeddings</li>
              <li>• Implemented semantic search and knowledge base management</li>
              <li>• Mastered chunking strategies and hybrid search approaches</li>
              <li>• Developed context-aware applications</li>
            </ul>
          </div>

          <div
            ref={week5Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out delay-400 ${
              week5Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 5: Multimodal AI with Voice Focus
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Implemented speech-to-text with Whisper and text-to-speech technologies</li>
              <li>• Designed voice-first applications and voice UI principles</li>
              <li>• Explored text-to-image generation and multimodal integration</li>
              <li>• Considered accessibility in voice applications</li>
            </ul>
          </div>

          <div
            ref={week6Animation.ref}
            className={`mb-6 transition-all duration-1000 ease-out delay-500 ${
              week6Animation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Week 6: Agent-Based AI Systems
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Designed autonomous AI agents with planning and tool use capabilities</li>
              <li>• Built custom tools and orchestrated multi-agent systems</li>
              <li>• Implemented human supervision patterns and safety considerations</li>
              <li>• Applied real-world agent applications and case studies</li>
            </ul>
          </div>
        </div>

        <div
          ref={exercisesAnimation.ref}
          className={`mt-8 transition-all duration-1000 ease-out ${
            exercisesAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Practical Exercises Completed
          </h2>
          <div className="space-y-3">
            <div className={`flex items-center space-x-3 transition-all duration-700 ease-out hover:translate-x-2 ${
              exercisesAnimation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">✓</span>
              <span className="text-gray-700">Experimented with multiple AI coding assistants</span>
            </div>
            <div className={`flex items-center space-x-3 transition-all duration-700 ease-out hover:translate-x-2 ${
              exercisesAnimation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">✓</span>
              <span className="text-gray-700">Built MCP (Model Context Protocol) servers for extended AI capabilities</span>
            </div>
            <div className={`flex items-center space-x-3 transition-all duration-700 ease-out hover:translate-x-2 ${
              exercisesAnimation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '600ms' }}>
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">✓</span>
              <span className="text-gray-700">Used GitHub CLI and AI for project management and backlog wrangling</span>
            </div>
            <div className={`flex items-center space-x-3 transition-all duration-700 ease-out hover:translate-x-2 ${
              exercisesAnimation.isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '800ms' }}>
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">✓</span>
              <span className="text-gray-700">Developed a complete project (RecipeRadar) applying course concepts</span>
            </div>
          </div>
        </div>

        <div
          ref={outcomesAnimation.ref}
          className={`mt-8 transition-all duration-1000 ease-out ${
            outcomesAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Key Outcomes
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            This course provided immediate, practical skills for integrating AI into development workflows while building a foundation for creating sophisticated AI-powered applications. The self-regulated learning approach allowed for deep exploration of areas most relevant to my development goals.
          </p>
          <div className={`mt-6 transition-all duration-1000 ease-out ${
            outcomesAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '400ms' }}>
            <h4 className="font-bold text-gray-800 mb-3">Skills Acquired:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '600ms' }}>• AI-augmented development workflows</p>
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '800ms' }}>• RAG system implementation</p>
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '1000ms' }}>• Multimodal AI integration</p>
              </div>
              <div className="space-y-2">
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`} style={{ transitionDelay: '700ms' }}>• Agent-based system design</p>
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`} style={{ transitionDelay: '900ms' }}>• AI evaluation and monitoring</p>
                <p className={`text-gray-700 font-medium transition-all duration-700 ease-out ${
                  outcomesAnimation.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                }`} style={{ transitionDelay: '1100ms' }}>• Voice-first application development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}