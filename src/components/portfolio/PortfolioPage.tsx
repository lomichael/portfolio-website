import React from 'react';
import { Github, ExternalLink, Shield, Database, Search, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const PortfolioPage = () => {
  const projects = [
    {
      title: "Cyber Threat Intelligence Dashboard",
      description: "Real-time monitoring system for APTs, state-sponsored threats, and cyber campaigns. Features advanced visualization of threat actor activities and malware trends.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
      github: "/threat-dashboard",
      demo: "/projects/threat-dashboard",
      icon: Shield,
      features: [
        "APT activity tracking and analysis",
        "Malware family distribution monitoring",
        "Critical infrastructure threat alerts",
        "Real-time cyber campaign visualization"
      ]
    },
    {
      title: "High-Frequency Trading System",
      description: "Low-latency trading platform with real-time market analysis and ML-driven predictions for algorithmic trading strategies.",
      tech: ["Python", "C++", "Redis", "PostgreSQL"],
      github: "/hft-system",
      demo: "/projects/hft-system",
      icon: LineChart,
      features: [
        "Sub-microsecond order execution",
        "Real-time market data processing",
        "ML-based strategy optimization",
        "Advanced risk management"
      ]
    },
    {
      title: "Blockchain Intelligence Platform",
      description: "Cryptocurrency transaction analysis tool for detecting fraudulent activities and tracking illicit financial flows across multiple blockchains.",
      tech: ["Python", "Neo4j", "React", "Web3.js"],
      github: "/blockchain-intel",
      demo: "/projects/blockchain-intel",
      icon: Database,
      features: [
        "Multi-chain transaction tracking",
        "Suspicious wallet clustering",
        "Risk scoring system",
        "Fraud pattern detection"
      ]
    },
    {
      title: "Bug Bounty Framework",
      description: "Automated reconnaissance and vulnerability detection framework for web applications, focusing on critical security flaws.",
      tech: ["Python", "Go", "Docker", "MongoDB"],
      github: "/bug-bounty",
      demo: "/projects/bug-bounty",
      icon: Search,
      features: [
        "Automated recon pipeline",
        "Vulnerability assessment",
        "Custom exploit development",
        "Reporting automation"
      ]
    }
  ];

  const personalInfo = {
    name: "Your Name",
    title: "Security Engineer & Full Stack Developer",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {personalInfo.title}
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-blue-500" />
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={`${personalInfo.github}${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
