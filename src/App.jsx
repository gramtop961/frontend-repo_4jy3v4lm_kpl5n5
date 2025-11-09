import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Moon, Sun } from 'lucide-react';

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Asip Hamdi</a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 grid place-items-center rounded-md border">
            <span className="i-lucide-menu" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-6 md:px-10 py-3 flex flex-col gap-2 text-sm">
            <a href="#about" className="py-1">About</a>
            <a href="#skills" className="py-1">Skills</a>
            <a href="#projects" className="py-1">Projects</a>
            <a href="#contact" className="py-1">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    if (typeof window !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 h-11 w-11 rounded-full border bg-background shadow-sm grid place-items-center"
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

const Footer = () => (
  <footer className="border-t">
    <div className="container mx-auto px-6 md:px-10 py-8 text-sm text-muted-foreground flex items-center justify-between flex-col md:flex-row gap-3">
      <p>© 2025 Asip Hamdi — Made with ❤️ by Asip</p>
      <div className="flex items-center gap-4">
        <a href="#home" className="hover:underline">Back to top</a>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    // Smooth scroll for same-page links
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
