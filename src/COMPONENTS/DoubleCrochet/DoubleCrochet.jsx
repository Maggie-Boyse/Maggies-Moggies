import "../DoubleCrochet/DoubleCrochet.scss";
import double2 from "../../assets/images/double/double-2.jpg";
import double3 from "../../assets/images/double/double-3.jpg";
import double4 from "../../assets/images/double/double-4.jpg";
import double5 from "../../assets/images/double/double-5.jpg";
import double6 from "../../assets/images/double/double-6.jpg";
import double7 from "../../assets/images/double/double-7.jpg";
import double8 from "../../assets/images/double/double-8.jpg";
import double9 from "../../assets/images/double/double-9.jpg";
import double10 from "../../assets/images/double/double-10.jpg";
import double11 from "../../assets/images/double/double-11.jpg";
import double12 from "../../assets/images/double/double-12.jpg";
import double13 from "../../assets/images/double/double-13.jpg";
import double14 from "../../assets/images/double/double-14.jpg";

function DoubleCrochet() {
  return (
    <section className="double">
      <h2 className="double__title">Double Crochet</h2>
      <div className="double__set-1">
        <p className="double__text">
          Continuing forward, we will build on the previous row of single
          crochets. Considering that a double crochet will be "taller" than a
          single crochet, we want to start by chaining 2-3, depending on how
          loose or firm we want our turning chain to be. If starting with a
          foundation chain, we would start on the third chain from the hook.
          <span className="double__span"></span>
        </p>
        <div className="double__set-1-multiple-images">
          <img
            src={double2}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double3}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double4}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double5}
            alt="placeholder"
            className="double__image-multi"
          />
        </div>
      </div>

      <div className="double__slipknot-2">
        <div className="double__multiple-images">
          <img
            src={double6}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double7}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double8}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double9}
            alt="placeholder"
            className="double__image-multi"
          />
        </div>
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
        <div className="double__multiple-images">
          <img
            src={double10}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double11}
            alt="placeholder"
            className="double__image-multi"
          />
        </div>
      </div>

      <div className="double__slipknot-4">
        <div className="double__multiple-images">
          <img
            src={double12}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double13}
            alt="placeholder"
            className="double__image-multi"
          />
          <img
            src={double14}
            alt="placeholder"
            className="double__image-multi"
          />
        </div>
        <p className="double__text">
          Repeat the last step once more - grabbing the yarn and pulling through
          two loops. That's a double crochet!
        </p>
      </div>
    </section>
  );
}

export default DoubleCrochet;
