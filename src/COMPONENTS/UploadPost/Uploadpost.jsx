import "../UploadPost/UploadPost.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPost() {
  const [userId, setUserId] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newPost = { post_body: postBody, user_id: userId };
    await axios.post(`${API_URL}/posts`, newPost);
  };
  return (
    <form className="upload-form" onSubmit={handleSubmitForm}>
      <h3 className="upload-form__title">Add your own post here!</h3>
      <label htmlFor="upload-form__name">user id</label>
      <input
        className="upload-form__name"
        onChange={handleUserIdChange}
      ></input>
      <label htmlFor="upload-form__body">post body</label>
      <input
        className="upload-form__body"
        onChange={handlePostBodyChange}
      ></input>
      <button className="upload-form__button" type="submit">
        upload
      </button>
    </form>
  );
}

export default UploadPost;
