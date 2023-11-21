import "../css/Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import load from "../svg icons/loader-1-svgrepo-com.svg";

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wdy0a8z",
        "template_78ndc1o",
        form.current,
        "x8AInYumThUd-IRQq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          // Clear the form
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="informa">
        <div class="Contact">
          <h1>
            <a href="contact">Contact</a>
          </h1>
          <br />
          <br />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <center>
            <table>
              <tr>
                <td>
                  <label>NAME :</label>
                </td>
                <td>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>MOBILE:</label>
                </td>
                <td>
                  <input
                    name="mobileNo"
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
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your email"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {loading ? (
                    <img src={load} alt="loading.." />
                  ) : (
                    <input type="submit" value="SUBMIT!!" />
                  )}
                </td>
              </tr>
            </table>
          </center>
        </form>
      </div>
      <br />
      <br />

      <div class="footer">krathi</div>
    </>
  );
};

export default Contact;
