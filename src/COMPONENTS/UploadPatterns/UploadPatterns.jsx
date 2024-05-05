import "../UploadPatterns/UploadPatterns.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPatterns() {
  const [patternTitle, setPatternTitle] = useState("");
  const [patternBody, setPatternBody] = useState("");
  const [patternImage, setPatternImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const formEl = e.target;

  //   const titleVal = formEl.patternTitle.value;
  //   const patternVal = formEl.patternBody.value;
  //   const imageVal = formEl.patternImage.value;

  const handlePatternTitleChange = (e) => {
    setPatternTitle(e.target.value);
  };
  const handlePatternBodyChange = (e) => {
    setPatternBody(e.target.value);
  };
  const handlePatternImageChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.files);

    setPatternImage(e.target.files[0]);
  };
  // if (titleVal === "" || patternVal === "" || imageVal === " ") {
  //   alert("Please fill out all the fields");
  //   return;
  // }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newPattern = {
      pattern_title: patternTitle,
      pattern_body: patternBody,
      pattern_image: patternImage,
    };
    await axios.post(`${API_URL}/patterns`, newPattern);
    setShowModal(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <form className="upload-pattern" onSubmit={handleSubmitForm}>
      <div className="upload-pattern__label-name">
        <label className="upload-pattern__label" htmlFor="upload-pattern__name">
          pattern name
        </label>
        <input
          className="upload-pattern__name"
          onChange={handlePatternTitleChange}
        ></input>
      </div>
      <div className="upload-pattern__label-body">
        <label className="upload-pattern__label" htmlFor="upload-pattern__body">
          pattern text
        </label>
        <input
          className="upload-pattern__body"
          onChange={handlePatternBodyChange}
        ></input>
      </div>
      <div className="upload-pattern__label-image">
        <label
          className="upload-pattern__label"
          htmlFor="upload-pattern__attach"
        >
          pattern image
        </label>
        <input
          type="file"
          className="upload-pattern__attach"
          onChange={handlePatternImageChange}
        ></input>
      </div>


      <button className="upload-pattern__button" type="submit">
        upload
      </button>

      {showModal && (
        <div className="upload-pattern__modal">
          <div className="upload-pattern__modal-content">
            <button
              onClick={closeModal}
              className="upload-pattern__modal-close"
            >
              {" "}
              close{" "}
            </button>
            <p>Upload Successful!</p>
          </div>
        </div>
      )}
    </form>
  );
}

export default UploadPatterns;
