import React from 'react'
import Typed from 'react-typed'
import logo from '../pics/parth.png'
import './LeftContent.css'
import './panel.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';


class LeftContent extends React.Component {
  constructor(props) {    
    super(props);
    this.state = {
      location: "Toronto, Canada",
      email: "psharm09@my.yorku.ca",
      linkedin: "https://www.linkedin.com/in/tariqs1/",
      name: "'Tariq ^10 Syed'",
    }
  }

  render() {
    return (
        <div className="LeftContent">
          <div className="Logo">
            <img className="Tariq "src={logo} alt="Tariq" />
          </div>
          
          
            <div className = "name">
            <h1 className="name-leftpane">
            <Typed 
            strings={['Parth ^10 Sharma']}
            typeSpeed={80}
            startDelay={100}
            />
            </h1>
            </div>
           
          
          <p id="Subheading">Toronto, Canada | <a href="mailto:psharm09@my.yorku.ca">psharm09@my.yorku.ca</a></p>
          <div id="Icons">
            <a href="https://github.com/partsharma99" className="social"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/parth-sharma999" className="social"><LinkedInIcon /></a>
            <a href="https://docs.google.com/document/d/1SP7fEBk6U8YZgiVDmvPXZwrfvXYfFDRF/edit?usp=sharing" className="social"><DescriptionIcon /></a>
          </div>

        </div>
      );
  }
}

export default LeftContent;