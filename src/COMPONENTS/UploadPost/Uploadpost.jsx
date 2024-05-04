import "../UploadPost/UploadPost.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPost() {
  const [userId, setUserId] = useState("");
  const [postBody, setPostBody] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    setShowModal(true);
    navigate("/");
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
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

      {showModal && (
        <div className="upload-post__modal">
          <div className="upload-post__modal-content">
            <button onClick={closeModal} className="upload-post__modal-close">
              {" "}
              close{" "}
            </button>
            <p>Your comment has been posted!</p>
          </div>
        </div>
      )}

    </form>
  );
}

export default UploadPost;
