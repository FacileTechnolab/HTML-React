import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "./Home";
import Speakers from "./Speakers";
import Events from "./Events";
import EventItem from "./Events/EventItem";
import News from "./News";
import NewsItem from "./News/NewsItem";
import Contact from "./Contact";
import Tickets from "./Tickets";
import OrderPlan from "./OrderPlan";

function index() {
  return (
    <Router basename="/">
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/speakers" component={Speakers} />
        <Route path="/events/:id" component={EventItem} />
        <Route path="/events" component={Events} />
        <Route path="/news/:id" component={NewsItem} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/orderPlan" component={OrderPlan} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default index;
