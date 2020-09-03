import React, { FC } from 'react';

interface LoggedInProps {
  user: User
}

const LoggedIn: FC<LoggedInProps> = ({user}) => {
  return (
      <div className="loggedIn">
        <div>
          Your Name is {user.Name}
        </div>
        <div>
          Your Email is {user.Email}
        </div>
        <div>
          Your Phone number is {user.PhoneNumber}
        </div>
        <div>
          Your password has become {user.HashedPassword}
        </div>
        <div>
          You found us by {user.FoundUs}
        </div>
        {user.SendJobMatches ? <div>You agreed for us to send job matchdes</div> : <div>You didn't agree for us to send job matchdes</div>}
        {user.AgreedToTerms ? <div>You agreed to our terms</div> : <div>You didn't agree to our terms</div>}
        <div>
          
        </div>
      </div>
  );
}

export default LoggedIn;
