import React, { useEffect, useState } from "react";

const SignUpForm = () => {
  const [validEmail, setValidEmail] = useState(true);
  const [passwordLength, setPasswordLength] = useState(true);
  const [checkPassword, setCheckPassword] = useState("");
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(true);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~]).{8,}$/;

  function checkEmail(e) {
    setValidEmail(
      e.target.value.indexOf("@") > 0 &&
        e.target.value.indexOf(".") > 2 &&
        e.target.value.indexOf(".") < e.target.value.length - 1
    );
  }

  function passwordCheck(event){
    if(event.target.value.match(passwordRegex)){
        setCheckPassword(event.target.value);
        setPasswordLength(true);
    }
    else{
        setPasswordLength(false);
    }
  }

  function confirmPasswordCheck(event){
    if(event.target.value === checkPassword){
        setCheckConfirmPassword(true);
    }
    else{
        setCheckConfirmPassword(false);
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" onChange={checkEmail} />
          {!validEmail && <p>Invalid email format</p>}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" onChange={passwordCheck} />
          {!passwordLength && <p>Password is invalid.</p>}
        </div>

        <div>
        <label htmlFor="password">Confirm Password: </label>
          <input type="password" onChange={confirmPasswordCheck} />
          {!checkConfirmPassword && <p>Passwords do not match</p>}
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
