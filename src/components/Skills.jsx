import React from 'react';
import { Database, Server, Wrench, Boxes, Code } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center justify-center px-3 py-1 rounded-md border bg-muted/40 text-sm">
    {children}
  </span>
);

const Section = ({ icon: Icon, title, items }) => (
  <div className="p-5 rounded-xl border bg-card">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-5 w-5 text-primary" />
      <h3 className="font-medium">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <Badge key={i}>{i}</Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const data = {
    languages: ["JavaScript", "PHP", "TypeScript", "HTML", "CSS", "SQL"],
    frontend: ["Vue.js", "React", "Alpine.js", "jQuery", "Tailwind CSS", "Bootstrap", "SASS"],
    backend: ["Laravel", "CodeIgniter", "Node.js", "Express"],
    databases: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    devops: ["Docker", "Git", "GitHub Actions"],
    tools: ["VS Code", "Postman", "Composer", "NPM"],
  };

  return (
    <section id="skills" className="container mx-auto px-6 md:px-10 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills & Technologies</h2>
      <p className="mt-3 text-muted-foreground">A toolbox I use to build reliable, scalable products.</p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Section icon={Code} title="Languages" items={data.languages} />
        <Section icon={Boxes} title="Frontend" items={data.frontend} />
        <Section icon={Server} title="Backend" items={data.backend} />
        <Section icon={Database} title="Databases" items={data.databases} />
        <Section icon={Wrench} title="DevOps & Tools" items={[...data.devops, ...data.tools]} />
      </div>
    </section>
  );
};

export default Skills;
