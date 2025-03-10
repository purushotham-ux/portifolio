'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              A showcase of my professional work, skills, and experience in web development and design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 text-xl mb-4">
              <SocialLink href="https://github.com" icon={<FiGithub />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<FiLinkedin />} label="LinkedIn" />
              <SocialLink href="https://twitter.com" icon={<FiTwitter />} label="Twitter" />
              <SocialLink href="mailto:example@example.com" icon={<FiMail />} label="Email" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4 md:mb-0">
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#skills">Skills</FooterLink>
              <FooterLink href="/#projects">Projects</FooterLink>
              <FooterLink href="/#experience">Experience</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </nav>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
    >
      {children}
    </Link>
  );
};

export default Footer; 