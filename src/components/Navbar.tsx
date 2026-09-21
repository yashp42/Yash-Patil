import { useState, useEffect } from 'react';
import { Copy, Check, Menu, X, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FAF9F5]/80 dark:bg-[#141413]/80 backdrop-blur-md border-[#E8E6E0]/80 dark:border-[#282724]/80 py-3.5 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-10px_rgba(0,0,0,0.5)]'
          : 'bg-[#FAF9F5] dark:bg-[#141413] border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Refined Monogram & Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-[#161616] dark:text-[#FAF9F5] hover:opacity-80 transition-opacity"
        >
          <span className="font-serif text-lg tracking-tight font-medium text-[#161616] dark:text-[#FAF9F5]">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans text-[#52504C] dark:text-[#B5B3A8]">
          <a
            href="#projects"
            className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161616] dark:after:bg-[#FAF9F5] hover:after:w-full after:transition-all"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161616] dark:after:bg-[#FAF9F5] hover:after:w-full after:transition-all"
          >
            Experience
          </a>
          <a
            href="#writing"
            className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161616] dark:after:bg-[#FAF9F5] hover:after:w-full after:transition-all"
          >
            Writing
          </a>
          <a
            href="#about"
            className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161616] dark:after:bg-[#FAF9F5] hover:after:w-full after:transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#161616] dark:hover:text-[#FAF9F5] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161616] dark:after:bg-[#FAF9F5] hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right: Quick Actions (Theme Toggle & Email Copy) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-desktop"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] text-xs font-mono text-[#161616] dark:text-[#FAF9F5] transition-colors bg-white dark:bg-[#1C1B19] hover:bg-[#F6F4ED] dark:hover:bg-[#252420] cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#52504C]" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Quick Email Copy */}
          <button
            id="copy-email-desktop"
            type="button"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#D8D6CE] hover:border-[#161616] dark:border-[#33322E] dark:hover:border-[#FAF9F5] text-xs font-mono text-[#161616] dark:text-[#FAF9F5] transition-colors bg-white dark:bg-[#1C1B19] hover:bg-[#F6F4ED] dark:hover:bg-[#252420] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#73726E] dark:text-[#9A9890]" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick Mobile Theme Toggle */}
          <button
            id="theme-toggle-mobile-header"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-[#161616] dark:text-[#FAF9F5] border border-[#E8E6E0] dark:border-[#33322E] rounded-xs bg-white dark:bg-[#1C1B19] hover:bg-[#F6F4ED] dark:hover:bg-[#252420] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#52504C]" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#161616] dark:text-[#FAF9F5] border border-[#E8E6E0] dark:border-[#33322E] rounded-xs bg-white dark:bg-[#1C1B19] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E6E0] dark:border-[#282724] bg-[#FAF9F5] dark:bg-[#141413] px-6 py-6 space-y-5">
          <nav className="flex flex-col space-y-3 font-serif text-lg">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#73726E] dark:hover:text-[#A8A69E] transition-colors"
            >
              Work &amp; Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#73726E] dark:hover:text-[#A8A69E] transition-colors"
            >
              Experience
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#73726E] dark:hover:text-[#A8A69E] transition-colors flex items-center justify-between"
            >
              <span>Writing</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E05338]/10 text-[#E05338]">Substack</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#73726E] dark:hover:text-[#A8A69E] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#161616] dark:text-[#FAF9F5] hover:text-[#73726E] dark:hover:text-[#A8A69E] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Email in Mobile Drawer */}
          <div className="pt-4 border-t border-[#E8E6E0] dark:border-[#282724] flex flex-col gap-3 font-mono text-xs">
            <button
              id="theme-toggle-mobile-drawer"
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-between px-3 py-2 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5]"
            >
              <span className="text-xs">Appearance Theme</span>
              <span className="flex items-center gap-1.5 font-medium">
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark Mode (On)</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#52504C]" />
                    <span>Light Mode (On)</span>
                  </>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center justify-between px-3 py-2 rounded-xs border border-[#D8D6CE] dark:border-[#33322E] bg-white dark:bg-[#1C1B19] text-[#161616] dark:text-[#FAF9F5]"
            >
              <span>{PERSONAL_INFO.email}</span>
              {copied ? (
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied!</span>
              ) : (
                <span className="text-[#73726E] dark:text-[#9A9890]">Copy</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

