import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // const loginRes = await axios.post("some_backend_server/login", {
    //   username,
    //   password,
    // });
    const loginRes = {
      status: 200,
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImtldmluIiwiaWF0IjoxNTE2MjM5MDIyfQ.c_VbOvn5RyeQpEC5Tnk-V2aT2dy4T8fgArO_P7-8jjI",
      },
    };

    if (loginRes.status === 200) {
      localStorage.setItem("authToken", loginRes.data.token);
      navigate("/profile");
    } else {
      // Handle login error
    }
  };

  return (
    <form className="signin-form" >
      <h3 className="signin-form__title">Sign In</h3>
      <label htmlFor="signin-form__username">username</label>
      <input
        className="signin-form__username"
        value={username}
        onChange={handleUsernameChange}
      ></input>
      <label htmlFor="signin-form__password">password</label>
      <input
        className="signin-form__password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <button
        className="signin-form__button"
        type="submit"
        onClick={handleLogin}
      >
        sign in
      </button>
    </form>
  );
};

export default SignIn;
