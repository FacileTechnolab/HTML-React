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
    <Router>
      <Route path={`${process.env.PUBLIC_URL}/`} component={Header} />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/speakers`} component={Speakers} />
        <Route path={`${process.env.PUBLIC_URL}/events/:id`} component={EventItem} />
        <Route path={`${process.env.PUBLIC_URL}/events`} component={Events} />
        <Route path={`${process.env.PUBLIC_URL}/news/:id`} component={NewsItem} />
        <Route path={`${process.env.PUBLIC_URL}/news`} component={News} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
        <Route path={`${process.env.PUBLIC_URL}/tickets`} component={Tickets} />
        <Route path={`${process.env.PUBLIC_URL}/orderPlan`} component={OrderPlan} />
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default index;
