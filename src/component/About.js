import "../css/About.css";
import Image from "../Images/myphoto.jpg"
import react from "react";
function About() {
  return (
    <>
      <div class="About">
        <h1>
          <a href="About">About</a>
        </h1><br/>
      </div>
      <div class="infor">
        <div class="ab1">
        <img src={Image} alt="hello"/>
        </div>
       <div class="ab2"> <h2>HII THERE!!</h2>
          <h1>I'M KRATHI</h1>
          <h3>
          I'm pursuing my BE in <big>Canara Engineering College </big>
          Benjanapadavu.
          <br /><br/>I am <del>passionate</del> about Engineering and will embrace
          any opportunity to develop my skills and flourish in my choosen
          career.
          <br/>
          <b>I believe in hardwork.</b></h3>
        <br/><br/></div>
      
      </div><br/><br/><br/>
      
      
    </>
  );
}

export default About;
