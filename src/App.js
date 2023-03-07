import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


const styles = {
  header: {
    background: "#c1d8e0"
  },

}

function    App() {
  return (
    

    <Router>


      <div style={styles.header}>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="react_portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react_portfolio/" element={<Home />} />
          <Route path="/react_portfolio/projects" element={<Projects />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react_portfolio/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

