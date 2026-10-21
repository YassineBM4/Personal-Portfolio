
import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Activities } from '@/components/sections/Activities';
import { Certifications } from '@/components/sections/Certifications';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/toaster';
import { FloatingChatButton } from '@/components/FloatingChatButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <ThemeToggle />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Activities />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Yassine Ben Mabrouk Developer. Built with React
          </p>
        </div>
      </footer>

      <FloatingChatButton />
      <Toaster />
    </div>
  );
}

export default App;
