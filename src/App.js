import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import Journal from "./journal/pages/Journal";
import NewEntry from "./journal/pages/NewEntry";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Blog from "./blog/pages/Blog";
import NewBlog from "./blog/pages/NewBlog";
import UpdateEntry from "./journal/pages/UpdateEntry";
import UpdateBlog from "./blog/pages/UpdateBlog";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Route path="/:userId/journal" exact>
            <Journal />
          </Route>
          <Route path="/journal/new" exact>
            <NewEntry />
          </Route>
          <Route path="/journal/:journalId">
            <UpdateEntry />
          </Route>
          <Route path="/:userId/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/new" exact>
            <NewBlog />
          </Route>
          <Route path="/blog/:blogId">
            <UpdateBlog />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
