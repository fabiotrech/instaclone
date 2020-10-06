import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PageContainer } from "./theme";
import "./app.css";

import Feed from "./pages/feed";
import NavBar from "./components/navbar";
import Profile from "./pages/profile";
import Inbox from "./pages/inbox";

const App = () => {
  return (
    <Router>
      <NavBar />

      <PageContainer>
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/inbox" component={Inbox} />
          <Route path="/:username" component={Profile} />
        </Switch>
      </PageContainer>
    </Router>
  );
};

export default App;
