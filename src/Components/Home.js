import Navbar from "./Navbar";
import './Home.css'
import photo1 from '../assets/Photo1.png';

function Home() {
    const name = "https://www.bing.com/images/search?view=detailV2&ccid=UrMqomBk&id=33E5866B0F62938708149B99FFC9312254EE72B4&thid=OIP.UrMqomBkTzjLqiQaDDNedAHaEK&mediaurl=https%3a%2f%2fprofluence.com%2fwp-content%2fuploads%2f2023%2f11%2fimg-sports-athletes.jpg&exph=1080&expw=1920&q=img&FORM=IRPRST&ck=C61C5334C97D7C5235ECE6F80BDBD447&selectedIndex=2&itb=0";

    return (
        <>
            <Navbar />
            <div className="OuterDiv">
            <img src = {name}/>

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