
import React, { useState } from 'react';
import { 
  Github, 
  Terminal, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Code2, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Rocket
} from 'lucide-react';

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="https://www.netlify.com/" className="flex items-center gap-2 cursor-pointer group">
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#31bdc6] fill-current group-hover:scale-110 transition-transform">
              <path d="M26.4,17.2l-3-12.7c-0.1-0.5-0.5-0.8-1-0.8H12.1c-0.5,0-0.9,0.3-1,0.8L8,17.2c-0.2,0.7,0.3,1.3,1,1.3h16.4C26.1,18.5,26.6,17.9,26.4,17.2z"/>
              <path d="M28,20.4H6.5c-0.7,0-1.3,0.6-1.3,1.3l0.7,6.4c0.1,0.5,0.5,0.8,1,0.8h19.5c0.5,0,0.9-0.3,1-0.8l0.7-6.4C29.2,21,28.7,20.4,28,20.4z"/>
            </svg>
            <span className="font-bold text-2xl tracking-tight text-white">netlify</span>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-400">
            <a href="https://www.netlify.com/platform/" target="_blank" rel="noopener noreferrer" className="hover:text-[#31bdc6] transition-colors">Platform</a>
            <a href="https://www.netlify.com/solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-[#31bdc6] transition-colors">Solutions</a>
            <a href="https://www.netlify.com/integrations/" target="_blank" rel="noopener noreferrer" className="hover:text-[#31bdc6] transition-colors">Integrations</a>
            <a href="https://docs.netlify.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#31bdc6] transition-colors">Docs</a>
            <a href="https://www.netlify.com/pricing/" target="_blank" rel="noopener noreferrer" className="hover:text-[#31bdc6] transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://app.netlify.com/login" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-[15px] font-medium text-gray-400 hover:text-white transition-colors">Log in</a>
          <a href="https://app.netlify.com/signup" target="_blank" rel="noopener noreferrer" className="btn-primary text-[15px] font-bold px-5 py-2.5 rounded-lg">Sign up</a>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0e1e25] border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a href="https://www.netlify.com/platform/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Platform</a>
          <a href="https://www.netlify.com/solutions/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Solutions</a>
          <a href="https://www.netlify.com/integrations/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Integrations</a>
          <a href="https://docs.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Docs</a>
          <a href="https://www.netlify.com/pricing/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Pricing</a>
          <hr className="border-white/5 my-2" />
          <a href="https://app.netlify.com/login" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300">Log in</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [subdomain, setSubdomain] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClaim = () => {
    const url = subdomain 
      ? `https://app.netlify.com/signup?domain=${encodeURIComponent(subdomain)}` 
      : 'https://app.netlify.com/signup';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="pt-40 pb-24 px-4 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#31bdc6]/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <a href="https://www.netlify.com/platform/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-semibold text-[#31bdc6] mb-8 hover:bg-white/10 transition-colors cursor-pointer">
          <span className="flex h-2 w-2 rounded-full bg-[#31bdc6] animate-ping"></span>
          Netlify Composable Web Platform
        </a>
        <h1 className="text-5xl md:text-[84px] font-[900] mb-8 tracking-[-0.03em] leading-[0.95] text-white">
          The foundation for the <br /> <span className="text-gradient">modern web</span>.
        </h1>
        <p className="text-lg md:text-[22px] text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          The best way to build, deploy, and scale web applications. <br className="hidden md:block" /> Start for free with your custom subdomain today.
        </p>

        <div className={`max-w-xl mx-auto transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
          <div className={`p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent mb-2 ${isFocused ? 'via-[#31bdc6]/50' : ''}`}>
             <div className="bg-[#0e1e25] p-1.5 rounded-2xl flex items-center shadow-2xl">
              <div className="flex-1 flex items-center px-5 bg-transparent">
                <input 
                  type="text" 
                  placeholder="sujonroy" 
                  className="bg-transparent border-none focus:outline-none text-white w-full py-3.5 text-xl font-medium placeholder-gray-600"
                  value={subdomain}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  onKeyDown={(e) => e.key === 'Enter' && handleClaim()}
                />
                <span className="text-gray-500 font-bold text-xl ml-1">.netlify.app</span>
              </div>
              <button 
                onClick={handleClaim}
                className="btn-primary px-8 py-4 rounded-xl font-extrabold flex items-center gap-2 group whitespace-nowrap"
              >
                Claim URL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">✨ Enter a name to preview your future site URL</p>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: <Zap className="text-[#31bdc6]" size={28} />,
      title: "Instant Deploy",
      description: "Push code to any Git provider and Netlify will build and deploy it globally in seconds.",
      link: "https://www.netlify.com/platform/deploy/"
    },
    {
      icon: <Globe className="text-[#31bdc6]" size={28} />,
      title: "Global CDN",
      description: "Static and dynamic content served from the edge for lightning-fast performance worldwide.",
      link: "https://www.netlify.com/platform/edge/"
    },
    {
      icon: <ShieldCheck className="text-[#31bdc6]" size={28} />,
      title: "Built-in Security",
      description: "Automated SSL, DDoS protection, and WAF protection are included in every project.",
      link: "https://www.netlify.com/platform/security/"
    },
    {
      icon: <Code2 className="text-[#31bdc6]" size={28} />,
      title: "Composable SDK",
      description: "Connect your favorite tools and APIs to create a high-performance web architecture.",
      link: "https://www.netlify.com/platform/core/"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <a 
            key={i} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-10 rounded-3xl hover:bg-white/[0.05] transition-all duration-300 border-white/5 hover:border-[#31bdc6]/20 group block"
          >
            <div className="mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#31bdc6]/10 transition-all">
              {item.icon}
            </div>
            <h3 className="text-[22px] font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 text-[16px] leading-relaxed font-medium">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const CodePreview = () => {
  return (
    <section className="py-32 px-4 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <div className="inline-block px-4 py-1 rounded-full bg-[#31bdc6]/10 text-[#31bdc6] text-xs font-bold uppercase tracking-wider mb-6">Developer Experience</div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white tracking-tight">Deploy your project from the command line.</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium">
            Netlify CLI brings the power of our platform directly to your terminal. Authenticate, deploy, and manage your sites with a single command.
          </p>
          <ul className="space-y-6 mb-10">
            {[
              "Automated build and deploy pipelines",
              "Local development with Netlify Dev",
              "Direct integration with your Git flow"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-300 font-medium">
                <div className="mt-1 bg-[#31bdc6]/20 rounded-full p-1">
                  <ChevronRight size={16} className="text-[#31bdc6]" />
                </div>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a 
            href="https://docs.netlify.com/cli/get-started/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 font-bold text-[#31bdc6] hover:gap-5 transition-all group"
          >
            Explore the CLI <ArrowRight size={20} className="group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="flex-1 w-full max-w-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#31bdc6] to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0e1e25] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm leading-relaxed">
              <div className="bg-black/40 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">netlify-terminal</div>
              </div>
              <div className="p-8 space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#31bdc6] font-bold">~</span>
                  <span className="text-white">npm install netlify-cli -g</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#31bdc6] font-bold">~</span>
                  <span className="text-white">netlify init</span>
                </div>
                <div className="flex gap-3 mt-6">
                  <span className="text-[#31bdc6] font-bold">?</span>
                  <span className="text-white font-bold">What would you like to do?</span>
                  <span className="text-cyan-400">Connect to existing site</span>
                </div>
                <div className="text-gray-500 mt-4 border-l-2 border-[#31bdc6]/30 pl-4 py-1 italic">
                  # Initializing repository connection...
                </div>
                <div className="text-green-400 font-bold flex items-center gap-2">
                   <Zap size={14} fill="currentColor" /> Success! Site is connected to Netlify.
                </div>
                <div className="bg-white/5 p-4 rounded-lg mt-4 border border-white/5">
                  <span className="text-gray-400 block mb-1">Admin URL:</span>
                  <span className="text-[#31bdc6] break-all">https://app.netlify.com/sites/sujonroy-portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerData = [
    { 
      title: 'Platform', 
      links: [
        { name: 'Pricing', url: 'https://www.netlify.com/pricing/' },
        { name: 'Docs', url: 'https://docs.netlify.com/' },
        { name: 'Enterprise', url: 'https://www.netlify.com/enterprise/' },
        { name: 'Security', url: 'https://www.netlify.com/security/' }
      ] 
    },
    { 
      title: 'Resources', 
      links: [
        { name: 'Blog', url: 'https://www.netlify.com/blog/' },
        { name: 'Community', url: 'https://answers.netlify.com/' },
        { name: 'Support', url: 'https://www.netlify.com/support/' },
        { name: 'Glossary', url: 'https://www.netlify.com/glossary/' }
      ] 
    },
    { 
      title: 'Company', 
      links: [
        { name: 'About', url: 'https://www.netlify.com/about/' },
        { name: 'Careers', url: 'https://www.netlify.com/careers/' },
        { name: 'Contact', url: 'https://www.netlify.com/contact/' },
        { name: 'Press', url: 'https://www.netlify.com/press/' }
      ] 
    },
    { 
      title: 'Legal', 
      links: [
        { name: 'Privacy', url: 'https://www.netlify.com/privacy/' },
        { name: 'Terms', url: 'https://www.netlify.com/terms/' },
        { name: 'GDPR', url: 'https://www.netlify.com/gdpr-ccpa/' },
        { name: 'Abuse', url: 'https://www.netlify.com/abuse/' }
      ] 
    }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#050505] py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        <div className="col-span-2">
          <a href="https://www.netlify.com/" className="flex items-center gap-2 mb-8 cursor-pointer group">
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#31bdc6] fill-current">
              <path d="M26.4,17.2l-3-12.7c-0.1-0.5-0.5-0.8-1-0.8H12.1c-0.5,0-0.9,0.3-1,0.8L8,17.2c-0.2,0.7,0.3,1.3,1,1.3h16.4C26.1,18.5,26.6,17.9,26.4,17.2z"/>
              <path d="M28,20.4H6.5c-0.7,0-1.3,0.6-1.3,1.3l0.7,6.4c0.1,0.5,0.5,0.8,1,0.8h19.5c0.5,0,0.9-0.3,1-0.8l0.7-6.4C29.2,21,28.7,20.4,28,20.4z"/>
            </svg>
            <span className="font-bold text-2xl tracking-tighter text-white">netlify</span>
          </a>
          <p className="text-gray-500 max-w-xs mb-8 font-medium leading-relaxed">
            Netlify is the platform for modern web projects. We help developers build, deploy, and scale faster than ever.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/netlify" target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-500 hover:text-[#31bdc6] cursor-pointer transition-colors" size={24} />
            </a>
            <a href="https://docs.netlify.com/cli/get-started/" target="_blank" rel="noopener noreferrer">
              <Terminal className="text-gray-500 hover:text-[#31bdc6] cursor-pointer transition-colors" size={24} />
            </a>
            <a href="https://www.netlify.com/platform/" target="_blank" rel="noopener noreferrer">
              <Rocket className="text-gray-500 hover:text-[#31bdc6] cursor-pointer transition-colors" size={24} />
            </a>
          </div>
        </div>
        
        {footerData.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-[16px] text-white mb-6 tracking-wide uppercase text-[12px] opacity-60">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-[#31bdc6] cursor-pointer text-[15px] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
        <p>© 2024 Netlify. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://www.netlify.com/trust-center/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Trust Center</a>
          <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Privacy</a>
          <a href="https://www.netlify.com/security/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trusted By Section - More accurate grayscale brands */}
        <section className="py-16 px-4 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 font-bold uppercase text-[12px] tracking-[0.2em] mb-12">Building the future with</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-opacity">
              <span className="font-black text-3xl tracking-tighter text-white">PELOTON</span>
              <span className="font-black text-3xl tracking-tighter text-white">NIKE</span>
              <span className="font-black text-3xl tracking-tighter text-white">SAMSUNG</span>
              <span className="font-black text-3xl tracking-tighter text-white">UNILEVER</span>
              <span className="font-black text-3xl tracking-tighter text-white">TWILIO</span>
            </div>
          </div>
        </section>

        <Features />
        <CodePreview />
        
        {/* Call to Action - Highly Polished */}
        <section className="py-40 px-4 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#31bdc6]/5 blur-[140px] rounded-full -z-10"></div>
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#31bdc6]/20 to-transparent blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="bg-[#0e1e25] border border-white/10 p-16 md:p-24 rounded-[3rem] shadow-[0_0_100px_rgba(49,189,198,0.1)]">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">Ready to ship?</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Join over 4 million developers and start building better web experiences today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a 
                  href="https://app.netlify.com/signup" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#31bdc6]/20 hover:scale-105 transition-transform inline-block"
                >
                  Get started for free
                </a>
                <a 
                  href="https://www.netlify.com/contact/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-xl border border-white/10 transition-all text-white inline-block"
                >
                  Contact sales
                </a>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Free for personal use
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Unlimited sites
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Instant rollback
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
