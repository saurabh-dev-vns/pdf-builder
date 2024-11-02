// pages/_app.tsx
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '../../public/css/globals.css';
import { MdDarkMode } from "react-icons/md";
import { NavBar } from '../components/Navbar/navbar'

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme ? savedTheme === 'dark' : prefersDark);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark' || prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <main className={`${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}
    w-full min-h-screen transition-colors`}
    >
      <button onClick={toggleDarkMode}
        className="absolute right-4 hidden z-0 p-2 m-4 bg-primary-light dark:bg-primary-dark text-white rounded">
        Toggle Dark Mode
      </button>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}
