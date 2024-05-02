import "../UploadPost/UploadPost.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPost() {
  // const [username, setUsername] = useState("");
  const [postBody, setPostBody] = useState("");
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };
  // onChange={handleUsernameChange}
  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newPost = { post_body: postBody };
    await axios.post(`${API_URL}/posts`, newPost);
  };
  return (
    <form className="upload__form" onSubmit={handleSubmitForm}>
      <div className="upload__text-button">
        <p className="upload__text">Add your own post here!</p>
        <input className="upload__name" ></input>
        <input className="upload__body" onChange={handlePostBodyChange}></input>
        <button className="upload__button" type="submit">
          upload
        </button>
      </div>
    </form>
  );
}

export default UploadPost;
