import "../UploadPatterns/UploadPatterns.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPatterns() {
  const [patternTitle, setPatternTitle] = useState("");
  const [patternBody, setPatternBody] = useState("");
  // const [patternImage, setPatternImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handlePatternTitleChange = (e) => {
    setPatternTitle(e.target.value);
  };
  const handlePatternBodyChange = (e) => {
    setPatternBody(e.target.value);
  };
  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     setPatternImage(e.target.files[0]);
  //   }
  // };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("user_id");
    if (username === null) {
      setShowErrorModal(true);
      return;
    } else {
      try {
        const newPattern = {
          pattern_title: patternTitle,
          pattern_body: patternBody,
          pattern_image: patternImage,
          user_id: userId,
        };
        await axios.post(`${API_URL}/patterns`, newPattern);
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
    <form className="upload-pattern" onSubmit={handleSubmitForm}>
      <div className="upload-pattern__label-name">
        <label className="upload-pattern__label" htmlFor="upload-pattern__name">
          pattern name*:
        </label>
        <input
          className="upload-pattern__name"
          onChange={handlePatternTitleChange}
          required
        ></input>
      </div>
      <div className="upload-pattern__label-body">
        <label className="upload-pattern__label" htmlFor="upload-pattern__body">
          pattern text*:
        </label>
        <textarea
          className="upload-pattern__body"
          onChange={handlePatternBodyChange}
          required
        ></textarea>
      </div>

      {/* <div className="upload-pattern__label-image">
        <label
          className="upload-pattern__label"
          htmlFor="upload-pattern__attach"
        >
          pattern image:
        </label>

        <input
          type="file"
          className="upload-pattern__attach"
          onChange={handleFileChange}
        ></input>
      </div> */}

      <button className="upload-pattern__button" type="submit">
        upload
      </button>

      {showModal && (
        <div className="upload-pattern__modal">
          <div className="upload-pattern__modal-content">
            <p className="upload-pattern__modal-text">Upload Successful!</p>
            <button
              onClick={closeModal}
              className="upload-pattern__modal-close"
            >
              {" "}
              close{" "}
            </button>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="upload-post__modal">
          <div className="upload-pattern__modal-content">
            <p className="upload-pattern__modal-text">
              Please log in to post a comment!
            </p>
            <button
              onClick={closeModal}
              className="upload-pattern__modal-close"
            >
              {" "}
              close{" "}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default UploadPatterns;
