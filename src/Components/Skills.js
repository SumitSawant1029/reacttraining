
import './Skills.css';
import react from '../assets/React.png';
import game from '../assets/Photo.png';
import database from '../assets/Database.png';
import python from '../assets/Python.png';

function Skills() {
    const skills = [
        { skill: "Software Developer", img: react, projectMade: "Portfolio Website", Description: "Lorem ipsum..." },
        { skill: "React Developer", img: react, projectMade: "E-commerce App", Description: "" },
        { skill: "Node.js Developer", img: database, projectMade: "REST API Service", Description: "" },
        { skill: "Python Developer", img: python, projectMade: "Data Analysis Tool", Description: "" },
        { skill: "Database Designer", img: database, projectMade: "Inventory Management System", Description: "" },
        { skill: "Game Developer", img: game, projectMade: "2D Platformer Game", Description: "" }
    ];

    return (
        <>
            <div id="skills" className="skills">
                <div className="innerDivSkills">
                    {skills.map((a, index) => (
                        <div key={index} className={`skill-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                            {index % 2 === 0 ? (
                                <>
                                    <img src={a.img} alt={a.skill} />
                                    <div>
                                        <a>{a.skill}</a>
                                        <p>{a.projectMade}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <a>{a.skill}</a>
                                        <p>{a.projectMade}</p>
                                    </div>
                                    <img src={a.img} alt={a.skill} />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            
        </>
    );
}

export default Skills;
