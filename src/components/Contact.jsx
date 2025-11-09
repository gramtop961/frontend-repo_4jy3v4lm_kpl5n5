import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been captured locally in this demo.');
  };

  return (
    <section id="contact" className="container mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind or just want to say hi? Let’s build something great.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="mailto:asip@example.com" className="inline-flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border p-6 bg-card">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" required className="h-11 rounded-md border bg-background px-3" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" name="email" required className="h-11 rounded-md border bg-background px-3" placeholder="you@mail.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="4" required className="rounded-md border bg-background px-3 py-2" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="h-11 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
              Send Message
            </button>
            {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
