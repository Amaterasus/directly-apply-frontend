import React, { FC } from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import LoggedIn from "./LoggedIn"

interface AuthorisedProps {
  signOut: Function
}

export const Authorised: FC<AuthorisedProps> = ({signOut}) => {
  return (
      <div>
        <Link to="login">
            <button onClick={() => signOut()}>Sign out</button>
        </Link>
        <Switch>
            <Route exact path="/loggedin">
                <LoggedIn />
            </Route>
            <Redirect to="/loggedin" />
        </Switch>
      </div>
  );
}

export default Authorised;
