'use client';
import Image from 'next/image';
import cel_logo from '@/public/logos/cel.webp';
import { Button } from '@headlessui/react';

const navigationLinks = [
  { name: 'Schedule', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Statistics', href: '#' },
  { name: 'About Us', href: '#' }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex min-w-full items-center justify-center p-8">
      {/* Inner Nav */}
      <div className="flex w-full items-center justify-between xl:w-[50%]">
        {/* Logo and Links */}
        <div className="flex items-center">
          {/* Logo */}
          <a href="#">
            <Image className="h-12 w-12" src={cel_logo} alt="CEL Logo" />
          </a>
          {/* Links */}
          <ul className="ml-16 flex space-x-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium uppercase hover:text-[var(--accent-secondary)]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Login Button */}
        <Button className="rounded-md bg-[var(--accent-primary)] px-8 py-1 font-bold uppercase hover:bg-[var(--accent-primary-hover)] active:bg-[var(--accent-primary-active)]">
          Login
        </Button>
      </div>
    </nav>
  );
}