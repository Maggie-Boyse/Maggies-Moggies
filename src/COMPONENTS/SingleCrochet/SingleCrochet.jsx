import "../SingleCrochet/SingleCrochet.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function SingleCrochet() {
  return (
    <section className="single">
      <h2 className="single__title">Single Crochet</h2>
      <div className="single__slipknot-1">
        <p className="single__text">
          For simplicity's sake, we will start with the chain we made in in the
          first step. Firstly, we can see each stitch down the chain we made.
          Make sure you're on the front of the chain! For a single crochet, we
          will start by inserting our hook into the second chain from the hook.
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="single__image-1"
          // replace with proper class name later
        />
      </div>

      <div className="single__slipknot-2">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="single__image-2"
          // replace with proper class name later
        />
        <p className="single__text">
          Next, we will grab our yarn, and pull back through the same stitch we
          entered. We will now have <span className="single__span">two</span>{" "}
          loops on our hook.
        </p>
      </div>

      <div className="single__slipknot-3">
        <p className="single__text">
          Now, grab the trailing yarn once more, and pull through both loops.
          That's a single crochet!
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="single__image-3"
          // replace with proper class name later
        />
      </div>

      <div className="single__slipknot-4">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="single__image-4"
          // replace with proper class name later
        />
        <p className="single__text">
          We'll continue this pattern all down the row. But now what? Back to
          chaining! We'll "chain one" - this is called a turning chain, and the{" "}
          <span className="single__span">turn</span>
          our work around to face the other way. Our previous stitches from the
          last row now form somewhat of a "V" shape. From now on, we'll insert
          our hook here, through the "V".
        </p>
      </div>
    </section>
  );
}

export default SingleCrochet;
