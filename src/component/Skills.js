import "../css/Skills.css";
import icon1 from "../svg icons/icons8-c-programming.svg"
import icon2 from "../svg icons/icons8-html.svg"
import icon3 from "../svg icons/icons8-css.svg"
import icon4 from "../svg icons/icons8-javascript.svg"
import react from "react";
function Skills() {
  return (
    <><br/><br/><br/>
    <br/><div className="foot">
      <div class="skills">
        <h1>
          <a href="Skills">Skills</a>
        </h1><br/>
      </div>
      <div class="Skills">
        <h2>
          As an engineer skills are likely to be diverse and depend on our
          specific field of engineering.<br/><br/>
          My skills includes the following,
        </h2>
        
      </div><br/><br/><br/><div class="infom">
      <div class="icon1">
      <img src={icon1} alt="svg"/>
      <h3>
        C 
      </h3>

      </div>
      <div class="icon2">
      <img src={icon2} alt="svg"/>
      <h3>
        HTML
      </h3>


      </div>
      <div class="icon3">
      <img src={icon3} alt="svg"/>
      <h3>
        CSS
      </h3>


      </div>
      <div class="icon4">
      <img src={icon4} alt="svg"/>
      <h3>
        JS
      </h3>


      </div></div><br/><br/>
      
      </div>
      
    </>
  );
}
export default Skills;
