import "./projects.css";

export function Projects({projectsRef}) {
    return (
        <div id="projects" ref={projectsRef} className="projectsContainer">
            <h2>Projects</h2>
            <div className="projectWrapper">
                <img src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/05/SO_Teams.png" title="Stack Overflow"/>
                <div className="projectDescription">
                    <h3>Stack Overflow Clone</h3>
                    It is a question and answer website for professional and enthusiast programmers.
                    It features questions and answers on a wide range of topics in computer programming and the website serves as a platform for users to ask and answer questions.
                </div>
            </div>
        </div>
    );
}
