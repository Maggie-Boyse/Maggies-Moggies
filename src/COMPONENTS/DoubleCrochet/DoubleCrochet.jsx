import "../DoubleCrochet/DoubleCrochet.scss";
import placeholder from "../../assets/images/crochet-image-placeholder.jpg";

function DoubleCrochet() {
  return (
    <section className="double">
      <h2 className="double__title">Double Crochet</h2>
      <div className="double__slipknot-1">
        <p className="double__text">
          Continuing forward, we will build on the previous row of single
          crochets. Considering that a double crochet will be "taller" than a
          single crochet, we want to start by chaining 2-3, depending on how
          loose or firm we want our turning chain to be. If starting with a
          foundation chain, we would start on the third chain from the hook.
          <span className="double__span"></span>
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-1"
          // replace with proper class name later
        />
      </div>

      <div className="double__slipknot-2">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-2"
          // replace with proper class name later
        />
        <p className="double__text">
          For the stitch itself, we will start by looping our yarn over the hook
          <span className="double__span">before</span> passing through the
          stitch. The next part is the same as single crochet, grab the yarn and
          pull it through. We will now have{" "}
          <span className="double__span">three</span> loops on our hook.
        </p>
      </div>

      <div className="double__slipknot-3">
        <p className="double__text">
          Next, grab the yarn again and pull through{" "}
          <span className="double__span">two</span> loops. There should still be
          two loops left on the hook.
        </p>
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-3"
          // replace with proper class name later
        />
      </div>

      <div className="double__slipknot-4">
        <img
          src={placeholder}
          // don't forget to update src and alt
          alt="placeholder"
          className="double__image-4"
          // replace with proper class name later
        />
        <p className="double__text">
          Repeat the last step once more - grabbing the yarn and pulling through
          two loops. That's a double crochet!
        </p>
      </div>
    </section>
  );
}

export default DoubleCrochet;
