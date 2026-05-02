import { Twitter, Linkedin, Github } from 'lucide-react';
import eagleLogo from '../assets/eagle.png';

const Footer = ({ onNavigate }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-[#222] rounded-t-[3.5rem] px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo & Tagline */}
          <div className="cursor-pointer" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (onNavigate) onNavigate('home');
          }}>
            <img
              src={eagleLogo}
              alt="aetomation"
              className="h-8 w-auto mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              loading="lazy"
              decoding="async"
            />
            <p className="font-body text-text-secondary text-sm">
              Eagle-like speed. Enterprise-grade output.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-wrap gap-6 md:justify-center">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                setTimeout(() => scrollToSection('features'), 100);
              }}
              className="font-body text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              Product
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                setTimeout(() => scrollToSection('philosophy'), 100);
              }}
              className="font-body text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              Company
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('home');
                setTimeout(() => scrollToSection('how-it-works'), 100);
              }}
              className="font-body text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              Use Cases
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (onNavigate) onNavigate('blog');
              }}
              className="font-body text-sm text-text-secondary hover:text-white transition-colors duration-300"
            >
              Blog
            </button>
          </div>

          {/* Right: Legal & Social */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => alert('Privacy Policy coming soon')}
                className="font-body text-xs text-text-secondary hover:text-white transition-colors duration-300"
              >
                Privacy
              </button>
              <button
                onClick={() => alert('Terms of Service coming soon')}
                className="font-body text-xs text-text-secondary hover:text-white transition-colors duration-300"
              >
                Terms
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          {/* System Status */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-green-500">System Operational</span>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-text-secondary">
            © {new Date().getFullYear()} Aetomation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
