import React, { useState, FC, FormEvent } from 'react';
import { signUp } from "../API"
import "./SignUp.css"

interface SignUpProps {
  login: Function
}


const SignUp: FC<SignUpProps> = ({login}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [foundUs, setFoundUs] = useState("");
  const [sendJobMatches, setSendJobMatches] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = {
      name, email, phoneNumber, password, passwordConfirmation, foundUs, sendJobMatches, agreedToTerms
    }

    signUp(data).then(user => login(user))
  }

  const passwordsMatch = () => {
    if (password.length > 0 && passwordConfirmation.length > 0 && password !== passwordConfirmation) {
      return (
        <div className="warning" >Password does not match</div>
      )
    }
  }

  const passwordLength = () => {
    if (password.length < 8 && password.length > 0){
      return (
        <div className="warning" >Password is too short</div>
      )
    }
  }

  return (
      <div className="content">
        <div className="signupbox">
          <form onSubmit={e => handleSubmit(e)} className="signupform">
              <label>Name:</label>
              <input value={name} onChange={e => setName(e.target.value)} name="name" />
              <label>Email:</label>
              <input value={email} onChange={e => setEmail(e.target.value)} name="email" />
              <label>Phone Number:</label>
              <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} name="phoneNumber" />
              <label>Password:</label>
              <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" />
              {passwordLength()}
              <label>Password Confirmation:</label>
              <input value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} name="passwordConfirmation" type="password" />
              {passwordsMatch()}
              <label>How did you hear about us:</label>
              <select value={foundUs} onChange={e => setFoundUs(e.target.value)} name="foundUs">
                <option>
                  LinkedIn
                </option>
                <option>
                  Facebook
                </option>
                <option>
                  Google
                </option>
                <option>
                  Word of mouth
                </option>
                <option>
                  Other
                </option>
              </select>
              <input checked={sendJobMatches} onChange={e => setSendJobMatches(!sendJobMatches)} name="sendJobMatches" type="checkbox"/>
              <label>Would you like us to send you curated job matches?</label>
              <input checked={agreedToTerms}  onChange={e => setAgreedToTerms(!agreedToTerms)} name="agreeToTerms" type="checkbox"/>
              <label>Do you agree to our terms of service & privacy policy?</label>
              <button>Sign Up</button>
          </form>
        </div>
      </div>
  );
}

export default SignUp;
