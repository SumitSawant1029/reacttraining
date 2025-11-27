import Navbar from "./Navbar";
import './Home.css'
import photo1 from '../assets/Photo1.png';

function Home() {
  

    return (
        <>
            <Navbar />
            <div className="OuterDiv">


                <div>
                    <div>
                        
                        <a style={{ fontSize: '4.2vh', fontFamily: "'Motorola ScreenType', sans-serif" , color: '#423b3bff' }}>Hello,</a><br></br>
                        <a style={{ fontSize: '8.2vh', fontWeight: '800', fontFamily: "'Motorola ScreenType', sans-serif", color: '#423b3bff' }}>I'm Sumit Sawant</a><br />
                        <a style={{ fontSize: '8.2vh', fontFamily: "'Motorola ScreenType', sans-serif", color: '#F58486' }}>Software Developer</a><br />
                        <a style={{ fontSize: '4.2vh', fontFamily: "'Motorola ScreenType', sans-serif", color: '#423b3bff' }}>From India</a><br />
                        <button style={{ width: '150px', height: '30px', backgroundColor: '#FF8882', border: '0px', color: 'whitesmoke', borderRadius: '5px',fontFamily: "'Motorola ScreenType', sans-serif",fontSize:"1.2rem" }} >Hire Me</button><br />
                    </div>
                </div>
                <div>
                    <img src={photo1} style={{ width: '80%', zIndex: '1' }} />
                    <div className="portfolio"><a>Portfolio</a></div>
                </div>

            </div>
        </>
    );
}

export default Home;