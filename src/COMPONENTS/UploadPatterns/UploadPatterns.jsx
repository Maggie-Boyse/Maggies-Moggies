import "../UploadPatterns/UploadPatterns.scss";
    
function UploadPatterns() {
  return (
    <section className="upload">
      <div>
        <form className="upload__form">
          <p className="upload__text">
            Or, upload your pattern here
          </p>
          <input className="upload__input"></input>
          <button className="upload__button">upload</button>
        </form>
      </div>
    </section>
  );
}

export default UploadPatterns;
