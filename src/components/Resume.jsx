import React from "react";
import resume from "../assets/images/Pallavi_Ferrao_Resume.pdf";
const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} target="_blank">
        <p>Click to open PDF file in a new tab</p>
      </a>
    </div>
  );
};
export default Resume;
