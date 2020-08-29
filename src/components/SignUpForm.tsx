import React from 'react';

import './SignUpForm.css';

const SignUpForm = () => {
  return (
      <div className="signupbox">
        <form className="signupform">
            <label>Name:</label>
            <input />
            <label>Email:</label>
            <input />
            <label>Phone Number:</label>
            <input />
            <label>Password:</label>
            <input />
            <label>Password Confirmation:</label>
            <input />
            <label>How did you hear about us:</label>
            <input />
            <input type="checkbox"/>
            <label>Would you like us to send you curated job matches?</label>
            <input type="checkbox"/>
            <label>Do you agree to our terms of service & privacy policy?</label>
            <button>Sign Up</button>
        </form>
      </div>
  );
}

export default SignUpForm;
