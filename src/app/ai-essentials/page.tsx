import React from 'react'

export default function AIEssentials() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-8 text-center">AI Essentials</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Introduction to AI</h2>
          <p className="text-lg text-gray-700 mb-4">
            Artificial Intelligence (AI) is transforming the way we work, learn, and interact with technology. 
            This section covers essential AI concepts, tools, and applications that are relevant for modern developers 
            and technology professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Machine Learning Basics</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Supervised Learning</li>
              <li>• Unsupervised Learning</li>
              <li>• Reinforcement Learning</li>
              <li>• Neural Networks</li>
              <li>• Deep Learning</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Tools & Frameworks</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• TensorFlow</li>
              <li>• PyTorch</li>
              <li>• Scikit-learn</li>
              <li>• OpenAI API</li>
              <li>• Hugging Face</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Natural Language Processing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Text Processing</li>
              <li>• Sentiment Analysis</li>
              <li>• Language Models</li>
              <li>• Chatbots</li>
              <li>• Translation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Computer Vision</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Image Recognition</li>
              <li>• Object Detection</li>
              <li>• Facial Recognition</li>
              <li>• Image Generation</li>
              <li>• Video Analysis</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">AI in Web Development</h2>
          <p className="text-lg text-gray-700 mb-4">
            AI is increasingly being integrated into web development workflows, from code generation 
            and testing to user experience optimization and content creation.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">Code Generation</h4>
              <p className="text-blue-700 text-sm">AI-powered tools like GitHub Copilot and ChatGPT for code assistance</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">Testing & QA</h4>
              <p className="text-green-700 text-sm">Automated testing and bug detection using AI algorithms</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">User Experience</h4>
              <p className="text-purple-700 text-sm">Personalization and recommendation systems for better UX</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Getting Started</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ready to dive into AI? Here are some recommended resources and next steps:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <span className="text-gray-700">Learn Python programming fundamentals</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <span className="text-gray-700">Understand statistics and linear algebra basics</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <span className="text-gray-700">Explore machine learning with Scikit-learn</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <span className="text-gray-700">Build projects with TensorFlow or PyTorch</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
              <span className="text-gray-700">Join AI communities and continue learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}