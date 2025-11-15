import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, Sparkles, Zap, TrendingUp, Users } from 'lucide-react'

const HomeHero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[64px_64px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Trusted by 10,000+ companies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'gradient 3s ease infinite' }}>
                Business with AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Streamline operations, boost productivity, and scale faster with our cutting-edge AI-powered platform.
            </p>

            {/* Feature List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {['No credit card required', 'Free 14-day trial', 'Cancel anytime'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              {[
                { icon: Users, value: '10K+', label: 'Active Users' },
                { icon: Zap, value: '99.9%', label: 'Uptime' },
                { icon: TrendingUp, value: '2x', label: 'Growth Rate' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <stat.icon className="w-6 h-6 text-blue-400 mb-2 mx-auto lg:mx-0" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Visual */}
          <div className={`relative transform transition-all duration-1000 ${
            mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            
            <div className="relative">
              {/* Main Card - Dashboard Preview */}
              <div className="relative bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10 shadow-2xl backdrop-blur-sm">
                
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">Dashboard</div>
                </div>

                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  {/* Chart Bars */}
                  <div className="grid grid-cols-5 gap-3 h-40 items-end">
                    {[60, 85, 70, 95, 75].map((height, idx) => (
                      <div
                        key={idx}
                        className="bg-linear-to-t from-blue-600 to-purple-600 rounded-t-lg animate-grow"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${idx * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Revenue', value: '$24.5K', trend: '+12%' },
                      { label: 'Users', value: '1,845', trend: '+8%' }
                    ].map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-green-400 text-sm font-medium">{metric.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -bottom-14 -left-2 md:-left-6 bg-white rounded-xl p-4 shadow-2xl border border-gray-100 max-w-xs animate-slide-in-left">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Task Completed!</div>
                    <div className="text-sm text-gray-600">Your AI model is ready</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-6 -right-2 md:-right-6 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl p-4 shadow-2xl animate-slide-in-right">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">156%</div>
                    <div className="text-sm text-blue-100">Faster Processing</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -inset-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Trust Badges / Company Logos */}
        <div className={`mt-20 transform transition-all duration-1000 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <p className="text-center text-gray-400 text-sm mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 hover:opacity-100 transition-opacity">
            {['TechCorp', 'Innovate', 'DataFlow', 'CloudScale', 'AI Labs'].map((company, idx) => (
              <div key={idx} className="text-2xl font-bold text-white/50 hover:text-white/80 transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero