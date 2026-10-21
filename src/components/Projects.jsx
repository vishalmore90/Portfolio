import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Github, ExternalLink, Bot, Workflow, Activity, ShieldCheck } from 'lucide-react'
import { LampContainer } from './ui/lamp'
import { useState } from 'react'


export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const projects = [
    {
      title: 'DevOps-Kubernetes-AI-Agent',
      description: 'AI-powered SRE platform that auto-investigates K8s cluster failures, correlates logs & events, and delivers LLM-based root cause fixes with confidence scoring.',
      tech: ['Python', 'FastAPI', 'React', 'Docker Compose', 'Kubernetes'],
      github: 'https://github.com/vishalmore90/DevOps-Kubernetes-AI-Agent',
      demo: 'https://github.com/vishalmore90/DevOps-Kubernetes-AI-Agent#readme',
      icon: Bot,
      color: 'from-blue-950 to-indigo-900'
    },
    {
      title: 'AI-Kubernetes-Upgrader',
      description: 'Evidence-based K8s upgrade risk assessment engine. Runs 17-step analysis and generates a Readiness Score (0–100) with APPROVED / CONDITIONAL / NOT RECOMMENDED verdict.',
      tech: ['Python', 'Flask', 'kubectl', 'pytest', 'Kubernetes'],
      github: 'https://github.com/vishalmore90/AI-Kubernetes-Upgrader',
      demo: 'https://github.com/vishalmore90/AI-Kubernetes-Upgrader#readme',
      icon: Workflow,
      color: 'from-slate-900 to-cyan-950'
    },
    {
      title: 'Statusping',
      description: 'High-performance, open-source synthetic uptime monitoring and public status page platform. Self-host with Docker Compose or deploy across modern cloud infrastructure.',
      tech: ['Go', 'Docker Compose', 'Prometheus', 'DevOps'],
      github: 'https://github.com/vishalmore90/statusping',
      demo: 'https://github.com/vishalmore90/statusping#readme',
      icon: Activity,
      color: 'from-teal-950 to-slate-900'
    },
    {
      title: 'EnvGuard',
      description: 'A powerful CLI tool and GitHub Action to scan source code for environment variable usage, enforce type-safe schemas, and detect leaked secrets.',
      tech: ['Python', 'CLI', 'GitHub Actions', 'Security'],
      github: 'https://github.com/vishalmore90/EnvGuard',
      demo: 'https://github.com/vishalmore90/EnvGuard#readme',
      icon: ShieldCheck,
      color: 'from-stone-900 to-slate-800'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="relative py-12 px-4 overflow-hidden">
      {/* Lamp effect for dark mode */}
      <div className="absolute top-0 left-0 right-0 h-[200px] hidden dark:block pointer-events-none">
        <LampContainer className="opacity-50 absolute inset-0">
          <div></div>
        </LampContainer>
      </div>

      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Production-grade systems and tools focused on Kubernetes reliability, diagnostics, and infrastructure automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative group h-full transition-all duration-300 ${
                  hoveredCard !== null && hoveredCard !== index ? 'blur-[2px] scale-[0.98] opacity-60' : ''
                }`}>
                  <div className={`relative h-full bg-gradient-to-br ${project.color} rounded-xl p-6 shadow-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl`}>
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed min-h-[80px]">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            )
          })}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-gray-800 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            asChild
          >
            <a href="https://github.com/vishalmore90" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
