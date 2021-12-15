import React from "react";
import '../../stylesheets/root.scss';

class About extends React.Component {

  render(){
    return(
      <div className="header-body">
        <div className="about-title">
          <h1>About Us</h1>
        </div>
        
        <div className="about-body-1">
          <ul>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Non diam phasellus vestibulum lorem sed risus. Laoreet sit amet cursus sit. At tempor commodo ullamcorper a. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Morbi tristique senectus et netus et malesuada. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Pretium aenean pharetra magna ac placerat. Eu sem integer vitae justo eget. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Malesuada pellentesque elit eget gravida cum. Nec dui nunc mattis enim. Tincidunt id aliquet risus feugiat. In hac habitasse platea dictumst. Mauris commodo quis imperdiet massa tincidunt nunc. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Sem viverra aliquet eget sit amet.</ul>
        </div>
        
        <div className="group-social">
          
            <div className="personal-social">
              <h2>Matt Pettenato</h2>
              <div className="profile-pic">
                <img src="https://cdn.frankerfacez.com/emoticon/228449/4" alt="prof-pic" />
              </div>
              <div className="social-pic">
                <img src="frontend/src/imgs/LI-In-Bug.png" alt="" />
              </div>
            </div>
            <div className="personal-social">
              <h2>Matt Pettenato</h2>
              <div className="profile-pic">
                <img src="https://cdn.frankerfacez.com/emoticon/228449/4" alt="prof-pic" />
              </div>
            </div>
            <div className="personal-social">
              <h2>Matt Pettenato</h2>
              <div className="profile-pic">
                <img src="https://cdn.frankerfacez.com/emoticon/228449/4" alt="prof-pic" />
                <img src="" alt="" />
              </div>
            </div>
            <div className="personal-social">
              <h2>Matt Pettenato</h2>
              <div className="profile-pic">
                <img src="https://cdn.frankerfacez.com/emoticon/228449/4" alt="prof-pic" />
              </div>
            </div>
          
        </div>
      </div>
    )
  }
}

export default About;