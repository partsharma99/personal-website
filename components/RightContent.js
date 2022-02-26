import React from 'react'
import Project from './Project'
import Experience from './Experience'
import './RightContent.css'
import './panel.css'
import wave from '../pics/wave.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

class RightContent extends React.Component {
  render() {
    return (
        <div className="RightContent">
            <div className='About' data-aos='fade-up' data-aos-delay='300'>
                <p className="hello-text">Hey there! I'm <span id="bold-text">Parth</span> <img id="wave" src={wave} alt="Wave Emoji" /></p>
                <p>I'm a <span id="bold-text">third year computer science</span> student at <span id="bold-text">York University</span>, currently searching for <span id="bold-text">Summer co-op</span> opportunities.</p>
            </div>
            <div className="Experience" data-aos='fade-up' data-aos-delay='600'>
                <h2 className="header">EXPERIENCE</h2>
                { <Experience name='Extol infotech' position='Software Developer Intern' date='Summer 2020' desc=''/>
              }
            </div>
            <div className="Projects" data-aos='fade-up' data-aos-delay='900' >
              <h2 className="header" >PROJECTS</h2>
                <Project name="Sheet Music Viewer" language="Java" link="https://github.com/partsharma99/TAB2XML" description="Takes music tablature as input and converts it to readable sheet music and plays the music note by note. Works for multiple instruments."/>
                <Project name="Personal Website" language="React" link="https://github.com/tariqsyed1/v2" description="Built using React to increase online presence and showcase projects."/>
            </div>
            
        </div>
      );
  }
}

export default RightContent;

