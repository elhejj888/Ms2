import Link from 'next/link';
import { Zap, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800/50">
      <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
                    
          {/* Compact Brand Section - Dark Theme */}
          <div className="flex items-center space-x-3 mb-3 md:mb-0 flex-shrink-0 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <Globe className="w-1.5 h-1.5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                SocialFlow
              </h3>
              <p className="text-xs text-gray-400 -mt-0.5 font-medium">AI-Powered Management</p>
            </div>
          </div>

          {/* Compact Footer Links - Dark Theme */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-5">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Compact Bottom Bar - Dark Theme */}
        <div className="mt-4 pt-4 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} SocialFlow. All rights reserved.
          </p>
                    
          {/* Enhanced Status Indicator - Dark Theme */}
          <div className="flex items-center space-x-3 mt-2 sm:mt-0 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30 backdrop-blur-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <span className="text-xs text-green-300 font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}