import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    token ? setAuthenticated(true) : setAuthenticated(false);
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route path="/register">
        <Register
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
