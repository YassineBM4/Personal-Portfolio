
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful user interfaces that provide exceptional user experiences.'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimizing applications for speed and performance across all devices.'
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'Bringing enthusiasm and dedication to every project I work on.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a mobile developer creating digital solutions 
            that make a difference. My journey started with curiosity and has evolved into a 
            passion dedicated to building exceptional app experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              alt="Developer working on code in modern office setup"
             src="Image/aboutMe.jpg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">My Story</h3>
            <p className="text-muted-foreground">
              Started my journey as a student in a university of IT, driven by curiosity and a love for 
              problem-solving. Over the years, I've had the privilege of working with amazing 
              teams, building everything from scratch to real web and mobile applications.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying ahead of the curve in this ever-evolving field.
            </p>
            <div className="flex flex-wrap gap-2">
              {['NestJS', 'Node.js', 'TypeScript', 'Flutter', 'Kotlin', 'Git'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow glass-effect border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
