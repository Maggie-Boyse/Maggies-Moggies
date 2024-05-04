import "../SignUp/SignUp.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";

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
    const newUser = { email: email, username: username, password: password };
    const signupRes = await axios.post(`${API_URL}/users`, newUser);

    if (signupRes.status === 200) {
      localStorage.setItem("authToken", signupRes.data.token);
      localStorage.setItem("username", signupRes.data.username);
      navigate("/");
    }
    /////// alert here?
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
