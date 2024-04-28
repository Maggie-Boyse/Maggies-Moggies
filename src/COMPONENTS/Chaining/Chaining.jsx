import "../Chaining/Chaining.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";
// don't forget to replace and delete

function Chaining() {
  return (
    <section className="chaining">
      <div className="chaining__slipknot-1">
        <p className="chaining__text">
          {" "}
          To begin, we will hold our yarn at one end, in a loop. Make sure your
          tail is <span className="chaining__span">behind</span>! Pop your hook
          through the loop you made. <br />
          <span className="chaining__span">
            Note, finding a comfy way to hold the yarn is highly individualized.
            Pictured is my preferred method.
          </span>
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="chaining__image-1"
          // replace with proper class name later
        />
      </div>

      <div className="chaining__slipknot-2">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="chaining__image-2"
          // replace with proper class name later
        />
        <p className="chaining__text">
          Then, catch your trailing yarn, and pull it back{" "}
          <span className="chaining__span">through</span> the loop you made,
          pulling snug.
        </p>
      </div>

      <div className="chaining__slipknot-3">
        <p className="chaining__text">
          Now, keeping our hook snug inside the loop, we'll grasp the knot
          between finger and thumb. Catch the trailing yarn once more, and pull
          through the loop.
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="chaining__image-3"
          // replace with proper class name later
        />
      </div>

      <div className="chaining__slipknot-4">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="chaining__image-4"
          // replace with proper class name later
        />
        <p className="chaining__text">
          Repeat until desired length of project!
        </p>
      </div>
    </section>
  );
}

export default Chaining;
