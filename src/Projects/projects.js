import "./projects.css";

export function Projects({projectsRef}) {

    const projectData = [
        {
            projectImage : "./Images/carRentals.png",
            projectTitle : "Car Rentals",
            projectDescription : "A2Z Cars is a car rental application where people can check the availability of cars in their desired time slots and location to book them. Also can view booked history through this application.",
            projectLink : "https://mellifluous-dieffenbachia-fe1424.netlify.app/"
        },
        {
            projectImage : "./Images/capstoneImage.png",
            projectTitle : "Student Dashboard",
            projectDescription : "Learn Infinity is a student dashboard application where every student can attend the classes, avail courses and monitor his/her taks and courses status.",
            projectLink : "https://frabjous-cheesecake-7e93d1.netlify.app/"
        },
        {
            projectImage : "https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/05/SO_Teams.png",
            projectTitle : "Stack Overflow Clone",
            projectDescription : "It is a question and answer website for professional and enthusiast programmers. It features questions and answers on a wide range of topics in computer programming and the website serves as a platform for users to ask and answer questions.",
            projectLink : "https://frabjous-maamoul-63a380.netlify.app/"
        }
    ];

    return (
        <section id="projects" ref={projectsRef} className="projectsContainer">
            <h2>Projects</h2>
            <div className="projectWrapper">
                {projectData.map((project)=>{
                    return <ProjectCard projectImage={project.projectImage} projectTitle = {project.projectTitle} projectDescription = {project.projectDescription} projectLink = {project.projectLink} />
                })}
            </div>
        </section>
    );
}


export function ProjectCard({projectImage, projectTitle, projectDescription, projectLink}){
    return(
        <div className="projectCard">
            <a href = {projectLink} target = "_blank">
                <div className = "projectImage">
                    <img src={projectImage} title={projectTitle}/>
                </div>
                <div className="projectDescription">
                    <h3>{projectTitle}</h3>
                    {projectDescription}
                </div>
            </a>
        </div>
    );
}
