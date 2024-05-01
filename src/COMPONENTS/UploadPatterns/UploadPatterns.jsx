import "../UploadPatterns/UploadPatterns.scss";

function UploadPatterns() {
  return (
    <section className="upload">
      <div>
        <form className="upload__form">
          <div className="upload__text-button">
            <label className="upload__text" htmlFor="upload__button">
              Or, upload your pattern here
            </label>
            <button className="upload__button">upload</button>
          </div>
          <input className="upload__input"></input>
          <div className="upload__text-attach">
            <label className="upload__text" htmlFor="upload__attach">
              Attach your photo here!
            </label>
            <input type="file" className="upload__attach"></input>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UploadPatterns;
