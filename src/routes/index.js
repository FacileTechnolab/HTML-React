import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Speakers from "./Speakers";
import Events from "./Events";
import News from "./News";
import Contact from "./Contact";

function index() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/speakers" component={Speakers} />
        <Route path="/events" component={Events} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default index;
