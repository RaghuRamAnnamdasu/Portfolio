import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useState } from 'react';
import "./navBar.css";

export function Navbar({aboutInView, resumeInView, contactInView, projectsInView}) {

  const [displayNavLinks, setNavLinksDisplay] = useState(false);

  const showNavLinks = () => {
    setNavLinksDisplay(!displayNavLinks);
  };

  return (
    <div className="navBarContainer">
        <div className='name'>Raghu Ram Annamdasu</div>
        <div className="leftNavSection">
            <div className={displayNavLinks ? "displayNavLinks" : "leftNavLinks"}>
              <a href="#about" className={aboutInView ? "active" : ""}><span>About</span></a>
              <a href="#resume" className={resumeInView ? "active": ""}><span>Resume</span></a>
              <a href="#projects" className={projectsInView ? "active" :""}><span>Projects</span></a>
              <a href="#contact" className={contactInView ? "active" : ""}><span>Contact</span></a>
            </div>
            <div className="navBarIcon" onClick={showNavLinks}>
              <ViewHeadlineIcon />
            </div>
        </div>
    </div>
  );
}