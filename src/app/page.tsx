'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Terminal,
  Database,
  Brain,
  TrendingUp,
  ChevronDown,
  ExternalLink,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Target,
  Award,
  Zap,
  Layers,
  Sparkles,
  FileText,
  Moon,
  Sun,
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experienceData = [
    {
      company: 'DataGear',
      role: 'Backend Engineer (AML Systems)',
      period: 'Oct 2023 -- Present',
      location: 'Egypt',
      type: 'Fintech & Regtech',
      icon: <TrendingUp className="h-5 w-5" />,
      achievements: [
        'Developed backend modules for large-scale Anti-Money Laundering (AML) and regulatory compliance platforms',
        'Built RESTful APIs supporting filtering, sorting, pagination, and multi-database integrations',
        'Implemented AML components including KYC, FATCA, GOAML, DGAML, and fraud analytics',
        'Delivered automated PDF/CSV reporting engines and real-time WebSocket services',
      ],
    },
    {
      company: 'Turing Enterprise Inc',
      role: 'Java Software Engineer — RLHF System',
      period: 'Sep 2024 -- Jun 2025',
      location: 'Remote',
      type: 'AGI Research',
      icon: <Brain className="h-5 w-5" />,
      achievements: [
        'Core engineer on Turing\'s primary data labeling and RLHF platform',
        'Maintained and enhanced backend services to improve scalability and throughput',
        'Delivered architectural improvements supporting high concurrency and data pipelines',
      ],
    },
    {
      company: 'Turing Enterprise Inc',
      role: 'Senior Software Research Analyst',
      period: 'Jun 2024 -- Nov 2025',
      location: 'Remote',
      type: 'AGI Research',
      icon: <Zap className="h-5 w-5" />,
      achievements: [
        'Conducted AI/ML research focused on advanced mathematics and quantitative reasoning',
        'Performed statistical analysis including regression, hypothesis testing, and time-series',
        'Evaluated AI-generated outputs for correctness, depth, and reasoning quality',
        'Reviewed academic research and curated high-quality datasets to improve LLM performance',
      ],
    },
    {
      company: 'Turing Enterprise Inc',
      role: 'Pod Lead — Research Engineering',
      period: 'Jan 2025 -- Mar 2025',
      location: 'Remote',
      type: 'Leadership',
      icon: <Award className="h-5 w-5" />,
      achievements: [
        'Led research pod evaluating mathematical and AI/LLM outputs across all academic levels',
        'Owned task planning, quality standards, and final delivery with mathematical rigor',
        'Performed formal reasoning and proof verification using Lean theorem prover',
        'Mentored researchers on formal proof construction and validation',
      ],
    },
    {
      company: 'Scale AI',
      role: 'LLM Engineer',
      period: 'Sep 2023 -- Dec 2023',
      location: 'San Francisco, CA',
      type: 'AI Evaluation',
      icon: <Sparkles className="h-5 w-5" />,
      achievements: [
        'Evaluated large language models across technical and mathematical domains',
        'Analyzed reasoning quality, robustness, and task alignment',
        'Designed evaluation criteria and identified systematic model failure patterns',
      ],
    },
    {
      company: 'Independent',
      role: 'Freelance — Systematic Trading Platform',
      period: 'Oct 2025',
      location: 'Remote',
      type: 'Fintech',
      icon: <Target className="h-5 w-5" />,
      achievements: [
        'Built a real-time market analytics and systematic trading platform',
        'Designed ClickHouse schemas and high-throughput streaming pipelines',
        'Implemented Monte Carlo simulations, VaR, drawdown, and portfolio risk metrics',
      ],
    },
  ];

  const projectsData = [
    {
      title: 'E-Commerce Backend System',
      description: 'Full-featured e-commerce backend with authentication, PostgreSQL, and CI/CD',
      technologies: ['Spring Boot', 'JWT/OAuth2', 'PostgreSQL', 'CI/CD'],
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: 'Real-Time Data Processing',
      description: 'Microservices architecture with streaming pipelines',
      technologies: ['Spring Boot', 'Kafka', 'ClickHouse'],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'AI-Powered Traffic Control',
      description: 'Real-time congestion prediction and adaptive signal optimization',
      technologies: ['Python', 'Machine Learning', 'Real-time Analytics'],
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: 'Cambridge Dataset Analysis',
      description: 'Exploratory data analysis, clustering, and model optimization',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  const skillsCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'Core Java', 'OOP'],
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      category: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Microservices', 'REST APIs', 'Clean Architecture', 'Virtual Threads', 'JVM Internals'],
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      category: 'Databases & Streaming',
      skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'ClickHouse', 'Kafka', 'WebSockets'],
      icon: <Database className="h-5 w-5" />,
    },
    {
      category: 'Testing & DevOps',
      skills: ['JUnit', 'Mockito', 'SpringBootTest', 'Docker', 'CI/CD', 'Git', 'Maven', 'Gradle'],
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      category: 'Python & Data',
      skills: ['Flask', 'Django', 'Pandas', 'NumPy', 'Scientific Computing', 'Reporting Systems'],
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      category: 'AI & Research',
      skills: ['LLM Evaluation', 'Model Reasoning', 'Dataset Curation', 'Benchmark Design', 'Formal Reasoning', 'Lean Theorem Prover'],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      category: 'Mathematics',
      skills: ['Probability', 'Statistics', 'Regression', 'Hypothesis Testing', 'Time Series Analysis', 'Proof Verification'],
      icon: <Sparkles className="h-5 w-5" />,
    },
  ];

  const educationData = [
    {
      degree: 'Bachelor\'s in Pure Mathematics and Computer Science',
      institution: 'Al-Azhar University',
      location: 'Cairo, Egypt',
      grade: 'Very Good',
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Animated Background Elements */}
      <div className="animated-background" />
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="glow-effect" />

      <div className="relative min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              MN
            </motion.div>
            <div className="hidden md:flex items-center space-x-1">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mr-2"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              {['home', 'about', 'experience', 'skills', 'projects', 'education'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all ${
                    activeSection === item
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            style={{ opacity, scale }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Badge variant="outline" className="text-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Available for opportunities
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Mohammed{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Nasser
                  </span>
                  {' '}
                  Ibrahim
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
              >
                Backend Engineer specializing in Fintech & Regtech systems at DataGear, and AGI Research
                at Turing. Expert in high-performance distributed systems, AI/LLM evaluation, and
                mathematical reasoning with formal proof verification.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('experience')}
                  className="group"
                >
                  View Experience
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Tanta, Egypt
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (+20) 01285575364
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-72 h-72 sm:w-96 sm:h-96"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
                  <Avatar className="w-full h-full border-4 border-background shadow-2xl">
                    <AvatarImage src="/mohammed-nasser.jpg" alt="Mohammed Nasser" />
                    <AvatarFallback>MN</AvatarFallback>
                  </Avatar>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-background border shadow-lg rounded-lg p-3"
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-background border shadow-lg rounded-lg p-3"
                >
                  <Code2 className="h-5 w-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground"
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Target className="w-3 h-3 mr-1" />
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Summary</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 card-glow">
              <CardContent className="pt-6 space-y-4 text-lg">
                <p>
                  <span className="font-semibold text-primary">Backend Engineer</span> with strong expertise
                  in Java and Python, specializing in high-performance backend systems, distributed
                  architectures, and production-grade REST APIs. Proven experience in{' '}
                  <span className="font-semibold text-primary">AI/LLM research engineering</span>, focusing
                  on model reasoning quality, mathematical correctness, and robustness.
                </p>
                <Separator />
                <p>
                  Currently contributing to{' '}
                  <span className="font-semibold text-primary">DataGear</span> on Anti-Money Laundering
                  and regulatory compliance platforms (Fintech & Regtech), while previously working on AGI
                  research and RLHF systems at{' '}
                  <span className="font-semibold text-primary">Turing Enterprise Inc</span>. Strong
                  foundation in applied mathematics, statistics, and formal reasoning, with hands-on
                  experience in Lean theorem proving and research-grade evaluation pipelines.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="w-3 h-3 mr-1" />
              Professional Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground text-lg">
              Building impact in Fintech, Regtech, and AGI Research
            </p>
          </motion.div>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary card-glow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl mb-2">{exp.role}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-foreground">{exp.company}</span>
                            <span className="mx-2">•</span>
                            {exp.location}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Code2 className="w-3 h-3 mr-1" />
              Technical Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8 h-auto">
              {skillsCategories.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category} className="text-xs sm:text-sm">
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillsCategories.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="card-glow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2">
                        <span className="p-2 bg-primary/10 rounded-lg">{category.icon}</span>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Layers className="w-3 h-3 mr-1" />
              Featured Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Selected Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer card-glow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {project.icon}
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="mt-4 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Education
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Academic Background</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {educationData.map((edu, index) => (
              <Card key={index} className="border-2 card-glow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <Badge variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          {edu.location}
                        </Badge>
                        <Badge variant="secondary" className="text-primary">
                          <Award className="w-3 h-3 mr-1" />
                          Grade: {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Mail className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 card-glow">
              <CardContent className="pt-6 space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-auto group"
                    asChild
                  >
                    <a href="mailto:wwwmohamednasser620@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full md:w-auto group"
                    asChild
                  >
                    <a
                      href="https://linkedin.com/in/mohammed-nasser-mohamed-nasser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <Separator />

                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    wwwmohamednasser620@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    (+20) 01285575364
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Tanta, Egypt
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mobile Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <Button
          size="icon"
          className="rounded-full shadow-lg bg-background/80 backdrop-blur-lg"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohammed Nasser Ibrahim. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/mohammed-nasser-mohamed-nasser"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:wwwmohamednasser620@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </footer>
      </div>
    </>
  );
}
