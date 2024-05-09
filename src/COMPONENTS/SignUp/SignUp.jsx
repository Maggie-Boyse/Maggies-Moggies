import "../SignUp/SignUp.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onEmailChange = (e) => setEmail(e.target.value);
  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const validateField = () => {
    if (!username || !password || !email) {
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validation = validateField();
    console.log(validation);
    if (!validation) {
      setShowErrorModal(true);
      return;
    }
    const newUser = { email: email, username: username, password: password };
    try {
      const signupRes = await axios.post(`${API_URL}/users`, newUser);
      if (signupRes.status === 200) {
        localStorage.setItem("authToken", signupRes.data.token);
        localStorage.setItem("username", signupRes.data.username);
        localStorage.setItem("userId", signupRes.data.id);
        setShowModal(true);
      }
    } catch (error) {
      console.log(error, "Cannot sign up right now");
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowErrorModal(false);
    setShowModal(false);
  };

  return (
    <form className="signup-form">
      <h3 className="signup-form__title">Sign Up</h3>
      <label htmlFor="signup-form__email" className="signup-form__label">
        email*:
      </label>
      <input
        className="signup-form__input"
        value={email}
        onChange={onEmailChange}
        required
      ></input>
      <label htmlFor="signup-form__username" className="signup-form__label">
        username*:
      </label>
      <input
        className="signup-form__input"
        value={username}
        onChange={onUsernameChange}
        required
      ></input>
      <label htmlFor="signup-form__password" className="signup-form__label">
        password*:
      </label>
      <input
        className="signup-form__input"
        value={password}
        type="password"
        onChange={onPasswordChange}
        required
      ></input>
      <button
        className="signup-form__button"
        type="submit"
        onClick={handleSignup}
      >
        signup
      </button>

      {showModal && (
        <div className="signup-form__modal">
          <div className="signup-form__modal-content">
            <p className="signup-form__modal-text">Sign up Successful!</p>
            <p className="signup-form__modal-text"> Welcome {username}!</p>
            <button onClick={closeModal} className="signup-form__modal-close">
              {" "}
              close{" "}
            </button>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="signup-form__modal">
          <div className="signup-form__modal-content">
            <p className="signup-form__modal-text">
              Please fill out all required fields!
            </p>
            <button onClick={closeModal} className="signup-form__modal-close">
              {" "}
              close{" "}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default SignUp;
