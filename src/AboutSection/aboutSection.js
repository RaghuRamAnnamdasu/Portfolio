import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "./aboutSection.css";
// import { saveAs } from 'file-saver';
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
                {/* <img className = "profileImage"  src = "./ProfileImage/profileImage.jpg" alt = "i am image"/> */}
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
                            <a className = "downloadResume"  href = "./Resume/Resume.pdf" download = "Raghu Ram Resume">Download Resume</a>
                            {/* <div className = "downloadResume"   onClick = {()=>{saveAs("./Resume/Resume.pdf","Raghu Ram Resume")}}>Download Resume</div> */}
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
        </Container>
    </div>
  );
}