import React from "react";
import screenshot from "../images/screenshot.jpg"


const styles = {
  projects : {
    width:"100%",
    height:"100%",
    background: "#e4f0f5"
  },

}

function Projects() {
  return (
    <div style={styles.projects}>
      <h2>Projects Page</h2>
      <p>
        </p>
        {/* Display list of projects on left */}
       <section >
       {/* <p></p>
         Projects List
         <p></p> */}
       React Portfolio: 
       <p></p>
         <a href ="https://edx-il.github.io/react_portfolio/" rel="noreferrer" target="_blank"> Live Deployment </a>
    
          <p>
          <a href ="https://github.com/EDX-IL/react_portfolio" rel="noreferrer" target="_blank"> Git Hub Repo </a>


          </p>
          <p>
          <img src={screenshot} alt="Screenshot of project"/>


          </p>


        </section> 
      {/* Display projects on right as they are clicked  */}

    </div>
  );
}

export default Projects;
