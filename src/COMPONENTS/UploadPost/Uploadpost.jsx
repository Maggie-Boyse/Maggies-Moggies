import "../UploadPost/UploadPost.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPost() {
  const [postBody, setPostBody] = useState("");
  const [postData, setPostData] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("user_id");

    if (username === null) {
      setShowErrorModal(true);
      return;
    } else {
      try {
        const newPost = { post_body: postBody, user_id: userId };
        await axios.post(`${API_URL}/posts`, newPost);
        setShowModal(true);
      } catch (error) {
        console.log(error, "Cannot post right now");
      }
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowErrorModal(false);
  };

  return (
    <form className="upload-post" onSubmit={handleSubmitForm}>
      <h3 className="upload-post__title">Add a posting of your own!</h3>
      <label htmlFor="upload-post__body" className="upload-post__label">
        Comment here:
      </label>
      <input
        className="upload-post__body"
        onChange={handlePostBodyChange}
        required
      ></input>

      <button className="upload-post__button" type="submit">
        post
      </button>

      {showErrorModal && (
        <div className="upload-post__modal">
          <p className="upload-post__modal-content">
            Please log in to post a comment!
          </p>
          <button onClick={closeModal} className="upload-post__modal-close">
            {" "}
            close{" "}
          </button>
        </div>
      )}

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
