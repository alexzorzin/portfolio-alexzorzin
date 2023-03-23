import '@/styles/app.css';
import React, { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <Component {...pageProps} scrollY={scrollY} />;
}
