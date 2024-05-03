import "../SignUp/SignUp.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailChange = (e) => setEmail(e.target.value);
  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const signupRes = {
      status: 200,
    };
    if (signupRes === 200) {
      navigate("/login");
    }
  };
  return (
    <form className="signup-form">
      <h3 className="signup-form__title">Sign Up</h3>
      <label htmlFor="signup-form__email" className="signup-form__label">
        email
      </label>
      <input
        className="signup-form__input"
        value={email}
        onChange={onEmailChange}
      ></input>
      <label htmlFor="signup-form__username" className="signup-form__label">
        username
      </label>
      <input
        className="signup-form__input"
        value={username}
        onChange={onUsernameChange}
      ></input>
      <label htmlFor="signup-form__password" className="signup-form__label">
        password
      </label>
      <input
        className="signup-form__input"
        value={password}
        onChange={onPasswordChange}
      ></input>
      <button
        className="signup-form__button"
        type="submit"
        onClick={handleSignup}
      >
        signup
      </button>
    </form>
  );
}

export default SignUp;
