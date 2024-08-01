import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import bootstrap from '../../assets/bootstrap.svg';
import react from '../../assets/react.png';
import vs from '../../assets/vscode.png';
import github from '../../assets/github.png';

import './Skills.css';

const Skills = ({ isDarkTheme }) => {
    return (
        <div className={`skills-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className='skills-hero'>
                <div className='skills-info'>
                    <h1>My Skills</h1>
                    <p>Here are some of the technologies and tools I work with:</p>
                </div>
                <div className='skills-hero-img'>
                    <div className='skills-section'>
                        <h2>Tech Skills</h2>
                        <div className='skills-img'>
                            <img src={html} alt='HTML' />
                            <img src={css} alt='CSS' />
                            <img src={js} alt='JavaScript' />
                            <img src={bootstrap} alt='Bootstrap' style={{ width: 80, height: 70 }} />
                            <img src={react} alt='React' />
                        </div>
                    </div>
                    <div className='skills-section'>
                        <h2>Tools</h2>
                        <div className='tools-img'>
                            <img src={vs} alt='VS Code' />
                            <img src={github} alt='GitHub' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
