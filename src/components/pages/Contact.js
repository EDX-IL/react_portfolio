import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';



const styles = {
  contact: {
    width:"100%",
    height:"100%",
    background: "#e4f0f5"
  },

}

function Contact(props) {
  return (
    <div style={styles.contact}>
      <h2>Contact Page</h2>
      <p>
      Name: Ian Logendra
      </p>
      <p>
      GitHub: <a href = "https://github.com/EDX-IL" rel="noreferrer" target="_blank" > EDX-IL (Click Here) </a>
      </p>
      <p>
      LinkedIn: <a href ="https://uk.linkedin.com/in/ian-logendra-0b897" rel="noreferrer" target="_blank"> My Linked In (Click Here)</a>
      </p>
      <p>
      Email: <a href="edx@logendra.com"> Click Here to Send Email</a>
      </p>
     
    </div>
  );
}

export default Contact;
