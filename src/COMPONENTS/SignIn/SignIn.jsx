import "../SignIn/SignIn.scss";
import { useState } from "react";
import { API_URL } from "../../utils/api";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const validateField = () => {
    if (!username || !password) {
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validation = validateField();
    console.log(validation);
    if (!validation) {
      setShowErrorModal(true);
      return;
    }
    try {
      const loginRes = await axios.post(`${API_URL}/users/login`, {
        username,
        password,
      });
      if (loginRes.status === 200) {
        localStorage.setItem("authToken", loginRes.data.token);
        localStorage.setItem("username", loginRes.data.username);
        localStorage.setItem("user_id", loginRes.data.user_id);
        console.log(loginRes.data);
        setShowModal(true);
      }
    } catch (error) {
      setShowErrorModal(true);
      console.log(error, "Cannot log in right now");
      return;
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowErrorModal(false);
    setShowModal(false);
  };

  return (
    <form className="signin-form">
      <h3 className="signin-form__title">Sign In</h3>
      <label htmlFor="signin-form__username" className="signin-form__label">
        username*:
      </label>
      <input
        className="signin-form__input"
        value={username}
        onChange={handleUsernameChange}
        required
      ></input>
      <label htmlFor="signin-form__password" className="signin-form__label">
        password*:
      </label>
      <input
        className="signin-form__input"
        value={password}
        type="password"
        onChange={handlePasswordChange}
        required
      ></input>
      <button
        className="signin-form__button"
        type="submit"
        onClick={handleLogin}
      >
        sign in
      </button>

      {showModal && (
        <div className="signin-form__modal">
          <div className="signin-form__modal-content">
            <p>Sign in Successful!</p>
            <p> Welcome {username}!</p>
            <button onClick={closeModal} className="signin-form__modal-close">
              {" "}
              close{" "}
            </button>
          </div>
        </div>
      )}
      {showErrorModal && (
        <div className="signup-form__modal">
          <div className="signup-form__modal-content">
            <p>
              Please fill out all required fields, ensure password and username
              are correct!
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
};

export default SignIn;
