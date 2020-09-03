import React, { FC } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./SignUp"

interface UnauthorisedProps {
  login: Function
}

const Unauthorised: FC<UnauthorisedProps> = ({login}) => {
  return (
      <div>
        <Switch>
            <Route exact path="/signup">
                <SignUp login={login} />
            </Route>
            <Redirect to="/signup" />
        </Switch>
      </div>
  );
}

export default Unauthorised;
