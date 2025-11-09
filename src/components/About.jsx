import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden flex items-center justify-center text-6xl select-none">
            🧑‍💻
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I’m Asip Hamdi, a Full Stack Developer based in Indonesia. I focus on building fast, scalable,
            and maintainable web applications. My approach is pragmatic: ship clean code, measure, iterate,
            and keep the experience delightful and accessible.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I enjoy working across the stack with JavaScript/TypeScript, PHP (Laravel, CodeIgniter), Node.js,
            and modern frontend frameworks like React and Vue. I care deeply about developer experience,
            performance, and readable architecture.
          </p>
          <div className="mt-6 p-4 rounded-lg border bg-muted/30">
            <p className="text-sm">
              <span className="font-medium">Fun fact:</span> I debug with <code className="px-1 py-0.5 rounded bg-muted">console.log()</code> and <code className="px-1 py-0.5 rounded bg-muted">dd()</code> 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
