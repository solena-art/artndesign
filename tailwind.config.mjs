/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8A00',    // 주황색
        secondary: '#FFC000',  // 노란색
        dark: '#000000',       // 검정색
        light: '#F5F5F5',      // 밝은 회색
        text: '#333333'        // 텍스트 색상
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        heading: ['Pretendard', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
} 