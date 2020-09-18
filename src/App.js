import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/discover"} component={Discover} />
          <Route exact path={process.env.PUBLIC_URL + "/search"} component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
