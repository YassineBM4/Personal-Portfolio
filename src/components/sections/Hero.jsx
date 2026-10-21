import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AvatarChat } from '@/components/AvatarChat';

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between relative overflow-hidden py-12 lg:py-20">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full floating-animation pointer-events-none"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-primary/30 rounded-full floating-animation pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/25 rounded-full floating-animation pointer-events-none" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Name, Title, Call-to-action text, CV & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-center lg:text-left space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2"
              >
                Yassine Ben Mabrouk
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-muted-foreground font-medium"
              >
                Software Engineering Student
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="py-2"
            >
              <p className="text-lg md:text-xl font-semibold tracking-wide text-foreground/90">
                💬 Ask me anything through <span className="gradient-text">my chatbot</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="Resume/YassineBenMabrouk_CV.pdf" download>
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity shadow-md">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 pt-2"
            >
              <a href="https://github.com/YassineBM4" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/yassine-ben-mabrouk-b7b071220/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:benmabrouk.yassine@esprit.tn">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Avatar Chat Container with Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 w-full"
          >
            <AvatarChat />
          </motion.div>

        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToNext}
        className="mx-auto mt-8 animate-bounce cursor-pointer z-10"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </motion.button>
    </section>
  );
}