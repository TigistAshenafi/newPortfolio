import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Software Engineer',
  description: 'Full-stack software engineer portfolio showcasing projects, skills, and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-slate-900 dark:text-slate-100">
      <body className={`${inter.className} transition-colors duration-300`}>{children}</body>
    </html>
  );
}
