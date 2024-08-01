import React from 'react';
import './Project.css'
import Travel from '../../assets/Travel.png'
import car from '../../assets/Car-rental.png'
import shoppify from '../../assets/Shoppify.png'
import github from '../../assets/github.png'

const Project = ({ title, image,description, techStack, livePreviewUrl, viewCodeUrl}) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className='tech'>Tech Stack: {techStack}</p>
        <div className="project-actions">
          <a href={livePreviewUrl} className="button" target="_blank" rel="noopener noreferrer">
            Live Preview
          </a>
          <div className='view'>
          <img src={github} alt="icon" />
          <a href={viewCodeUrl} className="button" target="_blank" rel="noopener noreferrer">
            View Code
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Travel_website',
      image: Travel ,
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      techStack: 'HTML, CSS, JS',
      livePreviewUrl: 'https://rough-travel-website.vercel.app/',
      viewCodeUrl: 'https://github.com/RohithChitrada/Rough-Travel-website',
    },
    {
      title: 'Car rental',
      image: car,
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      techStack: 'HTML, CSS, JS, Bootstrap',
      livePreviewUrl: 'https://car-rental-chi-rouge.vercel.app/',
      viewCodeUrl: 'https://github.com/RohithChitrada/car-rental',
    },
    {
      title: 'E-Commerce',
      image: shoppify,
      description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
      techStack: 'React Js, CSS',
      livePreviewUrl: '#',
      viewCodeUrl: 'https://github.com/RohithChitrada/Shoppify',
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;