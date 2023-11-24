import "../css/Education.css";
import react from "react";
import Card from "./Card.js";
function Education() {
  const EducationP = [
    {
      id: 1,
      H: "2019",
      p: "completed Secondary School Leaving Certificate (SSLC)at Shri Siddhivinayaka Resdential School, Hattiangadi",
      I:"edu"
    },
    {
      id: 2,
      H: "2021",
      p: " Completed Pre-University Course (PUC) at Viveka P U College, Kota",
      I:"edu2"
    },
    {
      id: 3,
      H: "2021-2023",
      p: "Currently pursuing my BE at Canara Engineering College, Benjanapadavu",
      I:"edu3"
    },
  ];

  return (
    <><br/><br/>
      <div class="Education">
        <h1>
          <a href="Education">Education</a>
        </h1>
        <br />
      </div>
      <div class="inf">
        <div class="div1">
          <h2>2019</h2>
          <br />
          <h4>
            completed Secondary School Leaving Certificate (SSLC)at
            <br />
            Shri Siddhivinayaka Resdential School, Hattiangadi
          </h4>
        </div>
        <div class="div2">
          <h2>2021</h2>
          <br />
          <h4>
            Completed Pre-University Course (PUC) at Viveka P U College, Kota
          </h4>
        </div>
        <div class="div3">
          <h2>2021-2023</h2>
          <br />
          <h4>
            Currently pursuing my BE at Canara Engineering College,
            Benjanapadavu{" "}
          </h4>
        </div>
      </div>

      <diV>
        {EducationP.map((item) => (
          <Card Education={item} />
        ))}
      </diV>
      
      
      

    </>
  );
}

export default Education;
