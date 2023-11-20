import "../css/Contact.css"
import Img from "../Images/contact.jpg"
import call from "../Images/icons8-call-48.png"
import email from "../Images/icons8-email-48.png"
import linkdin from "../svg icons/icons8-linkedin-logo.svg"
 import react from "react";
function Contact(){
    return(
        <>
        <div class="Contact">
            
            <h1>
                <a href="Contact">Contact</a>
                
                </h1><br/></div><div class="itsme"><div class="info">
                    <h2>
                    <img src={call} alt="svg"/>+917899094278
                    <br/><br/>
                    <br/>
                    <img src={email} alt="svg"/>krathij98@gmail.com
                    <br/><br/><br/>
                    <img src={linkdin} alt="svg"/>Krathi Jayakumar

                    </h2></div>
                    <div class="photo">
                    <img src={Img} alt="contact me"/>
                        </div></div>
                        <div class="footer">krathi

      </div>
                    
    </>
 
    
    );
}  

export default Contact;