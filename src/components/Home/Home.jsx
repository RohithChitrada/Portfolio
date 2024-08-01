import React from 'react'
import { Link } from 'react-router-dom';
import '../Home/Home.css'
import hero from '../../assets/hero.svg'
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import leetcode from '../../assets/leetcode.svg'

const Home = ({isDarkTheme}) => {

  return (
    <div className={`Home ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='hero' id='Hero'>
        <div className='info'>
        <h1> Hi,👋<br></br>My Name is<br></br>
        <span>Chitrada Sai Rohith</span><br />
        I am <span className='typed-text'>Front-end Developer</span></h1>
        <ul className='social-links'>
            <li><a href="https://twitter.com/your_twitter_username" target="_"><img src={twitter} alt="Twitter" /></a></li>
            <li><a href="https://www.linkedin.com/in/chitrada-sai-rohith-785547267/" target="_"><img src={linkedin} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/RohithChitrada" target="_"><img src={github} alt="GitHub" /></a></li>
            <li><a href="https://leetcode.com/u/21pa1a6111/" target="_"><img src={leetcode} style={{height:30}} alt="GitHub" /></a></li>
        </ul>
        <div className="hero-action">
            <div className="hero-connect"><Link to='/contact'>Connect with me</Link></div>
            <div className="hero-resume"><a href="/resume.pdf" download="resume.pdf">My resume</a></div>
        </div>
      </div>
      <img className='hero-img' src={hero} alt="" />
    </div>

    </div>
  )
}


export default Home
