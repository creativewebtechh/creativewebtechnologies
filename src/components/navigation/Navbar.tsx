import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { siteConfig } from '../../data/site';
import { Button } from '../ui/Button';
import logo from '../../assets/creativewebtech-logo-transparent.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt={siteConfig.name} className="h-10 w-auto" />
            <span
              className={clsx(
                'font-bold text-xl transition-colors',
                isScrolled ? 'text-primary' : 'text-white'
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(
                  'font-medium transition-colors hover:text-accent',
                  location.pathname === item.href
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-primary'
                    : 'text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/get-a-quote">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-primary hover:bg-light'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'lg:hidden fixed inset-0 top-[72px] bg-white transition-all duration-300',
            isOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          )}
        >
          <div className="container py-8 flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={clsx(
                  'text-lg font-medium py-3 border-b border-border transition-colors hover:text-accent',
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/get-a-quote" className="mt-4">
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
                }
