import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./SignUp"

const Unauthorised = () => {
  return (
      <div>
        <Switch>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Redirect to="/signup" />
        </Switch>
      </div>
  );
}

export default Unauthorised;
