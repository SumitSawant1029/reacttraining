import Navbar from "./Navbar";
import './Skills.css';
function Skills() {
    return (
        <>
            <Navbar />
            <div style={{padding:'10px 10px'}}>
                <div className="innerDivSkills">
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                </div>
                <div className="innerDivSkills">

                    <div>
                        4
                    </div>
                    <div>
                        5
                    </div>
                    <div>
                        6
                    </div>
                </div>


            </div>
        </>
    )
}

export default Skills;