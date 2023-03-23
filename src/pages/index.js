import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Loader from '@/components/Loader';
import Presentation from '@/components/Presentation';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import LanguageSelector from '@/components/LangSelector/LangSelector';
import UseContextProvider from '@/components/context/Context';

export default function Home() {
  const { asPath } = useRouter();


  useEffect(() => {
    console.error = () => { }; console.warn = () => { }; setTimeout(() => { console.clear(); }, 700);
    if (typeof window !== "undefined" && asPath == '/') {
      const body = document.getElementsByTagName('body')[0];
      body.style.background = "linear-gradient(to bottom, rgb(32, 32, 32), rgb(32, 32, 32))";

      window.addEventListener('load', () => {
        body.style.background = "linear-gradient(to bottom, rgb(32, 32, 32), rgb(32, 32, 32))";
      });
    }
  }, []);

  return (
    <>

      <Head>
        <title>Portfolio - Alex Zorzin</title>
        <meta charset="utf-8" />
        <meta name="description" content="Hello! I'm Alex Zorzin, a Full-Stack Web Developer from Buenos Aires, argentina. Welcome to my portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#222" />
        <meta name="keywords" content="Alex Zorzin Portfolio Full-Stack Front-End Back-End Web Developer React JS JavaScript Next NodeJS CSS HTML Projects Skills"/>
        <meta name="author" content="alexzorzin.dev@gmail.com"/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />
        <link rel="canonical" href=""/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Loader />
      <canvas className="orb-canvas"></canvas>
      
      
      <UseContextProvider>
      <LanguageSelector/>
      <NavBar />
      <Presentation />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      </UseContextProvider>
      <script type="module" src="./js/Bg-gradient.js"></script>
    </>
  )
}
