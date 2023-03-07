import React from "react";


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
         Projects List
        </section> 
      {/* Display projects on right as they are clicked  */}

    </div>
  );
}

export default Projects;
