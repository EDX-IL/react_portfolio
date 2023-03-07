import React from "react";
import avatar from "../images/cool-prog.jpg"


const styles = {
  home: {
    background: "#e4f0f5"
  },

}

function Home() {
  return (
    <div style={styles.home}>
      <h2>Welcome to Ian Logendra's Portfolio Page</h2>
      <p>
        This is my Home Page - where Excellence built in.
      </p>

        <img src={avatar} alt="I never dreamed i'd grow up to be a super cool programmer. But here i am killing it.  "/>
     
    </div>
  );
}

export default Home;
