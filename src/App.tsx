import React, { useState, useEffect} from 'react';

import './App.css';

import Authorised from "./components/Authorised"
import Unauthorised from "./components/Unauthorised"

import { authorise, wakeUp } from "./API"

const App = () => {

  const [user, setUser] = useState({id: null});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.token) {
      authorise().then(user => setUser(user)).then(() => setIsLoading(false))
    } else {
      wakeUp()
      setIsLoading(false)
    }
  }, [])

  const signOut = () => {
    setUser({id: null})
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
      </header>
      {user.id !== null ? <Authorised signOut={signOut} /> : <Unauthorised />}
      <footer>
        <img alt="logo" height={100} width={100} src="https://us.directlyapply.com/imagesl/directlyapply.png" />
        <div className="footer">
          <div>
            <h3>Job Seekers</h3>
            <p>Search for a Job</p>
            <p>Resume Builder</p>
            <p>Job Application Tracker</p>
            <p>Your Account</p>
          </div>

          <div>
            <h3>Post A Job</h3>
            <p>Free Job Post</p>
            <p>Premium Pricing</p>
          </div>

          <div>
            <h3>Post A Job</h3>
            <p>Free Application Tracking</p>
            <p>Job Multi-Poster</p>
            <p>Diversity & Inclusion Checker</p>
            <p>Job Description Builder</p>
            <p>Programmatic Advertising</p>
          </div>

          <div>
            <h3>Resources</h3>
            <p>Job Description Templates</p>
            <p>Sample Interview Questions</p>
          </div>

          <div>
            <h3>Company</h3>
            <p>Insights / Blog</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
            <hr />
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h3>Social</h3>
            <a href="https://www.twitter.com/directlyapply" target="_blank" rel="noopener noreferrer"><p>Twitter</p></a>
            <a href="https://www.youtube.com/channel/UCfe1AsFvDeWVt2jDXRXx--g/" target="_blank" rel="noopener noreferrer"><p>YouTube</p></a>
            <a href="https://www.linkedin.com/company/directlyapply/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
            <a href="https://www.facebook.com/directlyapply" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a>
          </div>
        </div>
        <hr />
        <div>Proudly Built By Skye Geraghty</div>
      </footer>
    </div>
  );
}

export default App;
