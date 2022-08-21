import { useInView } from 'react-intersection-observer';
import { AboutSection } from './AboutSection/aboutSection';
import { Contact } from './Contact/contact';
import { Navbar } from './Navbar/navBar';
import { ResumeSection } from './ResumeSection/resumeSection';
import { Projects } from './Projects/projects';

import "./App.css";

function App() {
  // const {ref: homeRef, inView: homeInView} = useInView({threshold : 0.5});
  const {ref: aboutRef, inView: aboutInView} = useInView({threshold : 0.5});
  const {ref: resumeRef, inView: resumeInView} = useInView({threshold : 0.3});
  const {ref: projectsRef, inView: projectsInView} = useInView({threshold : 0.5});
  const {ref: contactRef, inView: contactInView} = useInView({threshold : 0.5});
  return (
    <div className="App">
      <Navbar aboutInView={aboutInView} resumeInView={resumeInView} contactInView={contactInView} projectsInView={projectsInView}/>
      <div className='mainContent'>
        <AboutSection aboutRef={aboutRef}/>
        <ResumeSection resumeRef={resumeRef}/>
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef}/>
      </div>
    </div>
  );
}

export default App;
