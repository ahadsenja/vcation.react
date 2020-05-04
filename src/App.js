import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LansingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LansingPage} />
      </Router>
    </div>
  );
}

export default App;
