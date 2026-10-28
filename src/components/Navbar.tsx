import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Feed', href: '/feed' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5e5e5] bg-[#ffffff]/90 backdrop-blur-sm sticky transition-colors duration-300 dark:border-[#333333] dark:bg-[#0a0a0a]/90"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-display text-[#171717] dark:text-[#fafafa] tracking-tight">
            Bloggie
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-[#737373] transition-colors hover:text-[#171717] dark:text-[#a3a3a3] dark:hover:text-[#fafafa] border-b-2 border-transparent hover:border-[#171717] dark:hover:border-[#fafafa] pb-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
