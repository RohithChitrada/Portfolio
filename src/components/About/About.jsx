import React from 'react';
import './About.css'; // Import your CSS file
import profile from '../../assets/profile1.jpg';

const About = ({isDarkTheme}) => {
  return (
    <div className={`about-main ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='about-final'>
      <h1>About Me</h1>
      <div className="about-total">
        <div className="about-intro">
          <p>
          I'm Chitrada Sai Rohith, a self-taught web developer with a focus on AI and Machine Learning.
          I'm skilled in Python, Java, HTML, CSS, JavaScript, and Bootstrap. I've developed dynamic frontends rensponsive websites such as a travel website, e-commerce platform, and car rental website.
          My strength lies in writing efficient, reusable code that enhances user experience.
          I hold certifications from AWS and IBM, and my internships in web development and machine learning have sharpened my problem-solving abilities.
          </p>
        </div>
        <img src={profile} alt="Profile" className="about-img" />
      </div>
      </div>
    </div>
  );
};

export default About;
