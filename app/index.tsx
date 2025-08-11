import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, FileText, Target, CheckCircle, Mail, Menu, X, Star, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const SecureByteLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStats, setCurrentStats] = useState({
    nonCompliant: 0,
    maxFine: 0,
    avgCost: 0,
    breachInvolvement: 0
  });

  // Animated counter for statistics
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStats({
        nonCompliant: 73,
        maxFine: 10,
        avgCost: 15000,
        breachInvolvement: 85
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const frameworks = [
    {
      id: 'popia',
      name: 'POPIA Compliance',
      icon: '🛡️',
      price: 499,
      popular: true,
      description: 'Protection of Personal Information Act assessment for South African businesses',
      features: [
        '15 comprehensive compliance questions',
        'Detailed gap analysis & risk assessment',
        '90-day implementation roadmap',
        'POPIA reference guide & templates',
        'Regulatory penalty risk evaluation'
      ],
      perfectFor: 'Startups, SMEs, any business processing personal data'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      icon: '🔒',
      price: 499,
      popular: false,
      description: 'Information Security Management System assessment',
      features: [
        '114 security controls assessment',
        'Risk management framework',
        'Implementation priority matrix',
        'Security policy templates',
        'Certification readiness score'
      ],
      perfectFor: 'Growing businesses, enterprise clients, tender requirements'
    },
    {
      id: 'cis',
      name: 'CIS Controls',
      icon: '⚡',
      price: 499,
      popular: false,
      description: 'Cybersecurity framework for practical security measures',
      features: [
        '18 security controls evaluation',
        'Implementation maturity scoring',
        'Cost-effective security roadmap',
        'Tool and vendor recommendations',
        'Industry benchmark comparison'
      ],
      perfectFor: 'Tech startups, SaaS companies, small IT teams'
    }
  ];

  const AnimatedCounter = ({ end, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCount(prevCount => {
          const increment = Math.ceil(end / 50);
          const nextCount = prevCount + increment;
          return nextCount >= end ? end : nextCount;
        });
      }, 50);
      
      return () => clearInterval(timer);
    }, [end]);

    return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">SecureByte Express</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#frameworks" className="text-gray-300 hover:text-white transition-colors">Assessments</a>
              <a href="#reports" className="text-gray-300 hover:text-white transition-colors">What You Get</a>
              <a href="#saas" className="text-gray-300 hover:text-white transition-colors">Coming Soon</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#frameworks" className="block text-gray-300 hover:text-white">Assessments</a>
              <a href="#reports" className="block text-gray-300 hover:text-white">What You Get</a>
              <a href="#saas" className="block text-gray-300 hover:text-white">Coming Soon</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-500/30">
            <span>🇿🇦</span>
            <span>Built for South African Businesses</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Professional Compliance Reports in 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              48 Hours
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Skip expensive consultants. Get detailed <strong className="text-white">POPIA, ISO 27001, or CIS Controls</strong> assessment reports for <span className="text-green-400 font-bold">R499</span> — delivered in 2 days.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-700">
              <span>⚡</span>
              <span>48-hour delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-700">
              <span>📊</span>
              <span>15-page professional report</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-700">
              <span>🎯</span>
              <span>Actionable recommendations</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Choose Your Assessment - R499
            </button>
            <p className="text-green-400 text-sm flex items-center justify-center space-x-2">
              <span>💰</span>
              <span>Money-back guarantee</span>
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The South African Compliance Reality</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't let your business become another statistic. Take action before it's too late.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 p-8 rounded-2xl border border-red-500/20 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">
                <AnimatedCounter end={currentStats.nonCompliant} suffix="%" />
              </div>
              <div className="text-lg text-gray-300 mb-3">of SA businesses are not fully POPIA compliant</div>
              <div className="text-sm text-gray-500">Source: Information Regulator SA, 2024</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-2">
                R<AnimatedCounter end={currentStats.maxFine} />M
              </div>
              <div className="text-lg text-gray-300 mb-3">Maximum POPIA fine for non-compliance</div>
              <div className="text-sm text-gray-500">Source: POPIA Section 107</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-500/20 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                R<AnimatedCounter end={currentStats.avgCost} />+
              </div>
              <div className="text-lg text-gray-300 mb-3">Average cost of compliance consultants</div>
              <div className="text-sm text-gray-500">Source: Industry Survey 2024</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/10 to-pink-600/5 p-8 rounded-2xl border border-red-500/20 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">
                <AnimatedCounter end={currentStats.breachInvolvement} suffix="%" />
              </div>
              <div className="text-lg text-gray-300 mb-3">of data breaches involve human error</div>
              <div className="text-sm text-gray-500">Source: Verizon DBIR 2024</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
            <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center justify-center space-x-2">
              <AlertTriangle className="w-6 h-6" />
              <span>The Reality Check</span>
            </h3>
            <p className="text-lg text-gray-300">
              Most SA startups delay compliance until it's too late. Don't be a statistic.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Selection */}
      <section id="frameworks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Compliance Framework</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Each assessment includes comprehensive analysis, gap identification, and actionable implementation roadmap.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {frameworks.map((framework) => (
              <div 
                key={framework.id} 
                className={`relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  framework.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {framework.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <span>🔥</span>
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{framework.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-400">R{framework.price}</span>
                    <div className="text-sm text-gray-400">vs R15,000+ consultants</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">{framework.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {framework.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                  <strong className="text-blue-400">Perfect for:</strong>
                  <p className="text-gray-300 text-sm mt-1">{framework.perfectFor}</p>
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  framework.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Start {framework.name} Assessment
                </button>
                
                <div className="text-center mt-4 text-sm text-gray-400 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Report delivered within 48 hours</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30 text-center">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Target className="w-6 h-6 text-purple-400" />
              <span>Multiple Frameworks?</span>
            </h4>
            <p className="text-lg text-gray-300 mb-6">
              Get 2 assessments for <strong className="text-green-400">R899</strong> (save R99) or all 3 for <strong className="text-green-400">R1,299</strong> (save R198)
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
              Contact for Bundle Pricing
            </button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="reports" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What's Included in Your R499 Report</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade analysis that would cost R15,000+ from traditional consultants
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform rotate-3 shadow-2xl">
                <div className="bg-white text-black p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">POPIA Compliance Report</h3>
                    <div className="text-sm text-gray-600">SecureByte Express</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-1">
                      <span>Overall Score:</span>
                      <span className="font-bold text-red-600">2.1/5.0</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Risk Level:</span>
                      <span className="font-bold text-orange-600">High</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Priority Actions:</span>
                      <span className="font-bold">12 items</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Est. Timeline:</span>
                      <span className="font-bold text-green-600">90 days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center space-x-2">
                  <span>📊</span>
                  <span>Professional Analysis</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Compliance maturity scoring (1-5 scale)</li>
                  <li>• Risk assessment with severity levels</li>
                  <li>• Regulatory requirement mapping</li>
                  <li>• Industry benchmark comparison</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Actionable Recommendations</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Prioritized improvement actions</li>
                  <li>• Implementation effort estimates</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Quick wins identification</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold mb-3 flex items-center space-x-2">
                  <span>📚</span>
                  <span>Implementation Resources</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Policy templates and checklists</li>
                  <li>• Regulatory reference guides</li>
                  <li>• Training recommendations</li>
                  <li>• Vendor and tool suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Preview */}
      <section id="saas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-500/30">
            <span>🚀</span>
            <span>Coming August 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Introducing SecureByte Pro</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Love your compliance report? Imagine having continuous monitoring, automated assessments, and real-time compliance tracking.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="text-xl font-bold mb-2">Continuous Monitoring</h4>
              <p className="text-gray-300">Real-time compliance tracking and alerts</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-2">Automated Reports</h4>
              <p className="text-gray-300">Monthly compliance dashboards and insights</p>
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Smart Recommendations</h4>
              <p className="text-gray-300">AI-powered improvement suggestions</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input 
                type="email" 
                placeholder="Enter email for early access" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                Join Waitlist
              </button>
            </div>
            <p className="text-sm text-green-400 flex items-center justify-center space-x-2">
              <span>🎁</span>
              <span>Express customers get <strong>50% off first 3 months</strong></span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">SecureByte Express</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional compliance assessments for South African businesses. Fast, affordable, reliable.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Assessments</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">POPIA Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ISO 27001</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CIS Controls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bundle Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 SecureByte Express. All rights reserved. Made in South Africa 🇿🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecureByteLanding;