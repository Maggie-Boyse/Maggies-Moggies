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
    <section className="upload">
      <form className="upload__form" onSubmit={handleSubmitForm}>
        <h3 className="upload__title">Or, upload your pattern here</h3>
        <div className="upload__label-name">
          <label
            className="upload__pattern-label"
            htmlFor="upload__pattern-name"
          >
            pattern name
          </label>
          <input
            className="upload__pattern-name"
            onChange={handlePatternTitleChange}
          ></input>
        </div>
        <div className="upload__body">
          <label
            className="upload__pattern-label"
            htmlFor="upload__pattern-body"
          >
            pattern text
          </label>
          <input
            className="upload__pattern-body"
            onChange={handlePatternBodyChange}
          ></input>
        </div>
        <div className="upload__text-attach">
          <label className="upload__text" htmlFor="upload__attach">
            pattern image
          </label>
          <input
            type="file"
            className="upload__attach"
            onChange={handlePatternImageChange}
          ></input>
        </div>
        <button className="upload__button" type="submit">
          upload
        </button>
      </form>
    </section>
  );
}

export default UploadPatterns;
