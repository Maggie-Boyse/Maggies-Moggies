import "../SignIn/SignIn.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/api";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginRes = await axios.post(`${API_URL}/users/login`, {
      username,
      password,
    });

    if (loginRes.status === 200) {
      localStorage.setItem("authToken", loginRes.data.token);
      localStorage.setItem("username", loginRes.data.username);
      setShowModal(true);
      navigate("/");
    } else {
      // Handle login error
    }
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <form className="signin-form">
      <h3 className="signin-form__title">Sign In</h3>
      <label htmlFor="signin-form__username" className="signin-form__label">
        username
      </label>
      <input
        className="signin-form__input"
        value={username}
        onChange={handleUsernameChange}
        required
      ></input>
      <label htmlFor="signin-form__password" className="signin-form__label">
        password
      </label>
      <input
        className="signin-form__input"
        value={password}
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
            <button onClick={closeModal} className="signin-form__modal-close">
              {" "}
              close{" "}
            </button>
            <p>Sign in Successful!</p>
            <p> Welcome {username}</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default SignIn;
