import "../Chaining/Chaining.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";
// don't forget to replace and delete

function Chaining() {
  return (
    <section className="chaining">
      <div className="chaining__slipknot-1">
        <p>
          {" "}
          To begin, we will hold our yarn at one end, in a loop. Make sure your
          tail is <span>behind</span>! See image one.
        </p>
      </div>
      <div className="chaining__image">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="chaining__image-one"
          // replace with proper class name later
        />
      </div>
    </section>
  );
}

export default Chaining;
