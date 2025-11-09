import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </div>

      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur">
            <span>Indonesia 🇮🇩</span>
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Asip Hamdi
          </h1>
          <p className="mt-3 md:mt-5 text-lg md:text-xl text-muted-foreground">
            Full Stack Developer crafting scalable web applications with a minimalist touch.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-border hover:bg-muted transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 hover:bg-muted border border-border transition"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
