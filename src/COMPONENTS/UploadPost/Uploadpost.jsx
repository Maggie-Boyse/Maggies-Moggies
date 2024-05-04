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
    <form className="upload-post" onSubmit={handleSubmitForm}>
      <h3 className="upload-post__title">Add your own post here!</h3>
      <label htmlFor="upload-post__name" className="upload-post__label">
        user id
      </label>
      <input
        className="upload-post__name"
        onChange={handleUserIdChange}
      ></input>
      <label htmlFor="upload-post__body" className="upload-post__label">
        post body
      </label>
      <input
        className="upload-post__body"
        onChange={handlePostBodyChange}
      ></input>
      <button className="upload-post__button" type="submit">
        post
      </button>
    </form>
  );
}

export default UploadPost;
