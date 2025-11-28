import Navbar from "./Navbar";
import './Contact.css';
import contact from '../assets/contact.png';
function Contact() {
    return (
        <>
            
            <div id="contact" className="outercontactdiv">
                <div>
                    <img id ="ContactImage" src={contact}></img>
                </div>

                <div className="child" >
                    <a id="reachout">Reach Out!</a>
                    <p> I usually respond within an hour, but developers do sleep <br />two to three hours a night, so it
                        might
                        take a bit longer.<br />Thank you and I am Looking to Hear from you</p>
                    <form >
                        <a >Name</a><br />
                        <input  type="text" ></input>
                        <a >Email</a><br />
                        <input  type="email" ></input>
                        <br />
                        <a className="ContactUsForm">Message</a><br />
                        <textarea className="textboxContact" type="textbox" ></textarea>
                        <br /><br />
                        <button className="button" > Send Message</button>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Contact;

