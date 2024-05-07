import "../SingleCrochet/SingleCrochet.scss";
import chain6 from "../../assets/images/chain/chain-6.png";
import single1 from "../../assets/images/single/single-1.jpg";
import single2 from "../../assets/images/single/single-2.jpg";
import single3 from "../../assets/images/single/single-3.jpg";
import single4 from "../../assets/images/single/single-4.jpg";
import single5 from "../../assets/images/single/single-5.jpg";
import single6 from "../../assets/images/single/single-6.jpg";
import double1 from "../../assets/images/double/double-1.png";

function SingleCrochet() {
  return (
    <section className="single">
      <h2 className="single__title">Single Crochet</h2>

      <div className="single__set-1">
        <p className="single__text">
          For simplicity's sake, we will start with the chain we made in in the
          first step. Firstly, we can see each stitch down the chain we made.
          Make sure you're on the front of the chain! For a single crochet, we
          will start by inserting our hook into the second chain from the hook.
        </p>
        <div className="single__set-1-multiple-images">
          <img
            src={chain6}
            alt="foundation chain"
            className="single__image-multi"
          />
          <img
            src={single1}
            alt="placeholder"
            className="single__image-multi"
          />
        </div>
      </div>

      <div className="single__slipknot-2">
        <img src={single2} alt="placeholder" className="single__image" />
        <p className="single__text">
          Next, we will grab our yarn, and pull back through the same stitch we
          entered. We will now have <span className="single__span">two</span>{" "}
          loops on our hook.
        </p>
      </div>

      <div className="single__single__set-3">
        <p className="single__text">
          Now, grab the trailing yarn once more, and pull through both loops.
          That's a single crochet!
        </p>
        <div className="single__set-3-multiple-images">
          <img
            src={single3}
            alt="placeholder"
            className="single__image-multi"
          />
          <img
            src={single4}
            alt="placeholder"
            className="single__image-multi"
          />
        </div>
      </div>

      <div className="single__slipknot-4">
        <div className="single__multiple-images">
          <img
            src={single5}
            alt="placeholder"
            className="single__image-multi"
          />
          <img
            src={single6}
            alt="placeholder"
            className="single__image-multi"
          />
          <img
            src={double1}
            alt="placeholder"
            className="single__image-multi"
          />
        </div>
        <p className="single__text">
          We'll continue this pattern all down the row. But now what? Back to
          chaining! We'll "chain one" - this is called a turning chain, and the{" "}
          <span className="single__span">turn</span> our work around to face the
          other way. Our previous stitches from the last row now form somewhat
          of a "V" shape. From now on, we'll insert our hook here, through the
          "V".
        </p>
      </div>
    </section>
  );
}

export default SingleCrochet;
