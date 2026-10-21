import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { GitPullRequest, Users, Globe, Calendar } from 'lucide-react'
import { LampContainer } from './ui/lamp'
import { useState } from 'react'

export default function WorkExperience() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const experiences = [
    {
      icon: GitPullRequest,
      title: 'Open-Source Contributor',
      company: 'CNCF & Open-Source Ecosystem',
      period: '2024 - Present',
      description: 'Active contributor to cloud-native and developer tooling projects including KubeEdge, Harbor, Checkstyle, and OWASP.',
      achievements: [
        'Resolved Denial-of-Service (DoS) panic and error propagation vulnerabilities in KubeEdge edgecore edgestream tunnel.',
        'Investigated and patched security, reliability, and code quality issues across cloud-native Go and Java repositories.',
        'Hands-on experience with controller-runtime patterns, admission webhooks, and Kubernetes ecosystem components.'
      ],
      color: 'from-blue-900 to-blue-700'
    },
    {
      icon: Users,
      title: 'Lead Community Organizer',
      company: 'Zeal Cloud & OSS Community',
      period: '2025 - Present',
      description: 'Leading student community initiatives focused on cloud-native technologies, DevOps workflows, and open-source contribution.',
      achievements: [
        'Organized hands-on technical workshops on Docker, Kubernetes, and open-source contribution workflows.',
        'Fostered peer learning groups to help engineering students transition into DevOps and SRE practices.',
        'Mentored members on git workflows and upstream pull request etiquette.'
      ],
      color: 'from-emerald-900 to-emerald-700'
    },
    {
      icon: Globe,
      title: 'Core Member',
      company: 'Zeal Firefox Club (Mozilla)',
      period: '2025 - Present',
      description: 'Advocating open web standards, privacy, and open-source culture across campus through events and hackathons.',
      achievements: [
        'Co-organized open-source contribution sprints and developer enablement sessions on campus.',
        'Conducted interactive discussions on open web standards, Linux, and developer toolchains.',
        'Collaborated with student developers to build community-driven open-source projects.'
      ],
      color: 'from-purple-900 to-purple-700'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="relative py-12 px-4 overflow-hidden">
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
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">Work & Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Practical experience in open-source systems, cloud-native engineering, and technical community leadership.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-300 ${
                  hoveredCard !== null && hoveredCard !== index ? 'blur-[2px] scale-[0.98] opacity-60' : ''
                }`}
              >
                <Card className="h-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-white/5 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300">{experience.company}</CardDescription>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                      {experience.description}
                    </p>
                    <div className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 flex-shrink-0"></div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
