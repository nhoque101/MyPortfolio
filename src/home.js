import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product catalog, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates using Socket.io. Features include task assignment, progress tracking, and team chat.",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Created a responsive weather dashboard that displays current weather and forecasts using OpenWeatherMap API. Includes location search and unit conversion.",
      tags: ["React", "API Integration", "Chart.js"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Python",
    "SQL", "MongoDB", "Git", "AWS",
    "TypeScript", "Docker", "REST APIs", "Testing"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl justify-center mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
          <p className="text-xl text-gray-600 mb-6">Full Stack Software Developer</p>
          <p className="text-gray-600 mb-8">
            Passionate developer with expertise in building modern web applications. 
            Focused on creating efficient, scalable, and user-friendly solutions.
          </p>
          <div className="flex justify-center  space-x-4">
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="mailto:john@example.com" className="flex items-center text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="flex justify-center  flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a 
            href="mailto:john@example.com"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;