import "../UploadPost/UploadPost.scss";
// import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function UploadPost() {
  return (
    <form className="upload__form">
      <div className="upload__text-button">
        <p className="upload__text">Or, upload your pattern here</p>
        <button className="upload__button">upload</button>
      </div>
      <input className="upload__input"></input>
    </form>
  );
}

export default UploadPost;
