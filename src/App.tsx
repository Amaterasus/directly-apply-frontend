import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './App.css';

import Authorised from "./components/Authorised"
import Unauthorised from "./components/Unauthorised"

import { authorise, wakeUp } from "./API"
import Footer from './components/Footer';

const App = () => {

  const [user, setUser] = useState({ID: "", Name: "", Email: "", PhoneNumber: "", HashedPassword: "", FoundUs: "", SendJobMatches: "", AgreedToTerms: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      authorise().then(user => login(user)).then(() => setIsLoading(false))
    } else {
      wakeUp()
      setIsLoading(false)
    }
  }, [])

  const signOut = () => {
    setUser({ID: "", Name: "", Email: "", PhoneNumber: "", HashedPassword: "", FoundUs: "", SendJobMatches: "", AgreedToTerms: ""})
  }

  const login = (data: User) => {
    setUser(data)
  }

  const isLoggedIn = () => {
    if (user.ID !== ""){
      return (
      <Link className="signOut" to="login">
            <button className="signOut" onClick={() => signOut()}>Sign out</button>
      </Link>
      )} else {
        return (
          <button>Login</button>
        )
      }
  }

  if (isLoading) {
    return (
      <div>
        If you're seeing this message then the Application is loading. The Heroku server can take up to 30 seconds to load. It will sort itself out no need to refresh.
      </div>
      )}

  return (
    <div className="App">
      <header>
        <img alt="logo" height={50} width={50} src="https://us.directlyapply.com/imagesl/directlyapply.png" />
        {isLoggedIn()}
      </header>
      {user.ID !== "" ? <Authorised user={user}  /> : <Unauthorised login={login} />}
      <Footer />
    </div>
  );
}

export default App;
