import Navbar from "./Navbar";
import './Skills.css';
import react from '../assets/React.png';
import game from '../assets/GameDevelopment.png';
import database from '../assets/Database.png';
import python from '../assets/Python.png';

function Skills() {

    const skills = [
        { skill: "Software Developer", img: react, projectMade: "Portfolio Website" },
        { skill: "React Developer", img: react, projectMade: "E-commerce App" },
        { skill: "Node.js Developer", img: database, projectMade: "REST API Service" },
        { skill: "Python Developer", img: python, projectMade: "Data Analysis Tool" },
        { skill: "Database Designer", img: database, projectMade: "Inventory Management System" },
        { skill: "Game Developer", img:game, projectMade: "2D Platformer Game" }
    ];

    return (
        <>
            <Navbar />
            <div style={{ padding: '10px 10px' }}>
                <div className="innerDivSkills">
                    {skills.slice(0,3).map((a,index)=>(
                        <div id = {index}>
                            <a>{a.skill}</a>
                            <img src={a.img}></img>
                            <p>{a.projectMade}</p>
                        </div>
                    ))}
                   
                </div>
                <div className="innerDivSkills">

                    {skills.slice(3,6).map((a,index)=>(
                        <div id = {index}>
                            <a>{a.skill}</a>
                            <img src={a.img}></img>
                            <p>{a.projectMade}</p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Skills;