import Navbar from "./Navbar";
import './Home.css'
import photo from '../assets/Photo.png';

function Home() {
    return (
        <>
            <Navbar />
            <div className="OuterDiv">


                <div>
                    <div>
                        <a style={{ fontSize: 'x-large', fontFamily: "'Motorola ScreenType', sans-serif" }}>Hello,</a><br></br>
                        <a style={{ fontSize: 'xxx-large', fontWeight: '800', fontFamily: "'Motorola ScreenType', sans-serif", color: '#423b3bff' }}>I'm Sumit Sawant</a><br />
                        <a style={{ fontSize: 'xxx-large', fontFamily: "'Motorola ScreenType', sans-serif", color: '#F58486' }}>Software Developer</a><br />
                        <a style={{ fontSize: 'x-large', fontFamily: "'Motorola ScreenType', sans-serif" }}>From India</a><br />
                        <button style={{ width: '150px', height: '30px', backgroundColor: '#FF8882', border: '0px', color: 'whitesmoke', borderRadius: '5px' }} >Hire Me</button><br />
                    </div>
                </div>
                <div>
                    <img src={photo} style={{ width: '80%', zIndex: '1' }} />
                    <div className="portfolio"><a>Portfolio</a></div>
                </div>

            </div>
        </>
    );
}

export default Home;