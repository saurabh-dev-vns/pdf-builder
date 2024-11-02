//tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007BFF',
          dark: '#2196F3',
        },
        accent: '#FF4081',
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        surface: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
        },
        elevatedSurface: {
          light: '#E0E0E0',
          dark: '#2A2A2A',
        },
        nav:{
          light:"#b9b9b9",
          dark:"#4c4c4c",
        },
        text: {
          primary: {
            light: '#212121',
            dark: '#E0E0E0',
          },
          secondary: {
            light: '#757575',
            dark: '#9E9E9E',
          },
          disabled: {
            light: '#BDBDBD',
            dark: '#616161',
          },
        },
        border: {
          light: '#E0E0E0',
          dark: '#424242',
        },
        divider: {
          light: '#BDBDBD',
          dark: '#616161',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        info: '#2196F3',
        shadow: {
          light: 'rgba(0, 0, 0, 0.1)',
          dark: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
