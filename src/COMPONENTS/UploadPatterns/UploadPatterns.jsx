import "../UploadPatterns/UploadPatterns.scss";

function UploadPatterns() {
  return (
    <section className="upload">
      <div>
        <form className="upload__form">
          <div className="upload__text-button">
            <p className="upload__text">Or, upload your pattern here</p>
            <button className="upload__button">upload</button>
          </div>
          <input className="upload__input"></input>
          <div className="upload__text-attach">
            <p className="upload__text">Attach your photo here!</p>
            <input type="file" className="upload__attach"></input>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UploadPatterns;
