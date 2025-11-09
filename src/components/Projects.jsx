import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Scalable SaaS Boilerplate',
    desc: 'A production-grade starter with auth, APIs, and CI/CD.',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Realtime Chat App',
    desc: 'Socket-powered chat with rooms, presence, and themes.',
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Headless E‑commerce',
    desc: 'Composable storefront with React, Node and MongoDB.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Open API Explorer',
    desc: 'Minimal tool to browse and test APIs quickly.',
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

const ProjectCard = ({ p }) => (
  <div className="group rounded-xl border bg-card overflow-hidden flex flex-col">
    <div className="relative overflow-hidden">
      <img src={p.img} alt={p.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
      <div className="mt-4 flex items-center gap-3">
        <a href={p.github} className="inline-flex items-center gap-2 text-sm hover:underline" target="_blank" rel="noreferrer">
          <Github className="h-4 w-4" /> Code
        </a>
        <a href={p.demo} className="inline-flex items-center gap-2 text-sm hover:underline" target="_blank" rel="noreferrer">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 md:px-10 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-3 text-muted-foreground">A selection of work and playground builds.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
