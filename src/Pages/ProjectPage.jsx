import React from 'react';
import SlimemC_logo from '../Assets/Img/Kunden/SlimeMC_logo.png';
import Blackout_logo from '../Assets/Img/Kunden/Blackout_logo.png';
import niftyNaftyImage from '../Assets/Img/framermotion.png';

const ProjectCard = () => {
  // Logo-Komponente (Platzhalter SVG)
  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
      <rect width="40" height="40" rx="8" fill="#4F46E5" />
      <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // Zentrale Definition von Technologien und ihren Farben
  const techColors = {
    "NUXT": "bg-emerald-600 border-emerald-500 shadow-emerald-500/50",
    "VUEJS": "bg-green-600 border-green-500 shadow-green-500/50",
    "TailwindCss": "bg-cyan-700 border-cyan-500 shadow-cyan-500/50",
    "GIT": "bg-orange-700 border-orange-500 shadow-orange-500/50",
    "ReactJS": "bg-blue-600 border-blue-500 shadow-blue-500/50",
    "ReactTS": "bg-blue-600 border-blue-500 shadow-blue-500/50",
    "HTML": "bg-orange-600 border-orange-500 shadow-orange-500/50",
    "CSS": "bg-purple-600 border-purple-500 shadow-purple-500/50",
    "JavaScript": "bg-yellow-500 border-yellow-500 shadow-yellow-500/50",
    "TypeScript": "bg-blue-500 border-blue-500 shadow-blue-500/50",
    "NodeJS": "bg-green-700 border-green-500 shadow-green-500/50",
    "PHP": "bg-indigo-600 border-indigo-500 shadow-indigo-500/50",
    "Python": "bg-yellow-600 border-yellow-500 shadow-yellow-500/50",
    "Java": "bg-red-700 border-red-500 shadow-red-500/50"
  };

  // Hilfsfunktion, um die richtige Farbe für eine Technologie zu erhalten
  const getTechColor = (techName) => {
    return techColors[techName] || "bg-gray-600"; // Fallback-Farbe, falls nicht definiert
  };

  // Projekte mit Daten aus deinem ursprünglichen Code
  const projects = [
    {
      title: 'SlimeMC',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      imageUrl: SlimemC_logo,
      liveDemoUrl: 'https://slimemc.de',
      role: 'Frontend Developer',
      period: 'June 2022 - Present',
      technologies: ['ReactJS']
    },
    {
      title: 'rfk-prg.de',
      description: 'ReactJS',
      imageUrl: niftyNaftyImage,
      liveDemoUrl: '#',
      role: 'Web Developer',
      period: 'January 2022 - May 2022',
      technologies: ['ReactJS']
    },
    {
      title: 'blackout.rip',
      description: 'Html',
      imageUrl: Blackout_logo,
      liveDemoUrl: 'https://blackout.rip',
      role: 'HTML Developer',
      period: 'March 2022 - May 2022',
      technologies: ['HTML', 'CSS']
    },
    {
      title: 'Your website could be located here',
      description: 'Nothing yet',
      imageUrl: niftyNaftyImage,
      liveDemoUrl: '#',
      role: 'Future Project',
      period: 'Coming soon',
      technologies: []
    },
    {
      title: 'Your website could be located here',
      description: 'Nothing yet',
      imageUrl: niftyNaftyImage,
      liveDemoUrl: '#',
      role: 'Future Project',
      period: 'Coming soon',
      technologies: []
    },
    {
      title: 'Your website could be located here',
      description: 'Nothing yet',
      imageUrl: niftyNaftyImage,
      liveDemoUrl: '#',
      role: 'Future Project',
      period: 'Coming soon',
      technologies: []
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 h-full">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-12 h-12 mr-3 rounded-xl object-cover"
                    />
                  ) : (
                    <Logo />
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <p className="text-gray-400 text-sm">{project.role} • {project.period}</p>
                  </div>
                </div>

                <div className="flex flex-wrap mb-4 gap-2">
                  {project.technologies.map((techName, idx) => (
                    <span
                      key={idx}
                      className={`${getTechColor(techName)} bg-opacity-30 border border-opacity-50 shadow-[0_0_40px_5px] text-white px-3 py-1 rounded-xl text-md font-medium`}
                    >
                      {techName}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mt-4 text-sm">
                  {project.description}
                </p>

                {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
                  <div className="mt-4">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                    >
                      Live Demo →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;