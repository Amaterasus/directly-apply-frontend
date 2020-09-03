import React, { FC } from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import LoggedIn from "./LoggedIn"

interface AuthorisedProps {
  user: User
}

export const Authorised: FC<AuthorisedProps> = ({user}) => {
  return (
      <div>
        <Switch>
            <Route exact path="/loggedin">
                <LoggedIn user={user}/>
            </Route>
            <Redirect to="/loggedin" />
        </Switch>
      </div>
  );
}

export default Authorised;
