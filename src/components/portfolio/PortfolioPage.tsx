"use client";

import React from 'react';
import { Github, ExternalLink, Linkedin, Mail } from 'lucide-react';
import Layout from './Layout';

const PortfolioPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["C++"],
      github: "https://github.com/lomichael/",
      demo: "https://project1-demo.vercel.app"
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["Python"],
      github: "https://github.com/lomichael"
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["SQL"],
      github: "https://github.com/lomichael"
    }
  ];

  const blogPosts = [
    {
      title: "Lorem Ipsum",
      date: "2024-01-01",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/blog/lorem-ipsum"
    },
    {
      title: "Lorem Ipsum",
      date: "2025-01-01",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/blog/lorem-ipsum"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm Michael Lo 
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Software Engineer | Data Scientist | Cybersecurity Researcher 
            </p>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Computer scientist interested in all things software, data, and security.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="inline-flex items-center text-gray-600 hover:text-gray-900"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Blog</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  <a href={post.link} className="hover:text-blue-600">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-gray-500">{post.preview}</p>
                <div className="mt-4">
                  <a
                    href={post.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          <div className="mt-12 max-w-lg mx-auto">
            <p className="text-gray-500 text-center">
              I'm always open to discussing new projects, opportunities, and collaborations.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/lomichael"
                className="text-gray-400 hover:text-gray-900"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/-lomichael"
                className="text-gray-400 hover:text-gray-900"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:me@lomichael.org"
                className="text-gray-400 hover:text-gray-900"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
