// pages/_app.tsx
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '../../public/css/globals.css';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { NavBar } from '../components/Navbar/navbar'
import { FloatingNavbar } from '@/components/Navbar/floatingNavBar';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <main className={`${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}
    relative w-full min-h-screen transition-colors overflow-x-hidden`}
    >
      <button onClick={toggleDarkMode}
        className="fixed flex justify-center items-center  bottom-4 right-4 p-2 w-12 h-12 bg-nav-light  dark:bg-nav-dark dark:text-white text-black rounded-full">
        {
          isDarkMode ? (<MdOutlineLightMode className='h-8 w-8' />) : (<MdDarkMode className='h-8 w-8' />)
        }

      </button>
      <NavBar />
      <FloatingNavbar />
      <Component {...pageProps} />
    </main>
  );
}
