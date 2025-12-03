import './Achievements.css';
import image from '../assets/Learning-cuate.png';

function Achievements() {

    return (
        <>
            <div className='achievementOuterDiv'>

                <div id="achievementsImage">
                    <img src={image} style={{width:'30vw',padding:'45px 15px'}}></img>
                </div>
                <div id="achievements">
                    <h1 className='header'>Achievements</h1>
                    <p>A passionate Information Technology student with a strong foundation in software development, problem-solving, and teamwork. Experienced in hackathons and collaborative projects, with a proven ability to deliver innovative solutions under pressure.</p>
                    <div className="subdiv">

                        <div>
                            <h2 className='header'>Education</h2>
                            <div>
                                <a className='year'>2021-2025</a><br/>
                                <a className='midheader'>Bachelor of Engineering (Information Technology)</a><br/>
                                <a className='description'>Don Bosco Institute Of Technology</a><br/><br/>
                            </div>
                            <div>
                                <a className='year'>2021</a><br/>
                                <a className='midheader'>Higher Secondary Certificate</a><br/>
                                <a className='description'>Sathaye College of Science</a><br/><br/>
                            </div>
                            <div>
                                <a className='year'>2019</a><br/>
                                <a className='midheader'>Secondary School Certificate</a><br/>
                                <a className='description'>St Dominic Savio High School</a><br/><br/>
                            </div>
                        </div>
                        <div>
                            <h2 className='header'>Awards</h2>
                            <div>
                                <a className='year'>2023</a><br/>
                                <a className='midheader'>Winner Of Smart India Hackathon</a><br/>
                                <a className='description'>Worked On Centralized Database for Nasha Mukti Centre Project</a><br/><br/>
                            </div>
                            <div>
                                <a className='year'>2021</a><br/>
                                <a className='midheader'>Participated In Mumbai Hackathon</a><br/>
                                <a className='description'>Sathaye College of Science</a><br/><br/>
                            </div>
                            <div>
                                <a className='year'>2019</a><br/>
                                <a className='midheader'>Secondary School Certificate</a><br/>
                                <a className='description'>St Dominic Savio High School</a><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Achievements;