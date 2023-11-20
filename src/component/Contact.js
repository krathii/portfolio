import "../css/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wdy0a8z', 'template_78ndc1o', form.current, 'x8AInYumThUd-IRQq')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        // Clear the form
        form.current.reset();

      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <>
                   
       <div className="informa">
        <h2 className="cm">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <center>
            <table>
              <tr>
                <td>
                  <label>NAME :</label>
                </td>
                <td>
                  <input name="user_name" type="text" placeholder="Enter Your Name" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label>MOBILE:</label>
                </td>
                <td>
                  <input name="mobileNo"
                    type="text"
                    placeholder="Enter Your phone number"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>E-MAIL :</label>
                </td>
                <td>
                  <input name="email" type="email" placeholder="Enter Your email" required />
                </td>
              </tr>
              <tr>
                <td>
                
                </td>
                
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="SUBMIT!!" />
                 
                </td>
              </tr>
            </table>
          </center>
        </form>
      </div><br/><br/>

                    
    </>
 
    
    );
}  

export default Contact;