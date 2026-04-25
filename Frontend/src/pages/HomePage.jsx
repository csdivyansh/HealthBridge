import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, Heart, Pill, Building2, ArrowRight, Shield, Clock, 
  Users, Star, ChevronRight, Check, Zap, Globe, Lock,
  Video, Calendar, Brain, Activity, Phone,
  Menu, X, Sparkles, TrendingUp, Award, HeartPulse,
  Play, MessageCircle, FileText, Cpu
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '50K+', label: 'Active Patients', icon: Users, color: 'indigo' },
    { value: '2,500+', label: 'Verified Doctors', icon: Stethoscope, color: 'teal' },
    { value: '98%', label: 'Satisfaction Rate', icon: Star, color: 'amber' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'rose' },
  ];

  const features = [
    {
      icon: Video,
      title: 'HD Video Consultations',
      description: 'Crystal-clear video calls with doctors from the comfort of your home with screen sharing.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI Health Assistant',
      description: 'Get instant symptom analysis and personalized health recommendations powered by AI.',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Book appointments in seconds with real-time doctor availability and reminders.',
      color: 'teal',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption ensures your health data stays completely confidential.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: Pill,
      title: 'E-Prescriptions',
      description: 'Digital prescriptions sent directly to your preferred pharmacy instantly.',
      color: 'amber',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Activity,
      title: 'Health Tracking',
      description: 'Monitor symptoms, medications, and health goals all in one unified place.',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600'
    },
  ];

  const portals = [
    {
      title: 'For Patients',
      subtitle: 'Your Health, Simplified',
      description: 'Find specialists, book appointments, track health goals, and get AI-powered insights.',
      icon: Heart,
      features: ['Find doctors instantly', 'Video consultations', 'Health tracking', 'AI symptom checker'],
      gradient: 'from-teal-500 to-emerald-600',
      bgLight: 'bg-teal-50',
      path: '/patient/register'
    },
    {
      title: 'For Doctors',
      subtitle: 'Elevate Your Practice',
      description: 'Manage appointments, consult patients remotely, and grow your medical practice.',
      icon: Stethoscope,
      features: ['Smart scheduling', 'Patient management', 'Video consultations', 'Digital records'],
      gradient: 'from-indigo-500 to-violet-600',
      bgLight: 'bg-indigo-50',
      path: '/doctor/register'
    },
    {
      title: 'For Pharmacies',
      subtitle: 'Streamline Operations',
      description: 'Manage inventory, receive e-prescriptions, and serve customers efficiently.',
      icon: Pill,
      features: ['Inventory management', 'E-prescriptions', 'Order tracking', 'Analytics dashboard'],
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50',
      path: '/pharmacy/register'
    },
    {
      title: 'For Hospitals',
      subtitle: 'Connected Healthcare',
      description: 'Register your facility, manage services, and reach more patients seamlessly.',
      icon: Building2,
      features: ['Facility management', 'Staff coordination', 'Patient flow', 'Map integration'],
      gradient: 'from-rose-500 to-pink-600',
      bgLight: 'bg-rose-50',
      path: '/hospital/register'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      quote: 'HealthBridge made it so easy to find a specialist and book an appointment. The video consultation was seamless!',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      quote: 'As a doctor, this platform has transformed how I connect with patients. The scheduling system is brilliant.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      quote: 'The AI health assistant helped me understand my symptoms before my appointment. Truly innovative!',
      rating: 5
    },
  ];

  const howItWorks = [
    { step: '01', title: 'Create Account', description: 'Sign up in seconds with your email', icon: Users },
    { step: '02', title: 'Find a Doctor', description: 'Search by specialty or location', icon: Stethoscope },
    { step: '03', title: 'Book Appointment', description: 'Pick your preferred time slot', icon: Calendar },
    { step: '04', title: 'Start Consultation', description: 'Connect via video or chat', icon: Video },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 font-sans antialiased">
      {/* ==================== NAVIGATION ==================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
              <img src="/healthbridge-logo.svg" alt="HealthBridge" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Portals', href: '#portals' },
                { name: 'How it Works', href: '#how-it-works' },
                { name: 'Testimonials', href: '#testimonials' },
              ].map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-slate-600 hover:text-indigo-600 font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => navigate('/login')}
                className="px-5 py-2.5 text-slate-600 font-semibold hover:text-indigo-600 transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {['Features', 'Portals', 'How it Works', 'Testimonials'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-slate-600 hover:text-indigo-600 font-medium py-2">{item}</a>
              ))}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button onClick={() => navigate('/login')} className="w-full py-3 text-slate-700 font-semibold border-2 border-slate-200 rounded-xl hover:border-indigo-300 transition-colors">Sign In</button>
                <button onClick={() => navigate('/login')} className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/50 to-violet-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-indigo-100 rounded-full shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-slate-600">AI-Powered Healthcare Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Where{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Health
                  </span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="underline" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#4f46e5"/>
                        <stop offset="1" stopColor="#7c3aed"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                Meets{' '}
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Experience healthcare reimagined. AI-powered diagnostics, instant doctor connections, 
                and your complete health ecosystem—all in one seamless platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                <button 
                  onClick={() => navigate('/login')}
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Play className="w-4 h-4 text-indigo-600 ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br ${i % 2 === 0 ? 'from-indigo-400 to-violet-500' : 'from-teal-400 to-emerald-500'} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">50K+</p>
                    <p className="text-xs text-slate-500">Happy Patients</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">4.9/5</p>
                    <p className="text-xs text-slate-500">User Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Showcase */}
            <div className="relative lg:pl-8">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Find Your Doctor</h3>
                      <p className="text-sm text-slate-500">2,500+ verified specialists</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full border border-emerald-100">
                    Online Now
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Video, text: 'HD Video Consultations', desc: 'Talk face-to-face' },
                    { icon: Brain, text: 'AI Symptom Checker', desc: '98% accuracy' },
                    { icon: Calendar, text: 'Instant Booking', desc: 'No waiting' },
                    { icon: Shield, text: 'Secure & Private', desc: 'HIPAA compliant' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors group cursor-pointer">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <item.icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 text-sm">{item.text}</p>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Appointment</p>
                    <p className="font-bold text-slate-900">Confirmed!</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 lg:left-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">AI Analysis</p>
                    <p className="font-bold text-slate-900">98% Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-indigo-500/25 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-indigo-100 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need for
              <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Better Healthcare</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with healthcare expertise to deliver an exceptional experience.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTALS SECTION ==================== */}
      <section id="portals" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full mb-4">
              <Globe className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-600">Multi-Portal Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              One Platform,
              <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Four Dedicated Portals</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you're a patient, doctor, pharmacy, or hospital—we have a tailored portal just for you.
            </p>
          </div>

          {/* Portals Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {portals.map((portal, idx) => (
              <div 
                key={idx}
                onClick={() => navigate(portal.path)}
                className="group cursor-pointer bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${portal.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${portal.bgLight} group-hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-500`}>
                      <portal.icon className={`w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-500`} />
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <p className="text-sm font-medium text-slate-500 group-hover:text-white/80 mb-1 transition-colors duration-500">{portal.subtitle}</p>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">{portal.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/80 mb-6 transition-colors duration-500">{portal.description}</p>
                  
                  <ul className="space-y-2">
                    {portal.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors duration-500" />
                        <span className="text-slate-600 group-hover:text-white/90 transition-colors duration-500">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-600">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get Started in
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent"> 4 Easy Steps</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to access quality healthcare.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line */}
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></div>
                )}
                
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 text-center">
                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl text-white font-bold text-xl mb-4 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-4">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-600">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Loved by
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"> Thousands</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our users have to say about their experience with HealthBridge.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-500/30">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-bold text-slate-900">{testimonials[activeTestimonial].name}</p>
                    <p className="text-slate-500">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx 
                      ? 'bg-indigo-600 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/25">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Join thousands of users who are already enjoying seamless healthcare services. Start your journey today—it's free!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/favicon.svg" alt="HealthBridge" className="w-11 h-11 rounded-xl shadow-lg" />
                <span className="text-2xl font-bold">HealthBridge</span>
              </div>
              <p className="text-slate-400 mb-6">
                Connecting healthcare professionals and patients through innovative technology.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Portals', 'Pricing', 'API'].map(item => (
                  <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press'].map(item => (
                  <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(item => (
                  <li key={item}><a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-500 text-sm mb-1">
                  © 2026 HealthBridge. All rights reserved.
                </p>
                <p className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-2">
                  <span>Designed & Developed by</span>
                  <span className="font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Neelmani Pandey
                  </span>
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/neelmani-pandey-93499b223/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-slate-800 hover:bg-[#0077B5] rounded-xl flex items-center justify-center border border-slate-700 hover:border-[#0077B5] transition-all duration-300"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/neelmanip-999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-slate-800 hover:bg-white rounded-xl flex items-center justify-center border border-slate-700 hover:border-white transition-all duration-300"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://neelmanip-999.github.io/My_Portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-11 h-11 bg-slate-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 rounded-xl flex items-center justify-center border border-slate-700 hover:border-indigo-500 transition-all duration-300"
                  title="Portfolio"
                >
                  <Globe className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
