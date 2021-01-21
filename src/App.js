import React, { useState, useCallback, useEffect } from "react";
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
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook"

let logoutTimer;

const App = () => {

  //const { token, login, logout, userId } = useAuth()

  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState()
  const [userId, setUserId] = useState(false);



  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60)
    setTokenExpirationDate(tokenExpirationDate)
    localStorage.setItem('userData', JSON.stringify({ userId: uid, token: token, expiration: tokenExpirationDate.toISOString() }))
  }, []);

  const logout = useCallback(() => {
    setToken(null)
    setTokenExpirationDate(null)
    setUserId(null);
    localStorage.removeItem('userData')
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime()
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration))
    }
  }, [login])


  let routes;

  if (token) {
    routes = (
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
