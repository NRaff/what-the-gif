import React from "react";
import '../../stylesheets/root.scss';
import {Link} from 'react-router';

class About extends React.Component {

  render(){
    return(
      <div className="header-body">
        <div className="about-title">
          <h1 className="the-team" id='pagetitle'>THE TEAM</h1>
        </div>

        {/* <div className="about-body-1">
          <p>A digital game inspired by Apples to Apples and Cards Against Humanity. Win by matching your best Gif to a given category!</p>
        </div> */}
        <div className="team-flex">

        
        <div className="group-social">
          
            <div className="personal-social">
              <h2 className='name-team'>Nick Raff</h2>
              <div className="profile-pic">
                <img src="https://i.imgur.com/nm1ozZa.jpg" alt="prof-pic1" />
              </div>
              <div className="social-logo">
                <a className="ln-pic" href="https://www.linkedin.com/in/nickraff/" target="_blank" rel="noreferrer">
                  <img src="https://live.staticflickr.com/65535/51750297305_aa540abf3e_o.png" alt="linkedin" />
                </a>
                <a className="git-pic" href="https://github.com/NRaff" target="_blank" rel="noreferrer">
                  <img src="https://i.imgur.com/2exRxJt.png" alt="githubicon" />
                </a>
              </div>
            </div>

            <div className="personal-social">
              <h2 className='name-team'>Adrian Rothschild</h2>
              <div className="profile-pic">
                <img src="https://i.imgur.com/OKNAR13.jpg" alt="prof-pic2" />
              </div>
              <div className="social-logo">
                <a className="ln-pic" href="https://www.linkedin.com/in/adrian-rothschild/" target="_blank" rel="noreferrer">
                  <img src="https://live.staticflickr.com/65535/51750297305_aa540abf3e_o.png" alt="linkedin" />
                </a>
                <a className="git-pic" href="https://github.com/darothmedia" target="_blank" rel="noreferrer">
                  <img src="https://i.imgur.com/2exRxJt.png" alt="githubicon" />
                </a>
              </div>
            </div>

            <div className="personal-social">
              <h2 className='name-team'>Alex Lolas</h2>
              <div className="profile-pic">
                <img src="https://live.staticflickr.com/65535/51749417371_0ba2444882_o.png" alt="prof-pic3" />
              </div>
              <div className="social-logo">
                <a className="ln-pic" href="https://www.linkedin.com/in/alex-lolas-88b19b228/" target="_blank" rel="noreferrer">
                  <img src="https://live.staticflickr.com/65535/51750297305_aa540abf3e_o.png" alt="linkedin" />
                </a>
                <a className="git-pic" href="https://github.com/alexlolas" target="_blank" rel="noreferrer">
                  <img src="https://i.imgur.com/2exRxJt.png" alt="githubicon" />
                </a>
              </div>
            </div>

            <div className="personal-social">
              <h2 className='name-team'>Matt Pettenato</h2>
              <div className="profile-pic">
                <img src="https://live.staticflickr.com/65535/51750297205_b021e10001_o.png" alt="prof-pic4" />
              </div>
              <div className="social-logo">
                <a className="ln-pic" href="https://www.linkedin.com/in/matt-pettenato-936236123/" target="_blank" rel="noreferrer">
                  <img src="https://live.staticflickr.com/65535/51750297305_aa540abf3e_o.png" alt="linkedin" />
                </a>
                <a className="git-pic" href="https://github.com/mattpettenato" target="_blank" rel="noreferrer">
                  <img src="https://i.imgur.com/2exRxJt.png" alt="githubicon" />
                </a>
              </div>
            </div>
          
        </div>
        </div>
      </div>
    )
  }
}

export default About;

// https://live.staticflickr.com/65535/51750298020_22cf236782_o.png