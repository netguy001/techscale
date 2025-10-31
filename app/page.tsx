'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Cloud, Cpu, Zap, Code, ChevronLeft, ChevronRight, MessageCircle, Send, Mail, Linkedin, Twitter, Github, Check } from 'lucide-react';

export default function TechScale() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 How can I help you scale your digital presence today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages,
      { type: 'user', text: chatInput },
      { type: 'bot', text: 'Thanks for reaching out! Our team will connect with you within 24 hours. In the meantime, feel free to explore our services!' }
      ]);
      setChatInput('');
    }
  };

  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure built for performance, security, and seamless integration across AWS, Azure, and GCP.',
      features: ['Auto-scaling', 'CI/CD Pipelines', '99.9% Uptime']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Integration',
      description: 'Intelligent systems powered by machine learning that adapt, predict, and evolve with your business needs.',
      features: ['ML Models', 'Natural Language', 'Predictive Analytics']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'DevOps Automation',
      description: 'Streamlined deployment pipelines and infrastructure as code for rapid, reliable software delivery.',
      features: ['Kubernetes', 'Docker', 'Terraform']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web & App Development',
      description: 'Custom applications built with modern frameworks, optimized for speed, scalability, and user experience.',
      features: ['React/Next.js', 'Mobile-First', 'Progressive Web Apps']
    }
  ];

  const caseStudies = [
    {
      title: 'FinTech Revolution',
      client: 'Global Banking Corp',
      result: '40% faster transactions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Cloud', 'AI']
    },
    {
      title: 'AI-Powered Analytics',
      client: 'RetailTech Inc',
      result: '3x data insights',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['AI', 'ML']
    },
    {
      title: 'Enterprise Cloud Migration',
      client: 'Manufacturing Ltd',
      result: '60% cost reduction',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      tags: ['Cloud', 'DevOps']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, FinanceFlow',
      text: 'TechScale transformed our infrastructure. The cloud migration was seamless, and their AI solutions have revolutionized our analytics capabilities.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering, DataVerse',
      text: 'Working with TechScale felt like having an extension of our own team. Their DevOps expertise saved us months of development time.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Product Director, CloudScale',
      text: 'The best tech partner we\'ve ever worked with. Innovative solutions, transparent communication, and exceptional results every time.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 overflow-x-hidden relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: mousePosition.x * 0.02 + '%',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: mousePosition.y * 0.02 + '%',
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechScale
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm animate-fadeIn">
            🚀 Where Ideas Scale Into Innovation
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-fadeIn">
            Engineering the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Future of Digital
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeIn">
            Building tomorrow's tech, today. Empowering businesses with AI-driven solutions, scalable cloud infrastructure, and cutting-edge innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border-4 border-blue-400/30 rounded-xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-purple-400/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-4 border-pink-400/30 rounded-lg animate-float" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About TechScale
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We're not just another tech company. TechScale is a collective of innovators, engineers, and visionaries dedicated to transforming how businesses leverage technology.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: empower every organization to scale fearlessly. From startups to enterprises, we deliver AI-powered solutions, robust cloud infrastructure, and automation tools that drive real growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section id="portfolio" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">Real results for real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{study.client}</p>
                  <p className="text-blue-400 font-semibold">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl">
              <div className="text-6xl text-blue-600 mb-6">"</div>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              <ChevronLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-colors"
            >
              <ChevronRight className="text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Build Together
            </h2>
            <p className="text-xl text-gray-600">Ready to scale your digital presence? Get in touch today.</p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  />
                  <button
                    onClick={() => alert('Message sent! (Demo)')}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Mail size={20} />
                    <span>hello@techscale.io</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm mb-4">Follow us on social media</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold">TechScale</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Engineering the future of digital. Where ideas scale into innovation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Cloud Solutions</a>
                <a href="#" className="block hover:text-white transition-colors">AI Integration</a>
                <a href="#" className="block hover:text-white transition-colors">DevOps</a>
                <a href="#" className="block hover:text-white transition-colors">Development</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#about" className="block hover:text-white transition-colors">About Us</a>
                <a href="#portfolio" className="block hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest insights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 text-sm"
                />
                <button
                  onClick={() => {
                    setEmail('');
                    alert('Subscribed! (Demo)');
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
                >
                  <Check size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; 2025 TechScale. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Button */}
      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle size={28} />
      </button>

      {/* AI Chatbot Modal */}
      {chatbotOpen && (
        <div className="fixed bottom-28 right-8 w-96 max-w-[calc(100vw-4rem)] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 animate-slideUp border border-gray-200">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-3xl flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">AI Assistant</h3>
              <p className="text-sm text-blue-100">Here to help you scale</p>
            </div>
            <button onClick={() => setChatbotOpen(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.type === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-900'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask anything..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}} />
    </div>
  );
}