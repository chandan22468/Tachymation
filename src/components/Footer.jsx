import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import eagleLogo from '../assets/eagle.webp';

const footerLinks = [
  { to: '/',          label: 'Home'      },
  { to: '/features',  label: 'Features'  },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/about',     label: 'About'     },
  { to: '/blog',      label: 'Blog'      },
  { to: '/contact',   label: 'Contact'   },
];

const Footer = () => {
  return (
    <footer className="w-full bg-bg-secondary border-t border-border px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Left: Logo & Tagline */}
          <div>
            <Link to="/" aria-label="Iterate First home">
              <img
                src={eagleLogo}
                alt="Iterate First — AI Automation Platform"
                width="32"
                height="32"
                className="h-8 w-auto mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.08)]"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="font-body text-text-secondary text-sm">
              Eagle-like speed. Enterprise-grade output.
            </p>
            <p className="font-body text-white text-xs mt-2 max-w-[220px] leading-relaxed">
              Iterate First is an AI automation platform for businesses and startups.
            </p>
          </div>

          {/* Center: Crawlable navigation links */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs text-text-secondary/60 uppercase tracking-widest mb-4">Navigate</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right: Social & Legal */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/iteratefirst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                aria-label="Iterate First on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/iteratefirst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                aria-label="Iterate First on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/iteratefirst"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
                aria-label="Iterate First on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-4">
              <span className="font-body text-xs text-text-secondary/50">Privacy</span>
              <span className="font-body text-xs text-text-secondary/50">Terms</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-green-600 font-medium">System Operational</span>
          </div>
          <p className="font-body text-xs text-text-secondary">
            © {new Date().getFullYear()} Iterate First. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
