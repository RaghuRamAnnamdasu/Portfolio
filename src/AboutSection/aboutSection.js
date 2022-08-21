import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "./aboutSection.css";
// import Particles from 'react-parsticles-js';

export function AboutSection({aboutRef}) {
  return (
    <div ref={aboutRef} id="about" className="aboutSectionContainer">
        {/* <Particles /> */}
        <Container>
        <Grid container direction="row" justifyItems="center" alignItems="center" md={12} gap={0}>
            <Grid item xs={12} md={5}>
                {/* <img src={URL} alt="i am image2fhj" /> */}
                <div className='profileImage'/>
            </Grid>
            <Grid item xs={12} md={7}>
                <div className="aboutRightSection">
                    <h2 className="aboutMe">About Me</h2>
                    <div className="aboutMeDescription">An enthusiastic and high-energy driven professional, targeting assignment in Software Development with an organization of repute. M.Tech (PowerSystems, IIT-Dhanbad) qualified professional offering around 5 years of experience in Electrical design of Switchgear for Industrial plants.</div>
                    <div className="aboutMeInfo">
                        <div className="info">
                            <span className="name">Name:</span>
                            <span>Raghu Ram Annamdasu</span>
                        </div>
                        <div className="info">
                            <span className="email">Email:</span>
                            <span className='emailText'>annamdasuraghuram@gmail.com</span>
                        </div>
                        <div className="info">
                            <span className="phone">Phone:</span>
                            <span>7382481437</span>
                        </div>
                        <div className="info">
                            <span className="country">Country:</span>
                            <span>India</span>
                        </div>
                        <div className="downloadResumeWrapper">
                            {/* <a target="_blank" href="./Resume.pdf">Download this</a> */}
                            <a className="downloadResume"  download="Resume" href="./Resume.pdf">Download Resume</a>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
}