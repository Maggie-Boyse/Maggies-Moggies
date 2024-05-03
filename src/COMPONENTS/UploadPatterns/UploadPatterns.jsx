import "../UploadPatterns/UploadPatterns.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/api";

function UploadPatterns() {
  const [patternTitle, setPatternTitle] = useState("");
  const [patternBody, setPatternBody] = useState("");
  const [patternImage, setPatternImage] = useState("");

  const handlePatternTitleChange = (e) => {
    setPatternTitle(e.target.value);
  };
  const handlePatternBodyChange = (e) => {
    setPatternBody(e.target.value);
  };
  const handlePatternImageChange = (e) => {
    setPatternImage(e.target.value);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newPattern = {
      pattern_title: patternTitle,
      pattern_body: patternBody,
      pattern_image: patternImage,
    };
    await axios.post(`${API_URL}/patterns`, newPattern);
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
    </form>
  );
}

export default UploadPatterns;
