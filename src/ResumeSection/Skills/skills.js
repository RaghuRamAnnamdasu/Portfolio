import { SKILLS } from "./constants";
import "./skills.css";

export function Skills({skillsRef}) {
    return (
        <section ref={skillsRef} id="skills" className="skillsContainer">
            <h2>Skills</h2>
            <div className="imagesContainer">
                {
                    SKILLS.map((skill, index) => {
                        return (
                            <div className="imageWrapper" key={index}>
                                <img src={skill.imageURL} alt={skill.title} />
                                <div>{skill.title}</div>
                            </div> 
                        );
                    })
                }
            </div>
        </section>
    );
}